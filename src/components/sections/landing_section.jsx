import React from "react";

import styled, { createGlobalStyle } from "styled-components";

import Header from "../header";
import Landing from "../landing";
import Menu from "../mobile_menu";
import Praktikumsplatz from "../praktikumsplatz";

function landing_section() {
  return (
    <Main_Flex_Container>
      <GlobalStyle></GlobalStyle>
      <Menu></Menu>
      <Header></Header>
      <Landing></Landing>
    </Main_Flex_Container>
  );
}

const GlobalStyle = createGlobalStyle`

.start_svg{

  
}

@media (min-width: 768px) {
    .bm-burger-bars {
      display: none !important;
    }
  }

`;

const Main_Flex_Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh);
`;

export default landing_section;
