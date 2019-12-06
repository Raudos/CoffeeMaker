import {IngredientData} from "../Ingredient/interfaces/IngredientData";
import {Ingredient as IIngredient} from "../Ingredient/interfaces/Ingredient";
import {Ingredient} from "../Ingredient/Ingredient";
import {IngredientAmount} from "../Ingredient/interfaces/IngredientAmount";

const mergeIngredientsApiData = (ingredients: IngredientAmount[] = [], ingredientApiData: IngredientData[]): any[] => {
  return ingredients.map((ingredient) => {
    const matchedApiData = ingredientApiData.find((ingredientToMatch) => ingredientToMatch.id === ingredient.id);
    if (matchedApiData) {
      return { ...ingredient, ...matchedApiData};
    }

    throw new Error(`Mismatched data for ingredient with id ${ingredient.id}`);
  });
};

export const BeverageIngredientsFactory = (ingredients: IngredientAmount[] = [], ingredientApiData: IngredientData[]): IIngredient[] => {
  const mergedIngredients = mergeIngredientsApiData(ingredients, ingredientApiData);

  return mergedIngredients.map((ingredient) => new Ingredient(ingredient));
};
