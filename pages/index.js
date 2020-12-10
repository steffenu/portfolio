import styled from "styled-components";
import Header from "../src/components/header";
import Landing from "../src/components/landing";
import Praktikumsplatz from "../src/components/praktikumsplatz";
import Landing_Section from "../src/components/sections/landing_section";

import React_SVG from "../src/svg/react.svg";
import Hobby from "../src/components/hobby_icons";
import Hobby_Tags from "../src/components/hobby_tags";

import About_Me from "../src/components/about_me";
import Skillset from "../src/components/skillset";
import About_Me_Second from "../src/components/about_me_second";
import Background_1 from "../src/components/background1";
import Background_2 from "../src/components/background2";
import About_Me_Third from "../src/components/about_me_third";
import Questions from "../src/components/questions_answers";
import Form from "../src/components/s_form";
import Nachwort from "../src/components/nachwort";
import About_Me_Fourth from "../src/components/about_me_fourth";

import Card_Container from "../src/components/card_container";

export default function Home() {
  return (
    <div class="App">
      <Landing_Section></Landing_Section>

      <Card_Container></Card_Container>
      <About_Me></About_Me>
      <Background_1 />
      <Hobby></Hobby>
      <Hobby_Tags></Hobby_Tags>
      <About_Me_Second></About_Me_Second>
      <Background_2 />
      <Skillset></Skillset>

      <Background_1 />
      <About_Me_Third></About_Me_Third>
      <Questions />
      <Nachwort></Nachwort>
      <About_Me_Fourth></About_Me_Fourth>
    </div>
  );
}
