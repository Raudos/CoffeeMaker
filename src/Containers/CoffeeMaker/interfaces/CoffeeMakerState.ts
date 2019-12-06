import {Beverage as IBeverage} from "../../../Domain/Beverage/interfaces/Beverage";
import {RequestStatus} from "../../../utils/httpClient/interfaces/requestStatus";
import {Ingredient as IIngredient} from "../../../Domain/Ingredient/interfaces/Ingredient";

export interface CoffeeMakerState {
  requestStatus: RequestStatus;
  beveragesToPick: IBeverage[] | [];
  ingredientsStock: IIngredient[] | [];
}
