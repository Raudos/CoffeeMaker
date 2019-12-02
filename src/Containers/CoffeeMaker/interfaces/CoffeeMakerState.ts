import { Beverage } from "../../../Domain/Beverage/interfaces/Beverage";

export interface CoffeeMakerState {
  pickedBeverage: Beverage | null;
}
