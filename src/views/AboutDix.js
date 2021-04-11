import React from "react";
import logo from "../logo.svg";

import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  Row,
  Col,
  ButtonGroup,
  Button,
} from "reactstrap";

function AboutDix() {
  return (
    <>
      <div className="content">
        <Row>
          <Col sm="4">
            <img src={logo} alt="Dix Logo" />
          </Col>
          <Col>
            <Card>
              <CardHeader tag="h1"> What is Dix?</CardHeader>
              <CardBody>
                <CardText>
                  Dix is a token on the ethereum network that is meant to make
                  you open wide as you stick Dix into your mouth and butt. Dix
                  token can be stuck into your friends mouths to let them know
                  how much you like them. Dix can also be stuck in your butt for
                  more Dix in your mouth! With Dix, the roof of your mouth is
                  the limit so open wide and accept those Dix!
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader tag="h1">Wait you mentioned my mouth?</CardHeader>
              <CardBody>
                <CardText>
                  Yes we did! Your mouth AKA your wallet is where you store your
                  Dix. These Dix are liquid and easily stuck in your friends
                  mouths. An Ethereum wallet is required to have a mouth for
                  your dix and as of now we support Metamask for our app!
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardHeader tag="h1">
                But what does this have to do with my Butt?
              </CardHeader>
              <CardBody>
                <CardText>
                  Ahh yes Dix can also be stuck into your butt! By sticking Dix
                  into your but you ear more dix for your mouth. The more Dix
                  you stick into your back end the more Dix you get for your
                  mouth! A 1% reward of Dix for your mouth can be earned every
                  day!
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader tag="h1">Communities</CardHeader>
              <CardBody>
                <div className="text-center">
                  <ButtonGroup size="lg">
                    <Button
                      color="secondary"
                      href="https://www.reddit.com/r/dixtoken"
                    >
                      Reddix
                    </Button>
                    <Button
                      color="secondary"
                      href="https://discord.gg/RX3uHasKYU"
                    >
                      Dixcord
                    </Button>
                  </ButtonGroup>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AboutDix;
