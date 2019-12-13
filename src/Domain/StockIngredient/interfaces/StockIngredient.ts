import { Ingredient}  from "../../Ingredient/interfaces/Ingredient";

export interface StockIngredient extends Ingredient{
  stock: number;
}
