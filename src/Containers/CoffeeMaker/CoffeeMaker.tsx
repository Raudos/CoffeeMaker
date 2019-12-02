import React from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CoffeeMakerProps } from "./interfaces/CoffeeMakerProps";
import { CoffeeMakerState } from "./interfaces/CoffeeMakerState";
import { BeveragePicker } from "../BeveragePicker/BeveragePicker";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { Beverage as IBeverage } from "../../Domain/Beverage/interfaces/Beverage";


export class CoffeeMaker extends React.Component<CoffeeMakerProps, CoffeeMakerState> {
  constructor(props: CoffeeMakerProps) {
    super(props);

    this.state = {
      pickedBeverage: null,
    }
  }

  private getSection = (): React.ReactNode => {
    if (this.state.pickedBeverage) {
      return (
        <OrderDetails
          pickedBeverage={this.state.pickedBeverage}
        />
      )
    }

    return (
      <BeveragePicker
        pickBeverage={this.pickBeverage}
      />
    );
  };

  public pickBeverage = (pickedBeverage: IBeverage): void => {
    this.setState({
      pickedBeverage
    });
  };

  public resetPickedBeverage = (): void => {
    this.setState({
      pickedBeverage: null,
    });
  };

  render() {
    const sectionToRender = this.getSection();

    return (
      <Container>
        <Row>
          <Col>
            {sectionToRender}
          </Col>
        </Row>
      </Container>
    );
  }
}
