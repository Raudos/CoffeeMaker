import { Ingredient } from "../../Ingredient/interfaces/Ingredient";

export interface BeverageIngredient extends Ingredient {
  amountRequired: number;
}
