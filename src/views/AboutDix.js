import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
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
  CardDeck,
  Media,
} from "reactstrap";
import Footer from "components/Footer/Footer";

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
            <img style={{ maxHeight: "150px" }} src={logo} alt="Dix Logo" />
          </Col>
          <Col>
            <Card body>
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
            <CardDeck className="mb-2">
              <Card body>
                <CardHeader tag="h1">PUT IT WHERE?</CardHeader>
                <CardBody>
                  <CardText>
                    DIX are best stored in the mouth, our custom wallet where
                    your DIX are stored securely until you are ready to deliver
                    a massive load into somebody else's mouth. Of course, some
                    days, you just can't get it up, and you'll want to find
                    somewhere else to put your DIX, which is why we offer you
                    the option of BUTT STUFF
                  </CardText>
                </CardBody>
              </Card>
              <Card body>
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
              <Card body>
                <CardHeader tag="h1">BURNED DIX!</CardHeader>
                <CardBody>
                  <CardText>
                    DIX need a good ole burnin'! On every transaction 5% of
                    every DIX is burned. Thats right the DIX get rubbed hard
                    enough that the DIX get burned. To Ashes... What can we say
                    your strokes are too good.
                  </CardText>
                </CardBody>
              </Card>
              <Card body>
                <CardHeader tag="h1">EARNED DIX!</CardHeader>
                <CardBody>
                  <CardText>
                    Dix are earned with your butt. That voluptuous butt of
                    yours. I'm just getting hot thinking about it! When you
                    introduce your DIX into the butt you earn more dix for your
                    butt. Dont worry though they are clean new DIX. DIX made for
                    the mouth.
                  </CardText>
                </CardBody>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card body>
              <CardHeader tag="h1">Quick DIX Guide</CardHeader>
              <CardBody>
                <Card>
                  <CardHeader tag="h5">
                    Get Yourself Metamask Or TrustWallet.
                  </CardHeader>
                  <CardBody>
                    <CardText>
                      Download MetaMask (a crypto wallet in form of a browser
                      extension) or TrustWallet (an app for your phone). After
                      that you will have to add the Binance Smart Chain to your
                      network-list That will allow you to buy, sell, send, and
                      receive DIX in your Mouth!
                    </CardText>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader tag="h5">Get Yourself Some BNB.</CardHeader>
                  <CardBody>
                    <CardText>
                      Buy and send BNB to MetaMask Buy BNB on an exchange (i.e.
                      Binance, Kraken, Crypto.com etc.). Transfer the tokens to
                      your MetaMask wallet address. BEP-20 addresses start with
                      a "0x"
                    </CardText>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader tag="h5">
                    Get Yourself Over to PancakeSwap.
                  </CardHeader>
                  <CardBody>
                    <CardText>
                      Connect your wallet to Pancake Swap Access your wallet to
                      PancakeSwap by clicking ‘Connect to a wallet’ and
                      selecting MetaMask.
                    </CardText>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader tag="h5">Get Yourself Some DIX!</CardHeader>
                  <CardBody>
                    <CardText>
                      Swap BNB for DIX You can start swapping as soon as you
                      have BNB available! Press ‘Select a token’ and enter the
                      token address.
                    </CardText>
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <Card body>
                  <CardHeader tag="h1">Where to Buy!?</CardHeader>
                  <CardBody>
                    <ButtonGroup>
                      <Button>Pancake Swap</Button>
                      <Button>Bogged Finance</Button>
                    </ButtonGroup>
                  </CardBody>
                </Card>
                <Card body>
                  <CardHeader tag="h1">Join the Community</CardHeader>
                  <CardBody>
                    <ButtonGroup>
                      <Button href="https://twitter.com/dixtoken">
                        <Media
                          style={imgStyle}
                          left={true}
                          src={twitterLogo}
                          alt="twitter"
                        />
                        @DixToken
                      </Button>
                      <Button href="https://discord.gg/RX3uHasKYU">
                        <Media
                          style={imgStyle}
                          left={true}
                          src={discordLogo}
                          alt="Discord"
                        />
                        Dixcord
                      </Button>{" "}
                      <Button href="https://t.me/DixToken">
                        <Media
                          style={imgStyle}
                          left={true}
                          src={telegramLogo}
                          alt="Telegram"
                        />
                        TeleDix
                      </Button>
                    </ButtonGroup>
                  </CardBody>
                </Card>
                <Card Body>
                  <CardHeader tag="h1">Whats Cuming Next?</CardHeader>
                  <CardBody>
                    <CardText>DIXDrops to community and Giveaways!</CardText>
                    <CardText>
                      Keep your eye out for the Daily Splooge! Get showered in
                      DIX in this exciting Lottery!
                    </CardText>
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Footer />
      </div>
    </>
  );
}

export default AboutDix;
