import React from 'react';
import { OrderDetailsProps } from "./interfaces/OrderDetailsProps";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export const OrderDetails = ({ pickedBeverage, returnToList }: OrderDetailsProps) => (
  <Col sm={3}>
    <Card>
      <Card.Body>
        <Card.Title>{`${pickedBeverage.name} is ready!`}</Card.Title>

        <Button
          variant="primary"
          onClick={returnToList}
        >
          Go back for more!
        </Button>
      </Card.Body>
    </Card>
  </Col>
);


