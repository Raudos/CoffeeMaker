import { IngredientData } from "./interfaces/IngredientData";
import { IngredientPrice } from "./interfaces/IngredientPrice";
import { Ingredient as IIngredient } from "./interfaces/Ingredient";
import {CurrencyCode} from "../../utils/currencies/interfaces/CurrencyCode";

export class Ingredient implements IIngredient {
  public name: string;
  public stock: number;
  private price: IngredientPrice[];

  constructor(data: IngredientData, ingredientApiData: IngredientData[]) {
    this.name = data.name;
    this.stock = data.stock;
    this.price = data.price;
  }

  getPrice = (currencyCode: CurrencyCode): number => {
    const price = this.price.find((price) => price.code === currencyCode);
    if (price) {
      return price.cost;
    }

    const defaultPrice = this.price.find((price) => price.code === CurrencyCode.USD);
    if (defaultPrice) {
      return defaultPrice.cost;
    }

    throw new Error(`Missing default price for product ${this.name}`);
  }
}
