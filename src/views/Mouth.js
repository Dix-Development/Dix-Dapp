/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  Input,
  Table,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  CardText,
} from "reactstrap";

function Mouth(props) {
  return (
    <>
      <div className="content">
        <Table>
          <Row>
            <Col>
              <Card>
                <CardHeader tag="h3">Dix in your Mouth</CardHeader>
                <CardBody>
                  <CardText>100000000.2344515321432</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardHeader tag="h3">Dix in your Butt</CardHeader>
                <CardBody>
                  <CardText>10000.526243251</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardHeader tag="h3">Dix For your Mouth</CardHeader>
                <CardBody>
                  <CardText>10000.526243251</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardHeader tag="h3">Stick Dix in your Butt</CardHeader>
                <CardBody>
                  <InputGroup size="lg">
                    <InputGroupAddon addonType="prepend">DIX</InputGroupAddon>
                    <Input
                      placeholder="Amount"
                      min={0}
                      max={100}
                      type="number"
                      step="1"
                    />
                  </InputGroup>
                  <ButtonGroup size="sm">
                    <Button>Stick 'em in!</Button>
                  </ButtonGroup>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardHeader tag="h3">Pull Dix out of your Butt</CardHeader>
                <CardBody>
                  <InputGroup size="lg">
                    <InputGroupAddon addonType="prepend">DIX</InputGroupAddon>
                    <Input
                      placeholder="Amount"
                      min={0}
                      max={100}
                      type="number"
                      step="1"
                    />
                  </InputGroup>
                  <ButtonGroup size="sm">
                    <Button>Pull 'em out!</Button>
                  </ButtonGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardHeader tag="h3">Whats My Butt?</CardHeader>
                <CardBody>
                  <CardText>
                    Sticking Dix in your butt will reward you with new Dix for
                    your mouth!
                  </CardText>
                  <CardText>
                    New Dix for your mouth will be awarded on sending Dix. If
                    you wish you may stick 0 Dix into your mouth to also recieve
                    rewards!
                  </CardText>
                  <CardText>
                    Pulling Dix out of your butt will also give you your
                    calculated rewards for the time that those Dix were in your
                    butt!
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Table>
      </div>
    </>
  );
}

export default Mouth;
