import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {BeverageCardProps} from "./interfaces/BeverageCardProps";
import {IngredientsList} from "./IngredientsList/IngredientsList";
import Col from "react-bootstrap/Col";


export const BeverageCard = (props: BeverageCardProps) => (
  <Col sm={3}>
    <Card>
      <Card.Body>
        <Card.Title>{props.beverage.name}</Card.Title>

        <IngredientsList ingredients={props.beverage.ingredients} />

        <Button variant="primary">Pick Beverage</Button>
      </Card.Body>
    </Card>
  </Col>
);
