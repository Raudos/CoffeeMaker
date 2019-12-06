import { IngredientData } from "./interfaces/IngredientData";
import { Ingredient as IIngredient } from "./interfaces/Ingredient";

export class Ingredient implements IIngredient {
  public name: string;
  public stock: number;
  public id: number;

  constructor(data: IngredientData) {
    this.id = data.id;
    this.name = data.name;
    this.stock = data.stock;
  }
}
