import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Header from "../header";
import Landing from "../landing";
import Praktikumsplatz from "../praktikumsplatz";

function landing_section() {
  return (
    <Main_Flex_Container>
      <Header></Header>
      <Landing></Landing>
    </Main_Flex_Container>
  );
}

const Main_Flex_Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-bottom: 20rem;
`;

export default landing_section;
