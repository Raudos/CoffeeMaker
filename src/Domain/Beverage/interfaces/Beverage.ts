import {Ingredient as IIngredient} from "../../Ingredient/interfaces/Ingredient";
import {CurrencyCode} from "../../../utils/currencies/interfaces/CurrencyCode";

export interface Beverage {
  name: string;
  ingredients: IIngredient[];
  getPrice: (currencyCode: CurrencyCode, skipCurrencySuffix: boolean) => string;
  getCurrencyCodeSuffix: (currencyCode: CurrencyCode) => string;
}
