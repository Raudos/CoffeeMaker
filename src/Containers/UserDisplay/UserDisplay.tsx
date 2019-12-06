import * as React from 'react';
import {OrderDetails} from "../../Components/OrderDetails/OrderDetails";
import {BeveragesList} from "../../Components/BeveragesList/BeveragesList";
import {Beverage} from "../../Domain/Beverage/interfaces/Beverage";
import {UserDisplayProps} from "./interfaces/UserDisplayProps";

export const UserDisplay = ({ updateIngredientsStockData, beveragesToPick }: UserDisplayProps) => {
  const [ pickedBeverage, pickBeverage ] = React.useState<Beverage | null>(null);
  const pickBeverageCreator = (beverage: Beverage) => async () => {
    try {
      await updateIngredientsStockData(beverage);
      pickBeverage(beverage);
    } catch(e) {
      console.error(e);
    }
  };

  if (pickedBeverage) {
    return (
      <OrderDetails
        pickedBeverage={pickedBeverage}
      />
    );
  }

  return (
    <BeveragesList
      pickBeverage={pickBeverageCreator}
      beveragesToPick={beveragesToPick}
    />
  );
};
