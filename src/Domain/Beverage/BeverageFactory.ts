import { BeverageApiData, BeverageIngredientsAmount } from "./interfaces/BeverageApiData";
import { Beverage } from "./Beverage";
import { Beverage as IBeverage } from "./interfaces/Beverage";
import { StockIngredientApiData } from "../StockIngredient/interfaces/StockIngredientApiData";

const parseBeverageName = (name: string): boolean => Boolean(name && name.length);
const parseBeverageIngredients = (ingredients: BeverageIngredientsAmount[]): boolean => Boolean(Array.isArray((ingredients)));

const verifyApiData = (beverageApiData: BeverageApiData): boolean => {
  return Boolean(beverageApiData) && parseBeverageIngredients(beverageApiData.ingredients) && parseBeverageName(beverageApiData.name);
};

export const BeverageFactory = (beveragesApiData: BeverageApiData[], ingredientsApiData: StockIngredientApiData[]): IBeverage[] => {
  const parsedBeverageApiData = beveragesApiData.filter(verifyApiData);

  return parsedBeverageApiData.map((beverageApiData) => new Beverage(beverageApiData, ingredientsApiData));
};
