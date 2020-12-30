import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function about_me_fourth() {
  return (
    <Main_Flex_Container>
      <Card>
        <Image></Image>
        <Card_Text>Steffen U.</Card_Text>
      </Card>
      <Side_Text_container>
        <Side_Text>
          SUCHT IHR EINEN BEGEISTERTEN WEB ENTWICKLER ? UND ARBEITE MIT
          JAVSCRIPT & VARIOUS FRAMWORKS CREATING APPLICATIONS WITH FUN USER
          EXPERIENCE
        </Side_Text>
      </Side_Text_container>
    </Main_Flex_Container>
  );
}

const GlobalStyle = createGlobalStyle`



`;

const Main_Flex_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0rem auto;
  margin-bottom: 20rem;

  height: 320px;
  width: calc(100% - 20rem);
  padding: 8rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #2b2d41;
  padding: 0 1rem;
  height: 200px;
  min-width: 220px;
  margin-right: 6rem;
`;

const Image = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  min-width: 100%;
  height: 70%;

  opacity: 0.6;
  margin-bottom: 1rem;
`;

const Card_Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
  font-size: calc(1.4rem + 0.8vw);
`;

const Side_Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-family: "Roboto", serif;
  font-weight: 300;
  font-size: calc(1.2rem + 0.8vw);
`;

const Side_Text_container = styled.div`
  max-width: 300px;
`;

const Frontend = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: calc(1.6rem + 0.8vw);
`;

export default about_me_fourth;
