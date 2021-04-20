import React, { useEffect, useState } from "react";

import Web3 from "web3";
import Contract from "web3-eth-contract";
import erc20jsonInterface from "../Config/ERC20.json";
import { BscConnector } from "@binance-chain/bsc-connector";
// reactstrap components
import {
  Alert,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  Input,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  CardText,
  Container,
} from "reactstrap";

function Mouth(props) {
  const web3 = new Web3(Web3.givenProvider);
  const contractAddress = "0xC9E4d54c547fad0aCfB478e43EAc7De24A53A7F9";
  Contract.setProvider(Web3.givenProvider);
  let dixTract = new Contract(erc20jsonInterface, contractAddress);
  let [account, setAccount] = useState(null);
  let [mouthAmount, setMouthAmount] = useState("");
  let [buttAmount, setButtAmount] = useState("");
  let [dixForMouth, setDixForMouth] = useState("");
  let [dixForButt, setDixForButt] = useState("0");
  let [dixToBePulledFromButt, setDixToBePulled] = useState("0");
  let [buttStickinStatus, setButtStickin] = useState({ status: "undefined" });
  let [buttPullinStatus, setButtPullin] = useState({ status: "undefined" });
  let [walletEnabled, setWalletEnabled] = useState(false);
  let [stickInButtValid, setStickInButtValid] = useState(false);
  let [pullDixOutValid, setPullDixOutValid] = useState(false);

  let connectWallet = async () => {
    if (!walletEnabled || window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable().then((e) => {
        setWalletEnabled(true);
      });
    }
  };

  connectWallet();

  setInterval((e) => {
    if (walletEnabled && account) {
      dixTract.methods
        .getDicksForMouth(account)
        .call({ from: account })
        .then((e) => {
          var v = e / Math.pow(10, 18);
          setDixForMouth(v);
        });
    }
  }, 60000);

  useEffect(() => {
    if (walletEnabled) {
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
    }
  }, [buttStickinStatus, buttPullinStatus, walletEnabled]);

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
        setButtStickin({ status: "fail", message: err.message });
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
        setButtPullin({ status: "fail", message: err.message });
      });
  };

  const StickinValidator = (val) => {
    if (!isNaN(val) && mouthAmount >= val && val > 0) {
      setStickInButtValid(true);
    } else {
      setStickInButtValid(false);
    }
  };

  const pullOutValidator = (val) => {
    let value = parseFloat(val);
    if (!isNaN(value) && buttAmount >= value && value > 0) {
      setPullDixOutValid(true);
    } else {
      setPullDixOutValid(false);
    }
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

  const formatBigDecimal = (val) => {
    if (val.includes(".")) {
      let splitDix = val.split(".");
      let decimal = splitDix[1].slice(0, 18);
      let finalDix = splitDix[0] + "." + decimal;
      return finalDix;
    } else {
      return val;
    }
  };

  return (
    <>
      <div className="content">
        {!walletEnabled ? (
          <Alert color="info">
            <Row>
              <Col xs="2">
                <Button onClick={(e) => connectWallet()}>Connect Wallet</Button>
              </Col>
              <Col>
                You need to connect your MetaMask wallet to this site before
                working with DIX,{" "}
                <Button color="primary" href="https://metamask.io/">
                  Download MetaMask
                </Button>
              </Col>
            </Row>
          </Alert>
        ) : null}

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
              <CardHeader tag="h3">Dix for your Mouth</CardHeader>
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
                  {buttStickinStatus.message}
                </Alert>
                <InputGroup size="lg">
                  <InputGroupAddon addonType="prepend">DIX</InputGroupAddon>
                  <Input
                    onChange={(e) => {
                      let dix = formatBigDecimal(e.target.value);
                      StickinValidator(dix);
                      setDixForButt(dix);
                    }}
                    onBlur={(e) => {
                      let dix = formatBigDecimal(e.target.value);
                      StickinValidator(dix);
                      setDixForButt(dix);
                    }}
                    placeholder="Amount"
                    min={0}
                    type="number"
                    step="1"
                    value={dixForButt}
                  />
                </InputGroup>
                <ButtonGroup
                  size="sm"
                  onClick={(e) => {
                    stickDixInButt();
                    setDixForButt("");
                  }}
                >
                  <Button disabled={!stickInButtValid}>Stick 'em in!</Button>
                </ButtonGroup>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardHeader tag="h3">Pull Dix out of your Butt</CardHeader>
              <CardBody>
                <Alert color="danger" hidden={isPullinFailed()}>
                  {buttPullinStatus.message}
                </Alert>
                <InputGroup size="lg">
                  <InputGroupAddon addonType="prepend">DIX</InputGroupAddon>
                  <Input
                    onChange={(e) => {
                      let dix = formatBigDecimal(e.target.value);
                      pullOutValidator(dix);
                      setDixToBePulled(dix);
                    }}
                    onBlur={(e) => {
                      let dix = formatBigDecimal(e.target.value);
                      pullOutValidator(dix);
                      setDixToBePulled(dix);
                    }}
                    placeholder="Amount"
                    min={0}
                    type="number"
                    step="1"
                    value={dixToBePulledFromButt}
                  />
                </InputGroup>
                <ButtonGroup size="sm">
                  <Button
                    onClick={(e) => {
                      pullDixFromButts();
                      setDixToBePulled("");
                    }}
                    disabled={!pullDixOutValid}
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
                  New Dix for your mouth will be awarded on sending Dix. If you
                  wish you may stick 0 Dix into your mouth to also recieve
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
      </div>
    </>
  );
}

export default Mouth;
