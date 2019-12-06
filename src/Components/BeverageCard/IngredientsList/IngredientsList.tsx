import React from 'react';
import Card from 'react-bootstrap/Card';
import {IngredientsProps} from "../interfaces/IngredientsProps";

export const IngredientsList = (props: IngredientsProps) => (
  <>
    {props.ingredients.map(({ name }, index) => (
      <Card.Text key={name}>{`${index + 1}. ${name}`}</Card.Text>
    ))}
  </>
);
