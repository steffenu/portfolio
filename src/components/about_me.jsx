import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function about_me() {
  return (
    <Main_Flex_Container>
      <Text>
        <Frontend> Hallo ich bin Steffen,</Frontend>
        <br />
        Umschüler im Bereich Anwendungsentwicklung und auf der Suche nach einem
        <br />
        <br />
        <Frontend>Praktikum </Frontend>
        im Bereich <Frontend>Frontend Web Entwicklung.</Frontend> <br />
        Ich sehe <Frontend>das Web</Frontend> als riesige Sandbox und meine
        erste Wahl zum Burgen bauen.
        <br />
        <br />
        Mit einem Verständiss für das Web kann man seine eigene Welt schaffen ,
        Probleme Lösen und anderen Dinge näher bringen. In einem Markt der nach
        Vorne geht , wo viele Interessante Dinge passieren.
        <br />
        User-Interaktionen fliessend gestalten und den nächsten
        <Frontend> Besuch vorprogrammieren.</Frontend>
        <br />
        <br />
        Ich freue mich auf spannende Herausforderungen in einem erfahrenden
        Team.
        <br />
        <br />
        <br />
        STEFFEN UNGER
      </Text>
    </Main_Flex_Container>
  );
}

const Main_Flex_Container = styled.div`
  margin: 0 auto;
  background: #2b2d41;
  width: calc(100% - 20rem);
  padding: 8rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
  }
`;

const Text = styled.p`
  color: #b3b7dc;
  font-size: calc(1.6rem + 0.8vw); ;
`;

const Frontend = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: calc(1.6rem + 0.8vw);
`;

const Frontend_Thin = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
  font-size: calc(2.2rem + 0.8vw);
`;

const Frontend_To = styled.span`
  color: white;
  font-weight: 700;
  font-size: calc(0.8rem + 0.8vw);
`;

const Frontend_Bold = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: calc(2.2rem + 0.8vw);
`;

export default about_me;
