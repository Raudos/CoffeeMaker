import {Ingredient as IIngredient} from "../../Ingredient/interfaces/Ingredient";
import {CurrencyCode} from "../../../utils/currencies/interfaces/CurrencyCode";
import {BeveragePrice} from "./BeveragePrice";

export interface Beverage {
  name: string;
  prices: BeveragePrice[];
  ingredients: IIngredient[];
  getPrice: (currencyCode: CurrencyCode) => string;
  getCurrencyCodeSuffix: (currencyCode: CurrencyCode) => string;
  canBeBrewed: boolean;
  updateCanBeBrewedStatus: (ingredientsStock: IIngredient[] | []) => void;
}
