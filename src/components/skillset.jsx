import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Javascript from "../svg/skills/javascript.svg";
import Node from "../svg/skills/node3.svg";
import Python from "../svg/skills/python.svg";
import React_Icon from "../svg/skills/react.svg";
import Php from "../svg/skills/php.svg";
import Mysql from "../svg/skills/mysql.svg";
import Git from "../svg/skills/git.svg";
import Linux from "../svg/skills/linux.svg";
import Apache from "../svg/skills/apache.svg";
import Html from "../svg/skills/html5.svg";
import Css from "../svg/skills/css3.svg";
import Sass from "../svg/skills/sass.svg";
import Gulp from "../svg/skills/gulp.svg";

function skillset() {
  return (
    <Main_Grid_Container>
      <Grid_Item>
        <Javascript />
        <Text>JAVSCRIPT</Text>
      </Grid_Item>
      <Grid_Item>
        <Node />
        <Text>NODE</Text>
      </Grid_Item>
      <Grid_Item>
        <React_Icon />
        <Text>REACT</Text>
      </Grid_Item>
      <Grid_Item>
        <Python />
        <Text>PYTHON</Text>
      </Grid_Item>
      <Grid_Item>
        <Php />
        <Text>PHP</Text>
      </Grid_Item>
      <Grid_Item>
        <Mysql />
        <Text>DATABASES</Text>
      </Grid_Item>

      <Grid_Item>
        <Linux />
        <Text>LINUX</Text>
      </Grid_Item>

      <Grid_Item>
        <Apache />
        <Text>APACHE WEBSERVER</Text>
      </Grid_Item>

      <Grid_Item>
        <Html />
        <Text>HTML 5</Text>
      </Grid_Item>
      <Grid_Item>
        <Css />
        <Text>CSS 3</Text>
      </Grid_Item>
      <Grid_Item>
        <Sass />
        <Text>PREPROCESSORS</Text>
      </Grid_Item>
      <Grid_Item>
        <Gulp />
        <Text>TASK AUTOMATION</Text>
      </Grid_Item>
      <Grid_Item>
        <Git />
        <Text>VERSION CONTROL</Text>
      </Grid_Item>
    </Main_Grid_Container>
  );
}

const Main_Grid_Container = styled.div`
  display: grid;
  margin: 0 auto;

  height: auto;
  grid-auto-rows: 224px;

  grid-template-rows: repeat(auto-fit, 224px);

  grid-template-columns: repeat(auto-fit, 240px);
  justify-content: space-around;
  align-items: center;

  grid-gap: 60px 10px;

  width: calc(100% - 30rem);

  margin-bottom: 2rem;
`;

const Grid_Item = styled.div`
  font-family: "Roboto", serif;
  font-weight: 300;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #2b2d41;
  & > * > path {
    fill: ${({ theme }) => theme.colors.red};
  }

  & > *:not(:last-child) {
    transform: scale(1.3);
  }

  & > * > * > path {
    fill: ${({ theme }) => theme.colors.red};
  }

  & > :first-child {
    margin-bottom: 2rem;
  }

  & :nth-child(12) > * {
  }

  & :hover {
    border: 1px solid #ff0000;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.red}; ;
`;

export default skillset;
