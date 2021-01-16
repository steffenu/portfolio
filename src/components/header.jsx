import React from "react";
import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";

function header() {
  return (
    <Main_Flex_Container>
      <Header_UL>
        <Header_LI whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          MY STORY
        </Header_LI>
        <Header_LI whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          PORTFOLIO
        </Header_LI>
        <Header_LI whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          KONTAKT
        </Header_LI>
      </Header_UL>
    </Main_Flex_Container>
  );
}

const Main_Flex_Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 120px;
  max-height: 150px;

  position: relative;

  background: #2b2d41;

  /*   background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(126, 126, 126, 1) 350%
  ); */

  @media (max-width: 768px) {
    justify-content: center;
    display: none;
  }
`;

const Header_UL = styled.ul`
  list-style: none;
  display: flex;
  font-size: 1.6rem;
  font-family: "Open Sans", sans-serif;
  //color: #000;
  color: #fff;
  font-weight: 700;
  padding: 2rem;
  margin: 0 ${({ theme }) => theme.abstand.seitenabstand}; /*FIX*/

  & > *:not(:last-child) {
    margin-right: 4rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    & > *:not(:last-child) {
      margin-bottom: 1rem;
      margin-right: 0;
    }
  }
`;

const Header_LI = styled(motion.li)`
  font-size: 2rem;
`;
export default header;

// <p id="bookmark">BOOKMARK THIS PAGE or ALLOW NOTIFICATIONS </p>
