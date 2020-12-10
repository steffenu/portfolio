import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function about_me_second() {
  return (
    <Main_Flex_Container>
      <Text>
        Hallo ich bin Steffen. Umschüler im <br /> Bereich Anwendungsentwicklung
        und auf der Suche nach einem interessanten
        <br />
        <br />
        Praktikum im Bereich <Frontend>Frontend Web Entwicklung.</Frontend>{" "}
        <br />
        Ich sehe das Web als riesige Sandbox und meine erste Wahl zum Burgen
        bauen.
        <br />
        <br />
        Die Erstellung von "virtuellen Arbeitern" die wach sind und
        weiterarbeiten während man schläft ist ein fazinierendes Konzept.
        <br />
        <br />
        Für den virtuellen Arbeiter ist ein professionelles auftreten genauso
        wichtig wie seine verlässlichkeit.
        <br />
        <br />
        Sein Erfolg hängt davon ab wie gut dieses Zusammenspiel funktionert.
        <br />
        <br />
        Und in diesem Sinne freue ich mich auf spannende Herausforderungen in
        einem erfahrenden ein Team.
        <br />
        <br />
        Neben der Webentwicklung " bastele" ich gerne an mein Smart Home mit
        Python / Raspberry Pi & Co …. schiesse unterwegs Fotos oder lerne
        zurzeit E-Gitarre.
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
  margin-top: 20rem;
`;

const Text = styled.p`
  color: #b3b7dc;
  font-size: 1.6rem;
`;

const Frontend = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.6rem;
`;

export default about_me_second;
