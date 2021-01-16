import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function about_me_second() {
  return (
    <Main_Flex_Container>
      <Text>
        <br />
        <br />
        <br />
        Wo ist mein <Frontend>Interessengebiet</Frontend> ?
        <br />
        <SubText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
          laudantium?
        </SubText>
        <br />
        Was geht sonst bei dir ?
        <SubText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
          laudantium?
        </SubText>
        <br />
        <br />
        Welche <Frontend>Programmiersprachen</Frontend> nutzt du häufiger ?
        <br />
        <SubText>
          Mit Javscript habe ich Chrome Erweiterungen , Discord Bots , Apis ,
          Frontends erstellt ... Mit Python bzw Micropython automatisiere ich
          mein Smart Home.
        </SubText>
        <br />
        <br />
        Schonmal eine <Frontend>API</Frontend> erstellt ?
        <br />
        <SubText>
          Ja , gerade mit Daten und Schnittstellen zu arbeiten macht Spass.
        </SubText>
        <br />
        <br />
        Warum <Frontend>Web-Entwicklung </Frontend>?
        <br />
        <SubText> Dort bin ich unterwegs und möchte Burgen bauen.</SubText>
        <br />
        <br />
        Warum
        <Frontend> Front-End</Frontend> ?
        <br />
        <SubText>
          Ich visualisiere gerne die fertige Anwendung.
          <br />
          Der Teil den der Nutzer sieht und den Teil der die Idee realisiert.
        </SubText>
        <br />
        <br />
        Warum <Frontend> Praktikum bei euch </Frontend> ?
        <br />
        <SubText>
          Eine großartige Möglichkeit dort zu arbeiten wo Verlässlichkeit von
          Systemen , Skalierbarkeit riesen Themen sind.
          <br />
          Moderne Software-Architekturen für das Frontend zu nutzen empfinde ich
          als aufregende Perspektive.
        </SubText>
        <br />
        <br />
        Eigentlich schonmal von <Frontend>Linux</Frontend> gehört ?
        <br />
        <SubText>
          Da 2 Raspberry Pi's bei mir laufen, ja.
          <br />
          Privat nutze ich Windows für Software und Treiber Kompatiblität.
          <br />
          Heist aber nicht das ich mich vor der Commando-zeile verschliesse .
        </SubText>
      </Text>
    </Main_Flex_Container>
  );
}

const Main_Flex_Container = styled.div`
  margin: 0 auto;

  width: calc(100% - 20rem);
  padding: 8rem;
  margin-bottom: 10rem;
  margin-top: 10vh;

  @media (max-width: 768px) {
    width: 100%;
    padding: 4rem;
  }
`;

const Text = styled.p`
  font-family: "Roboto", serif;
  color: #e2e1e1;
  font-size: calc(2.2rem + 0.8vw);
`;

const SubText = styled.p`
  margin-top: 0.6rem;

  font-family: "Open Sans", serif;
  color: #c7c7c7;
  font-weight: 300;
  font-size: calc(1.8rem + 0.8vw);
`;

const Frontend = styled.span`
  font-family: "Roboto", serif;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: calc(2.2rem + 0.8vw);
`;

export default about_me_second;
