import { IngredientApiData } from "../../Ingredient/interfaces/IngredientApiData";

export interface BeverageIngredientApiData extends IngredientApiData {
  amountRequired: number;
}
