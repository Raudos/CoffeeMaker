// import { IngredientData } from "../Ingredient/interfaces/IngredientData";
// import {Ingredient as IIngredient } from "./interfaces/Ingredient";
// import {Ingredient} from "./Ingredient";
//
// const praseIngredientName = (name: string): boolean => Boolean(name && name.length);
//
// const verifyApiData = (ingredientApiData: IngredientData): boolean => {
//   return Boolean(ingredientApiData) && praseIngredientName(ingredientApiData.name);
// };
//
// export const IngredientFactory = (ingredientApiData: IngredientData): IIngredient => {
//   if (verifyApiData(ingredientApiData)) {
//     return new Ingredient(ingredientApiData);
//   }
//
//   throw new Error(`Ingredient with id ${ingredientApiData.id} could not be verified!`);
// };

import {IngredientData} from "../Ingredient/interfaces/IngredientData";
import {Ingredient as IIngredient} from "../Ingredient/interfaces/Ingredient";
import {Ingredient} from "../Ingredient/Ingredient";
import {IngredientPrice} from "../Ingredient/interfaces/IngredientPrice";

export const IngredientsFactory = (beverageIngredients: IngredientData[] = [], ingredientApiData: IngredientData[]): IIngredient[] => {
  return ingredients.map((ingredient) => new Ingredient(ingredient, ingredientApiData));
};
