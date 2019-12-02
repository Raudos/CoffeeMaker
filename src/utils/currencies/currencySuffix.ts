import {CurrencyCode} from "./interfaces/CurrencyCode";

export const getCurrencySuffix = (currencyCode: CurrencyCode) => {
  switch (currencyCode) {
    case (CurrencyCode.USD):
      return 'Dollars';
    default:
      return 'Zł';
  }
};
