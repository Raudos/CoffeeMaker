import {Beverage as IBeverage} from "../../../Domain/Beverage/interfaces/Beverage";

export interface BeveragePickerProps {
  pickBeverage: (pickedBeverage: IBeverage) => void;
}
