import { IngredientApiData } from "../../Ingredient/interfaces/IngredientApiData";

export interface StockIngredientApiData extends IngredientApiData {
  stock: number;
}
