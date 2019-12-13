import { Beverage, Beverage as IBeverage } from "../../../Domain/Beverage/interfaces/Beverage";

export interface UserDisplayProps {
  beveragesToPick: IBeverage[];
  updateIngredientsStockData: (beverage: Beverage, httpClient?: any) => Promise<void>;
}
