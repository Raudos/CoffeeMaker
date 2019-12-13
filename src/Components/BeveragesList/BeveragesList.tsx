import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { BeveragesListProps } from "./interfaces/BeveragesListProps";
import { BeverageCard } from "../BeverageCard/BeverageCard";
import Row from "react-bootstrap/Row";

export const BeveragesList = (props: BeveragesListProps) => (
  <>
    <Jumbotron>
      <h1>Coffee maker!</h1>
      <p>
        Take your pick!
      </p>
    </Jumbotron>

    <Row>
      {props.beveragesToPick.map((beverage) => (
        <BeverageCard
          key={beverage.name}
          beverage={beverage}
          pickBeverage={props.pickBeverage}
        />
      ))}
    </Row>
  </>
);
