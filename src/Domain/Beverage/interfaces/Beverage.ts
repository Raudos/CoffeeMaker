import { CurrencyCode } from "../../../Utils/currencies/interfaces/CurrencyCode";
import { BeverageIngredient } from "./BeverageIngredient";
import { StockIngredient } from "../../StockIngredient/interfaces/StockIngredient";
import { StockIngredientApiData } from "../../StockIngredient/interfaces/StockIngredientApiData";
import { BeveragePrice } from "./BeverageApiData";

export interface Beverage {
  name: string;
  prices: BeveragePrice[];
  ingredients: BeverageIngredient[];
  getPrice: (currencyCode: CurrencyCode) => string;
  getCurrencyCodeSuffix: (currencyCode: CurrencyCode) => string;
  canBeBrewed: boolean;
  updateCanBeBrewedStatus: (ingredientsStock: StockIngredient[] | StockIngredientApiData[] | []) => void;
}
