import { IngredientApiData } from "./interfaces/IngredientApiData";
import { Ingredient as IIngredient } from "./interfaces/Ingredient";

export class Ingredient implements IIngredient {
  public name: string;
  public id: number;

  constructor(data: IngredientApiData) {
    this.id = data.id;
    this.name = data.name;
  }
}
