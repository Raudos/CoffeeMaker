import { IngredientData } from "../../Ingredient/interfaces/IngredientData";

export interface BeverageData {
  id: number;
  name: string;
  ingredients: IngredientData[];
}
