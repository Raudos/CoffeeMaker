import {Beverage, Beverage as IBeverage} from "../../../Domain/Beverage/interfaces/Beverage";
import {updateIngredientsStockApiResponse} from "../../CoffeeMaker/mocks/updateIngedientsStockApiResponse";

export interface UserDisplayProps {
  beveragesToPick: IBeverage[];
  updateIngredientsStockData: (beverage: Beverage, httpClient?: any) => Promise<void>;
}
