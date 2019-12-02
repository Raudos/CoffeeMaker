import React from 'react';
import Card from 'react-bootstrap/Card';
import {IngredientsProps} from "../interfaces/IngredientsProps";
import {CurrencyCode} from "../../../utils/currencies/interfaces/CurrencyCode";

export const IngredientsList = (props: IngredientsProps) => (
  <Card.Text>
    {props.ingredients.map(({ name, getPrice }, index) => (
      <p>{`${index + 1}. ${name} - ${getPrice(CurrencyCode.PLN)}`}</p>
    ))}
  </Card.Text>
);
