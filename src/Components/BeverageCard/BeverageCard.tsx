import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BeverageCardProps } from "./interfaces/BeverageCardProps";
import { IngredientsList } from "./IngredientsList/IngredientsList";
import Col from "react-bootstrap/Col";


export const BeverageCard = ({ beverage, pickBeverage }: BeverageCardProps) => {
  const handlePickBeverage = pickBeverage(beverage);

  return (
    <Col sm={3}>
      <Card>
        <Card.Body>
          <Card.Title>{beverage.name}</Card.Title>

          <IngredientsList ingredients={beverage.ingredients} />

          <Button
            variant="primary"
            onClick={handlePickBeverage}
            disabled={!beverage.canBeBrewed}
          >
            Pick Beverage
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
