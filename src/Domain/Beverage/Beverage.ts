import { BeverageData } from "./interfaces/BeverageData";
import { Beverage as IBeverage } from './interfaces/Beverage';
import { BeverageIngredientsFactory } from "./BeverageIngredientsFactory";
import { Ingredient as IIngredient } from "../Ingredient/interfaces/Ingredient";
import {CurrencyCode} from "../../utils/currencies/interfaces/CurrencyCode";
import {IngredientData} from "../Ingredient/interfaces/IngredientData";

export class Beverage implements IBeverage {
  public ingredients: IIngredient[];
  public name: string;
  private id: number;

  constructor({ id, name, ingredients }: BeverageData, ingredientApiData: IngredientData[]) {
    this.id = id;
    this.name = name;
    this.ingredients = BeverageIngredientsFactory(ingredients, ingredientApiData);
  }

  getPrice = (currencyCode: CurrencyCode, skipCurrencySuffix: boolean = false) => {
    const totalPrice = this.ingredients.reduce((prev, curr) => {
      return prev + curr.getPrice(currencyCode);
    }, 0);

    if (!skipCurrencySuffix) {
      return `${totalPrice} ${this.getCurrencyCodeSuffix}`;
    }

    return `${totalPrice}`;
  };

  getCurrencyCodeSuffix = (currencyCode: CurrencyCode) => {
    switch (currencyCode) {
      case (CurrencyCode.PLN):
        return 'zł';
      default:
        return '$';
    }
  }
}
