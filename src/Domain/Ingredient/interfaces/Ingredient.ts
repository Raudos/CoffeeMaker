import {CurrencyCode} from "../../../utils/currencies/interfaces/CurrencyCode";

export interface Ingredient {
  name: string;
  stock: number;
  getPrice: (currencyCode: CurrencyCode) => number;
}
