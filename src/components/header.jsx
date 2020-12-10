import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function header() {
  return (
    <Main_Flex_Container>
      <Header_UL>
        <Header_LI>MY STORY</Header_LI>
        <Header_LI>PORTFOLIO</Header_LI>
        <Header_LI>KONTAKT</Header_LI>
      </Header_UL>
    </Main_Flex_Container>
  );
}

const Main_Flex_Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 120px;
  max-height: 150px;

  position: relative;

  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(126, 126, 126, 1) 350%
  );
`;

const Header_UL = styled.ul`
  list-style: none;
  display: flex;
  font-size: 1.6rem;
  font-family: "Open Sans", sans-serif;
  color: #000;
  font-weight: 700;
  padding: 2rem;
  margin: 0 ${({ theme }) => theme.abstand.seitenabstand}; /*FIX*/

  & > *:not(:last-child) {
    margin-right: 4rem;
  }
`;

const Header_LI = styled.li`
  font-size: 2rem;
`;
export default header;

// <p id="bookmark">BOOKMARK THIS PAGE or ALLOW NOTIFICATIONS </p>
