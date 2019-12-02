import {IngredientData} from "../Ingredient/interfaces/IngredientData";
import {Ingredient as IIngredient} from "../Ingredient/interfaces/Ingredient";
import {Ingredient} from "../Ingredient/Ingredient";
import {IngredientPrice} from "../Ingredient/interfaces/IngredientPrice";

export const BeverageIngredientsFactory = (ingredients: IngredientData[] = [], ingredientApiData: IngredientData[]): IIngredient[] => {
  return ingredients.map((ingredient) => new Ingredient(ingredient, ingredientApiData));
};
