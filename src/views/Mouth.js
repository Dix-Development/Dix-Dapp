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
import React, { useEffect, useState } from "react";

import Web3 from "web3";
import Contract from "web3-eth-contract";
import erc20jsonInterface from "../Config/ERC20.json";
// reactstrap components
import {
  Alert,
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
  CardText,
} from "reactstrap";

function Mouth(props) {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
  const contractAddress = "0xecb54e499eE6117bd20129FB3D73dbf2Fd442898";
  Contract.setProvider(Web3.givenProvider || "http://localhost:8545");
  let dixTract = new Contract(erc20jsonInterface, contractAddress);
  let [account, setAccount] = useState("");
  let [mouthAmount, setMouthAmount] = useState("");
  let [buttAmount, setButtAmount] = useState("");
  let [dixForMouth, setDixForMouth] = useState("");
  let [dixForButt, setDixForButt] = useState("0");
  let [dixToBePulledFromButt, setDixToBePulled] = useState("0");
  let [buttStickinStatus, setButtStickin] = useState({ status: "undefined" });
  let [buttPullinStatus, setButtPullin] = useState({ status: "undefined" });

  useEffect(() => {
    web3.eth.getAccounts().then((accts) => {
      setAccount(accts[0]);
      dixTract.methods
        .balanceOf(accts[0])
        .call({ from: accts[0] })
        .then((e) => {
          var v = e / Math.pow(10, 18);
          setMouthAmount(v);
        });
      dixTract.methods
        .getDicksInButt()
        .call({ from: accts[0] })
        .then((e) => {
          var v = e / Math.pow(10, 18);
          setButtAmount(v);
        });
      dixTract.methods
        .getDicksForMouth(accts[0])
        .call({ from: accts[0] })
        .then((e) => {
          var v = e / Math.pow(10, 18);
          setDixForMouth(v);
        });
    });
  }, [buttStickinStatus, buttPullinStatus]);

  const stickDixInButt = function () {
    setButtStickin({ status: "undefined" });
    var weiAmount = web3.utils.toWei(dixForButt);
    dixTract.methods
      .stickDicksInButt(weiAmount)
      .send({ from: account })
      .then((e) => {
        setButtStickin({ status: "success" });
      })
      .catch((err) => {
        setButtStickin({ status: "fail", recipt: err.recipt });
      });
  };
  const pullDixFromButts = function () {
    setButtPullin({ status: "undefined" });
    var weiAmount = web3.utils.toWei(dixToBePulledFromButt);
    dixTract.methods
      .pullDicksOutOfButt(weiAmount)
      .send({ from: account })
      .then((e) => {
        setButtPullin({ status: "success" });
      })
      .catch((err) => {
        setButtPullin({ status: "fail", recipt: err.recipt });
      });
  };

  const isStickinFailed = () => {
    if (buttStickinStatus.status === "fail") {
      return false;
    } else {
      return true;
    }
  };

  const isPullinFailed = () => {
    if (buttPullinStatus.status === "fail") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <div className="content">
        <Table>
          <Row>
            <Col>
              <Card>
                <CardHeader tag="h3">Dix in your Mouth</CardHeader>
                <CardBody>
                  <CardText>{mouthAmount}</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardHeader tag="h3">Dix in your Butt</CardHeader>
                <CardBody>
                  <CardText>{buttAmount}</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardHeader tag="h3">Dix For your Mouth</CardHeader>
                <CardBody>
                  <CardText>{dixForMouth}</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardHeader tag="h3">Stick Dix in your Butt</CardHeader>
                <CardBody>
                  <Alert color="danger" hidden={isStickinFailed()}>
                    {buttStickinStatus.recipt}
                  </Alert>
                  <InputGroup size="lg">
                    <InputGroupAddon addonType="prepend">DIX</InputGroupAddon>
                    <Input
                      onChange={(e) => {
                        setDixForButt(e.target.value);
                      }}
                      placeholder="Amount"
                      min={0}
                      type="number"
                      step="1"
                    />
                  </InputGroup>
                  <ButtonGroup
                    size="sm"
                    onClick={(e) => {
                      stickDixInButt();
                      setDixForButt("");
                    }}
                  >
                    <Button>Stick 'em in!</Button>
                  </ButtonGroup>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardHeader tag="h3">Pull Dix out of your Butt</CardHeader>
                <CardBody>
                  <Alert color="danger" hidden={isPullinFailed()}>
                    {buttPullinStatus.recipt}
                  </Alert>
                  <InputGroup size="lg">
                    <InputGroupAddon addonType="prepend">DIX</InputGroupAddon>
                    <Input
                      onChange={(e) => {
                        setDixToBePulled(e.target.value);
                      }}
                      placeholder="Amount"
                      min={0}
                      type="number"
                      step="1"
                    />
                  </InputGroup>
                  <ButtonGroup size="sm">
                    <Button
                      onClick={(e) => {
                        pullDixFromButts();
                        setDixToBePulled("");
                      }}
                    >
                      Pull 'em out!
                    </Button>
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
