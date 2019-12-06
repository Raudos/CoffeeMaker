import React from 'react';
import { CoffeeMakerProps } from "./interfaces/CoffeeMakerProps";
import { CoffeeMakerState } from "./interfaces/CoffeeMakerState";
import HttpClient from "../../utils/httpClient/httpClient";
import { RequestStatus } from "../../utils/httpClient/interfaces/requestStatus";
import { BeverageFactory } from "../../Domain/Beverage/BeverageFactory";
import { IngredientsFactory } from "../../Domain/Ingredient/IngredientsFactory";
import { UserDisplay } from "../UserDisplay/UserDisplay";
import {Beverage} from "../../Domain/Beverage/interfaces/Beverage";
import {updateIngredientsStockApiResponse} from "./mocks/updateIngedientsStockApiResponse";
import {Ingredient as IIngredient} from "../../Domain/Ingredient/interfaces/Ingredient";

export class CoffeeMaker extends React.Component<CoffeeMakerProps, CoffeeMakerState> {
  constructor(props: CoffeeMakerProps) {
    super(props);

    this.state = {
      requestStatus: RequestStatus.Ongoing,
      beveragesToPick: [],
      ingredientsStock: [],
    };
  }

  private fetchInitialData = async (httpClient = HttpClient): Promise<void> => {
    try {
      const beveragesPromise = httpClient('http://localhost:3003/beverages');
      const ingredientsPromise = httpClient('http://localhost:3003/stock');

      const [ beverages, ingredients ] = await Promise.all([ beveragesPromise, ingredientsPromise ]);

      this.setState({
        requestStatus: RequestStatus.Completed,
        beveragesToPick: BeverageFactory(beverages, ingredients),
        ingredientsStock: IngredientsFactory(ingredients),
      });
    } catch (e) {
      this.setState({
        requestStatus: RequestStatus.Failed,
      });
    }
  };

  public updateIngredientsStockData = async (beverage: Beverage, httpClient = updateIngredientsStockApiResponse): Promise<void> => {
    const data = {
      ingredientsStock: this.state.ingredientsStock,
      beverage,
    };

    try {
      const ingredientsStock = await httpClient('', { data });
      this.updateBeveragesStatus(ingredientsStock);

      this.setState({
        ingredientsStock,
      });

      return Promise.resolve();
    } catch(e) {
      this.setState({
        requestStatus: RequestStatus.Failed,
      });

      return Promise.reject();
    }
  };

  private updateBeveragesStatus = (ingredientsStock: IIngredient[] | []) => {
    const { beveragesToPick } = this.state;

    beveragesToPick.forEach((beverage) => {
      beverage.updateCanBeBrewedStatus(ingredientsStock);
    });
  };

  componentDidMount(): void {
    this.fetchInitialData();
  }

  render() {
    const { requestStatus, beveragesToPick } = this.state;

    switch (requestStatus) {
      case (RequestStatus.Completed):
        return (
          <UserDisplay
            beveragesToPick={beveragesToPick}
            updateIngredientsStockData={this.updateIngredientsStockData}
          />
        );
      case (RequestStatus.Ongoing):
        return <div>Loader</div>;
      default:
        return <div>Error</div>;
    }
  }
}
