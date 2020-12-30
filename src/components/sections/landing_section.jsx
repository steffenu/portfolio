import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Header from "../header";
import Landing from "../landing";
import Praktikumsplatz from "../praktikumsplatz";

function landing_section() {
  return (
    <Main_Flex_Container>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Landing></Landing>
    </Main_Flex_Container>
  );
}

const GlobalStyle = createGlobalStyle`

.start_svg{

  
}

`;

const Main_Flex_Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default landing_section;
