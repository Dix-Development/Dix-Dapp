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
/*eslint-disable*/
import React from "react";
const imgStyle = {
  maxHeight: 15,
  maxWidth: 15,
};

// import redditLogo from "../../Reddit_Mark_OnDark.svg";
import discordLogo from "../../Discord_logo.svg";
import telegramLogo from "../../telegram_logo.svg";
import twitterLogo from "../../Twitter_bird_logo_2012.svg";

// reactstrap components
import { Container, Nav, NavItem, NavLink, Media } from "reactstrap";

function Footer() {
  return (
    <>
      <Nav className="justify-content-center">
        <NavItem>
          <NavLink href="https://twitter.com/dixtoken">
            <Media
              style={imgStyle}
              left={true}
              src={twitterLogo}
              alt="twitter"
            />
            @DixToken
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://discord.gg/RX3uHasKYU">
            <Media
              style={imgStyle}
              left={true}
              src={discordLogo}
              alt="Discord"
            />
            Dixcord
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://t.me/DixToken">
            <Media
              style={imgStyle}
              left={true}
              src={telegramLogo}
              alt="Telegram"
            />
            TeleDix
          </NavLink>
        </NavItem>
      </Nav>
      <Container className="text-center">
        © {new Date().getFullYear() + " "}
        Dix Development
      </Container>
    </>
  );
}

export default Footer;
