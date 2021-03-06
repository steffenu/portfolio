import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Background from "../svg/background/boreus1.svg";

function background1() {
  return (
    <Main_Flex_Container>
      <Text_Container>
        <Text>HOBBIES</Text>
      </Text_Container>
      <Background width="100%" height="100%" viewbox="0 0 1300.81 676.91" />
    </Main_Flex_Container>
  );
}

const Main_Flex_Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  margin-bottom: 10vh;

  /*  width: calc(100% - 20rem); */
  width: 100%;
`;

const Text_Container = styled.div`
  background: #212336;
  padding: 1.6rem 8rem;
  position: absolute;
`;

const Text = styled.p`
  font-size: calc(3rem + 0.8vw);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export default background1;
