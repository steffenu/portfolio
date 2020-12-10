import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Raspberry from "../../src/svg/hobby/raspberry.svg";
import Walking from "../../src/svg/hobby/walking.svg";
import Guitar from "../../src/svg/hobby/guitar.svg";
import Smart from "../../src/svg/hobby/heimautomatisierung.svg";
import School from "../../src/svg/hobby/school.svg";
import Camera from "../../src/svg/hobby/camera.svg";
import Code from "../../src/svg/hobby/code.svg";

function hobby_icons() {
  return (
    <Main_Flex_Container>
      <Raspberry viewBox="0 0 140 140" width="50%" height="100%"></Raspberry>
      <Walking viewBox="0 0 140 140" width="50%" height="100%%"></Walking>
      <Guitar viewBox="0 0 140 140" width="50%" height="100%"></Guitar>
      <Smart viewBox="0 0 140 140" width="50%" height="100%"></Smart>
      <School viewBox="0 0 140 110" width="50%" height="100%"></School>
      <Camera viewBox="0 0 140 140" width="50%" height="100%"></Camera>
      <Code viewBox="0 0 140 110" width="50%" height="100%"></Code>
    </Main_Flex_Container>
  );
}

const Main_Flex_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #2b2d41;
  width: calc(100% - 20rem);
  padding: 8rem;
  padding-bottom: 4rem;

  margin-bottom: 2rem;

  & > *:not(:last-child) {
    margin-right: 4rem;
  }

  & > * > path {
  }

  & > * {
  }

  & > :nth-child(5) {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const Text = styled.p`
  color: white;
  font-size: 1.6rem;
`;

const Frontend = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.6rem;
`;

export default hobby_icons;
