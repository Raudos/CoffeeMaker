import { CurrencyCode } from "../../../Utils/currencies/interfaces/CurrencyCode";

export interface BeveragePrice {
  code: CurrencyCode;
  cost: number;
}

export interface BeverageIngredientsAmount {
  id: number;
  name: string;
  amountRequired: number;
}

export interface BeverageApiData {
  id: number;
  name: string;
  prices: BeveragePrice[];
  ingredients: BeverageIngredientsAmount[];
}
