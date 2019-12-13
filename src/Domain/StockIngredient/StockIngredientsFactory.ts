import { StockIngredient } from "./StockIngredient";
import { StockIngredient as IStockIngredient } from "./interfaces/StockIngredient";
import { StockIngredientApiData } from "./interfaces/StockIngredientApiData";

export const StockIngredientsFactory = (ingredientsApiData: StockIngredientApiData[]): IStockIngredient[] => {
  const ingredientsArray = Array.isArray(ingredientsApiData) ? ingredientsApiData : [];

  return ingredientsArray.map((ingredient) => new StockIngredient(ingredient));
};
