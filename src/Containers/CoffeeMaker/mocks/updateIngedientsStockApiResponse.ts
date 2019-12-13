import { Beverage } from "../../../Domain/Beverage/interfaces/Beverage";
import { StockIngredient } from "../../../Domain/StockIngredient/interfaces/StockIngredient";

interface requestData {
  data: {
    beverage: Beverage;
    ingredientsStock: StockIngredient[] | [];
  };
}

const updateStockCount = ({ data }: requestData): StockIngredient[] => {
  data.beverage.ingredients.forEach((ingredient) => {
    const matchedIngredient = data.ingredientsStock.find(({ id }) => id === ingredient.id);

    if (matchedIngredient && ingredient.amountRequired) {
      matchedIngredient.stock = matchedIngredient.stock - ingredient.amountRequired;
    } else {
      throw new Error(`Could not find matching ingredient for id: ${ingredient.id}`);
    }
  });

  return data.ingredientsStock;
};

export const updateIngredientsStockApiResponse = (url: string, requestData: requestData): Promise<StockIngredient[]> => {
  return Promise.resolve(updateStockCount(requestData));
};
