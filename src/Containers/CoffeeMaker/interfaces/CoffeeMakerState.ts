import { Beverage as IBeverage } from "../../../Domain/Beverage/interfaces/Beverage";
import { RequestStatus } from "../../../Utils/httpClient/interfaces/requestStatus";
import { StockIngredient } from "../../../Domain/StockIngredient/interfaces/StockIngredient";

export interface CoffeeMakerState {
  requestStatus: RequestStatus;
  beveragesToPick: IBeverage[] | [];
  ingredientsStock: StockIngredient[] | [];
}
