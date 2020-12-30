import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function about_me_second() {
  return (
    <Main_Flex_Container>
      <Text>
        SUCHT IHR EINEN BEGEISTERTEN WEB ENTWICKLER ? UND ARBEITE MIT JAVSCRIPT
        & VARIOUS FRAMWORKS CREATING APPLICATIONS WITH FUN USER EXPERIENCE
      </Text>
    </Main_Flex_Container>
  );
}

const Main_Flex_Container = styled.div`
  margin: 0 auto;
  background: #303247;
  width: 50%;
  padding: 4rem;
  margin-top: 20rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: calc(1.6rem + 0.8vw);
  font-family: "Open Sans", serif;
  font-weight: 300;
`;

const Frontend = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: calc(1.6rem + 0.8vw);
`;

export default about_me_second;
