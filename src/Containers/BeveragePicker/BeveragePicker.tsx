import React from 'react';
import { BeveragePickerProps } from "./interfaces/BeveragePickerProps";
import { BeveragePickerState } from "./interfaces/BeveragePickerState";
import httpClient from "../../utils/httpClient/httpClient";
import {RequestStatus} from "../../utils/httpClient/interfaces/requestStatus";
import {BeverageFactory} from "../../Domain/Beverage/BeverageFactory";
import {BeveragesList} from "../../Components/BeveragesList/BeveragesList";

export class BeveragePicker extends React.Component<BeveragePickerProps, BeveragePickerState> {
  constructor(props: BeveragePickerProps) {
    super(props);

    this.state = {
      fetchingStatus: RequestStatus.Ongoing,
      beveragesToPick: [],
      ingredientsStock: [],
    };
  }

  private fetchInitialData = async (): Promise<void> => {
    try {
      const beveragesPromise = httpClient('http://localhost:3003/beverages');
      const ingredientsPromise = httpClient('http://localhost:3003/beverages');

      const [ beverages, ingredients ] = await Promise.all([ beveragesPromise, ingredientsPromise ]);
      const beveragesArray = Array.isArray(beverages) ? beverages : [];
      const ingredientsArray = Array.isArray(ingredients) ? ingredients : [];

      this.setState({
        fetchingStatus: RequestStatus.Completed,
        beveragesToPick: BeverageFactory(beveragesArray, ingredientsArray),
        ingredientsStock: ingredientsArray,
      });
    } catch (e) {
      this.setState({
        fetchingStatus: RequestStatus.Failed,
      });
    }
  };

  componentDidMount(): void {
    this.fetchInitialData();
  }

  render() {
    switch(this.state.fetchingStatus) {
      case (RequestStatus.Completed):
        return <BeveragesList beveragesToPick={this.state.beveragesToPick} />;
      case (RequestStatus.Ongoing):
        return <div>Loader</div>;
      default:
        return <div>Error</div>;
    }
  }
}
