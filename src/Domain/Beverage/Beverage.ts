import {BeverageData} from "./interfaces/BeverageData";
import {Beverage as IBeverage} from './interfaces/Beverage';
import {BeverageIngredientsFactory} from "./BeverageIngredientsFactory";
import {Ingredient as IIngredient} from "../Ingredient/interfaces/Ingredient";
import {CurrencyCode} from "../../utils/currencies/interfaces/CurrencyCode";
import {IngredientData} from "../Ingredient/interfaces/IngredientData";
import {BeveragePrice} from "./interfaces/BeveragePrice";

export class Beverage implements IBeverage {
  public ingredients: IIngredient[];
  public name: string;
  private id: number;
  public prices: BeveragePrice[];
  public canBeBrewed: boolean;

  constructor({ id, name, ingredients, prices }: BeverageData, ingredientApiData: IngredientData[]) {
    this.id = id;
    this.name = name;
    this.prices = prices;
    this.ingredients = BeverageIngredientsFactory(ingredients, ingredientApiData);
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

  private isBrewable = (ingredientsStock: IIngredient[] | []) => {
    for (let i = 0; i < this.ingredients.length; i++) {
      const interatedIngredient = this.ingredients[i];
      const matchedIngredient = ingredientsStock.find(({ id }) => id === interatedIngredient.id);

      if (matchedIngredient && matchedIngredient.stock >= interatedIngredient.stock) {
        continue;
      }

      return false;
    }

    return true;
  };

  public updateCanBeBrewedStatus = (ingredientsStock: IIngredient[] | []): void => {
    this.canBeBrewed = this.isBrewable(ingredientsStock);
  };
}
