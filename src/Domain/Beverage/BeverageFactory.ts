import { BeverageData } from "./interfaces/BeverageData";
import { IngredientData } from "../Ingredient/interfaces/IngredientData";
import { Beverage } from "./Beverage";
import {Beverage as IBeverage} from "./interfaces/Beverage";
import {IngredientAmount} from "../Ingredient/interfaces/IngredientAmount";

const praseBeverageName = (name: string): boolean => Boolean(name && name.length);
const parseBeverageIngredients = (ingredients: IngredientAmount[]): boolean => Boolean(Array.isArray((ingredients)));

const verifyApiData = (beverageApiData: BeverageData): boolean => {
  return Boolean(beverageApiData) && parseBeverageIngredients(beverageApiData.ingredients) && praseBeverageName(beverageApiData.name);
};

export const BeverageFactory = (beveragesApiData: BeverageData[], ingredientsApiData: IngredientData[]): IBeverage[] => {
  const parsedBeverageApiData = beveragesApiData.filter(verifyApiData);

  return parsedBeverageApiData.map((beverageApiData) => new Beverage(beverageApiData, ingredientsApiData));
};
