import { Ingredient } from "../Ingredient/Ingredient";
import { StockIngredient as IStockIngredient } from "./interfaces/StockIngredient";
import { StockIngredientApiData } from "./interfaces/StockIngredientApiData";

export class StockIngredient extends Ingredient implements IStockIngredient {
  public stock: number;

  constructor(data: StockIngredientApiData) {
    super(data);

    this.stock = data.stock;
  }
}
