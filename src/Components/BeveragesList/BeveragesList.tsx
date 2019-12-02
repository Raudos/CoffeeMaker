import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {BeveragesListProps} from "./interfaces/BeveragesListProps";
import {BeverageCard} from "../BeverageCard/BeverageCard";
import Row from "react-bootstrap/Row";

export const BeveragesList = (props: BeveragesListProps) => (
  <>
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
    </Jumbotron>

    <Row>
      {props.beveragesToPick.map((beverage) => (
        <BeverageCard
          key={beverage.name}
          beverage={beverage}
        />
      ))}
    </Row>
  </>
);
