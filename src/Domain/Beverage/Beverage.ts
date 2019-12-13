import { BeverageApiData, BeveragePrice } from "./interfaces/BeverageApiData";
import { Beverage as IBeverage } from './interfaces/Beverage';
import { BeverageIngredient } from "./interfaces/BeverageIngredient";
import { CurrencyCode } from "../../Utils/currencies/interfaces/CurrencyCode";
import { StockIngredient } from "../StockIngredient/interfaces/StockIngredient";
import { StockIngredientApiData } from "../StockIngredient/interfaces/StockIngredientApiData";

export class Beverage implements IBeverage {
  public ingredients: BeverageIngredient[];
  public name: string;
  private id: number;
  public prices: BeveragePrice[];
  public canBeBrewed: boolean;

  constructor({ id, name, ingredients, prices }: BeverageApiData, ingredientApiData: StockIngredientApiData[]) {
    this.id = id;
    this.name = name;
    this.prices = prices;
    this.ingredients = ingredients;
    this.canBeBrewed = this.isBrewable(ingredientApiData);
  }

  public getPrice = (currencyCode: CurrencyCode) => {
    const price = this.prices.find((price) => price.code === currencyCode);

    if (price) {
      return `${price.cost} ${this.getCurrencyCodeSuffix(currencyCode)}`;
    }

    const defaultPrice = this.prices.find((price) => price.code === CurrencyCode.USD);
    if (defaultPrice) {
      return `${defaultPrice.cost} ${this.getCurrencyCodeSuffix(CurrencyCode.USD)}`;
    }

    throw new Error(`Could not get price for ${this.name}`);
  };

  public getCurrencyCodeSuffix = (currencyCode: CurrencyCode) => {
    switch (currencyCode) {
      case (CurrencyCode.PLN):
        return 'zł';
      default:
        return '$';
    }
  };

  private isBrewable = (ingredientsStock: StockIngredient[] | []) => {
    for (let i = 0; i < this.ingredients.length; i++) {
      const iteratedIngredient = this.ingredients[i];
      const matchedIngredient = ingredientsStock.find(({ id }) => id === iteratedIngredient.id);

      if (matchedIngredient && matchedIngredient.stock >= iteratedIngredient.amountRequired) {
        continue;
      }

      return false;
    }

    return true;
  };

  public updateCanBeBrewedStatus = (ingredientsStock: StockIngredient[] | StockIngredientApiData[] | []): void => {
    this.canBeBrewed = this.isBrewable(ingredientsStock);
  };
}
