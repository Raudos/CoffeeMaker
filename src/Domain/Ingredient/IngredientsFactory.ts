import {IngredientData} from "../Ingredient/interfaces/IngredientData";
import {Ingredient as IIngredient} from "../Ingredient/interfaces/Ingredient";
import {Ingredient} from "../Ingredient/Ingredient";

export const IngredientsFactory = (ingredientsApiData: IngredientData[]): IIngredient[] => {
  const ingredientsArray = Array.isArray(ingredientsApiData) ? ingredientsApiData : [];

  return ingredientsArray.map((ingredient) => new Ingredient(ingredient));
};
