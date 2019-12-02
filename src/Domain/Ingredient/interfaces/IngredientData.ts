import { IngredientPrice } from "./IngredientPrice";

export interface IngredientData {
  id: number;
  name: string;
  stock: number;
  price: IngredientPrice[];
}
