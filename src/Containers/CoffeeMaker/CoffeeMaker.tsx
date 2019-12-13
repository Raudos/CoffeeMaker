import React from 'react';
import { CoffeeMakerProps } from "./interfaces/CoffeeMakerProps";
import { CoffeeMakerState } from "./interfaces/CoffeeMakerState";
import HttpClient from "../../Utils/httpClient/httpClient";
import { RequestStatus } from "../../Utils/httpClient/interfaces/requestStatus";
import { BeverageFactory } from "../../Domain/Beverage/BeverageFactory";
import { StockIngredientsFactory } from "../../Domain/StockIngredient/StockIngredientsFactory";
import { UserDisplay } from "../UserDisplay/UserDisplay";
import { Beverage } from "../../Domain/Beverage/interfaces/Beverage";
import { updateIngredientsStockApiResponse } from "./mocks/updateIngedientsStockApiResponse";
import { StockIngredient } from "../../Domain/StockIngredient/interfaces/StockIngredient";
import { BEVERAGES_LIST, INGREDIENTS_STOCK_LIST } from "../../Consts/apiUrls";

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
      const beveragesPromise = httpClient(BEVERAGES_LIST);
      const ingredientsPromise = httpClient(INGREDIENTS_STOCK_LIST);

      const [ beverages, ingredients ] = await Promise.all([ beveragesPromise, ingredientsPromise ]);

      this.setState({
        requestStatus: RequestStatus.Completed,
        beveragesToPick: BeverageFactory(beverages, ingredients),
        ingredientsStock: StockIngredientsFactory(ingredients),
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
    } catch(e) {
      this.setState({
        requestStatus: RequestStatus.Failed,
      });
    }
  };

  private updateBeveragesStatus = (ingredientsStock: StockIngredient[] | []) => {
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
