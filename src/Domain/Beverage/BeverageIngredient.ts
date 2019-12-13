import { Ingredient } from "../Ingredient/Ingredient";
import { BeverageIngredient as IBeverageIngredient } from "./interfaces/BeverageIngredient";
import { BeverageIngredientApiData } from "./interfaces/BeverageIngredientApiData";

export class BeverageIngredient extends Ingredient implements IBeverageIngredient {
  public amountRequired: number;

  constructor(data: BeverageIngredientApiData) {
    super(data);

    this.amountRequired = data.amountRequired;
  }
}
