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
        Mit welchen Sprachen kennst du dich am besten aus ? Worauf hast du Lust.
        <br />
        <SubText>
          Mit Javscript habe ich Chrome Erweiterungen , Discord Bots , Apis Web
          Frontends erstellt ... Mit Python und Micropython automatisiere ich
          mein Smart Home - ESP32 , Raspberry Pi's.
        </SubText>
        <br />
        <br />
        Schonmal eine <Frontend>API</Frontend> erstellt ?
        <br />
        <SubText>
          Ja , gerade mit Daten und Schnittstellen zu arbeiten macht spass.
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
          Meine Definition von Front und Backend liegt derzeit im Hobby und
          schulischen Bereich. Ich spiele mit Layout, Schriftarten, Farben,
          Menüs , Bedienelementen in Adobe sowie mit Frameworks / Biblotheken
          fürs Front und Backends.
          <br />
          Eine voreilige Grenze ziehen möchte ich da nicht.
          <br />
          Meist ist es nur eine Frage der Zeit bis man sich den nächsten coolen
          shit anschaut und dann auch begeistert ist.
        </SubText>
        <br />
        <br />
        Warum <Frontend> Boreus</Frontend> ?
        <br />
        <SubText>
          Eine großartige Möglichkeit dort zu arbeiten wo Verlässlichkeit von
          Systemen , Skalierbarkeit riesen Themen sind.
          <br />
          Moderne Software-Architekturen in das Frontend zu integrieren empfinde
          ich als aufregende Perspektive.
        </SubText>
        <br />
        <br />
        Eigentlich schonmal von <Frontend>Linux</Frontend> gehört ?
        <br />
        <SubText>
          Da 2 Raspberry Pi's bei mir laufen, ja.
          <br />
          Apache Server + Datenbanken.
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
  margin-top: 10rem;
`;

const Text = styled.p`
  font-family: "Roboto", serif;
  color: #e2e1e1;
  font-size: 2.2rem;
`;

const SubText = styled.p`
  margin-top: 0.6rem;

  font-family: "Open Sans", serif;
  color: #c7c7c7;
  font-weight: 300;
  font-size: 1.8rem;
`;

const Frontend = styled.span`
  font-family: "Roboto", serif;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 2.2rem;
`;

export default about_me_second;
