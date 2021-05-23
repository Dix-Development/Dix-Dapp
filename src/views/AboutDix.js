import React from "react";
import logo from "../logo.svg";
import redditLogo from "../Reddit_Mark_OnDark.svg";
import discordLogo from "../Discord_logo.svg";
import telegramLogo from "../telegram_logo.svg";
import twitterLogo from "../Twitter_bird_logo_2012.svg";

import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  Row,
  Col,
  ButtonGroup,
  Button,
  Media,
} from "reactstrap";

const imgStyle = {
  maxHeight: 15,
  maxWidth: 15,
};

function AboutDix() {
  return (
    <>
      <div className="content">
        <Row>
          <Col sm="2">
            <img style={{ "max-height": "150px" }} src={logo} alt="Dix Logo" />
          </Col>
          <Col>
            <Card>
              <CardHeader tag="h1">OPEN WIDE</CardHeader>
              <CardBody>
                <CardText>
                  Have you been looking for something to fill the emptyness in
                  your mouth, or anus, look no further than DIX, the hands-on
                  token on the Binance Snartchain that you can go all-in on.
                  Everyone knows, sharing is caring, so you can stick your dix
                  in anyone's mouth, anus, or both to show them you care. Just
                  obtain consent first ;)
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader tag="h1">PUT IT WHERE?</CardHeader>
              <CardBody>
                <CardText>
                  DIX are best stored in the mouth, our custom wallet where your
                  DIX are stored securely until you are ready to deliver a
                  massive load into somebody else's mouth. Of course, some days,
                  you just can't get it up, and you'll want to find somewhere
                  else to put your DIX, which is why we offer you the option of
                  BUTT STUFF
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardHeader tag="h1">DID YOU SAY BUTT STUFF?</CardHeader>
              <CardBody>
                <CardText>
                  Ah yes, now that you're rock hard and standing at attention,
                  your DIX can be stuck in the BUTT as well, and once you do
                  that, the real magic happens, your DIX grow and grow! Don't
                  worry, this BUTT's deep enough for even the widest DIX.
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
                <div>
                  <ButtonGroup size="md">
                    <Button
                      color="secondary"
                      href="https://twitter.com/dixtoken"
                    >
                      <Media
                        style={imgStyle}
                        left="true"
                        src={twitterLogo}
                        alt="twitter"
                      />
                      @DixToken
                    </Button>
                    <Button
                      color="secondary"
                      href="https://www.reddit.com/r/dixtoken"
                    >
                      <Media
                        style={imgStyle}
                        left="true"
                        src={redditLogo}
                        alt="Reddit"
                      />
                      Reddix
                    </Button>
                    <Button
                      color="secondary"
                      href="https://discord.gg/RX3uHasKYU"
                    >
                      <Media
                        style={imgStyle}
                        left="true"
                        src={discordLogo}
                        alt="Discord"
                      />
                      Dixcord
                    </Button>
                    <Button color="secondary" href="https://t.me/DixToken">
                      <Media
                        style={imgStyle}
                        left="true"
                        src={telegramLogo}
                        alt="Telegram"
                      />
                      TeleDix
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
