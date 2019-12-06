import {IngredientAmount} from "../../Ingredient/interfaces/IngredientAmount";
import {BeveragePrice} from "./BeveragePrice";

export interface BeverageData {
  id: number;
  name: string;
  prices: BeveragePrice[];
  ingredients: IngredientAmount[];
}
