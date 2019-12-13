import { Beverage } from "../../../Domain/Beverage/interfaces/Beverage";

export interface OrderDetailsProps {
  pickedBeverage: Beverage;
  returnToList: () => void;
}
