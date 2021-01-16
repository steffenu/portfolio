import React from "react";
import { push as Menu } from "react-burger-menu";
import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";
function showSettings(event) {
  event.preventDefault();
}

// position fixed damit der button mitwandert
function mobile_menu() {
  var styles = {
    bmBurgerButton: {
      position: "absolute",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#00FFC4",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#00FFC4",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#fff",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <Menu_extended styles={styles}>
      <Anker id="home" className="menu-item" href="/">
        PROJEKTE
      </Anker>
      <Anker id="about" className="menu-item" href="/about">
        ÜBER MICH
      </Anker>
      <Anker id="contact" className="menu-item" href="/contact">
        SKILLS
      </Anker>
      <Anker onClick={showSettings} className="menu-item--small" href="">
        Q&A
      </Anker>
    </Menu_extended>
  );
}

const Menu_extended = styled(Menu)`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Main_Flex_Container_Card = styled(motion.div)`
  width: 65vw;
  height: 32vw;
  background: #2b2d41;

  display: flex;

  justify-content: space-around;
  align-items: center;

  border-right: 5px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    width: 80vw;
    height: 42vw;
  }
`;

const Anker = styled.a`
  list-style: none;
  text-decoration: none;
  color: black;
  font-size: calc(3rem + 0.8vw);

  font-weight: 700;
`;

export default mobile_menu;
