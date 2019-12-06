import {Ingredient as IIngredient} from "../../../Domain/Ingredient/interfaces/Ingredient";
import {Beverage} from "../../../Domain/Beverage/interfaces/Beverage";

interface requestData {
  data: {
    beverage: Beverage;
    ingredientsStock: IIngredient[] | [];
  };
}

const updateStockCount = ({ data }: requestData): IIngredient[] => {
  return [];
};

export const updateIngredientsStockApiResponse = (url: string, requestData: requestData): Promise<IIngredient[]> => {
  return Promise.resolve(updateStockCount(requestData));
};
