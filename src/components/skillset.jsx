import React from "react";
import { motion } from "framer-motion";

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
      <Grid_Item
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        <Javascript />
        <Text>JAVSCRIPT</Text>
      </Grid_Item>
      <Grid_Item
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        <Node />
        <Text>NODE</Text>
      </Grid_Item>
      <Grid_Item
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        <React_Icon />
        <Text>REACT</Text>
      </Grid_Item>
      <Grid_Item
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        <Python />
        <Text>PYTHON</Text>
      </Grid_Item>
      <Grid_Item
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        <Php />
        <Text>PHP</Text>
      </Grid_Item>
      <Grid_Item
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        <Mysql />
        <Text>DATABASES</Text>
      </Grid_Item>

      <Grid_Item
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        <Linux />
        <Text>LINUX</Text>
      </Grid_Item>

      <Grid_Item
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        <Apache />
        <Text>APACHE WEBSERVER</Text>
      </Grid_Item>

      <Grid_Item
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        <Html />
        <Text>HTML 5</Text>
      </Grid_Item>
      <Grid_Item
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        <Css />
        <Text>CSS 3</Text>
      </Grid_Item>
      <Grid_Item
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        <Sass />
        <Text>PREPROCESSORS</Text>
      </Grid_Item>
      <Grid_Item
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        <Gulp />
        <Text>TASK AUTOMATION</Text>
      </Grid_Item>
      <Grid_Item
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
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
  grid-auto-rows: 22vw;

  grid-template-rows: repeat(auto-fit, 22vw);

  grid-template-columns: repeat(auto-fit, 25vw);
  justify-content: space-around;
  align-items: center;

  grid-gap: 60px 10px;

  width: calc(100% - 30rem);

  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-auto-rows: 50vw;

    grid-template-rows: repeat(auto-fit, 50vw);

    grid-template-columns: repeat(auto-fit, 55vw);
  }
`;

const Grid_Item = styled(motion.div)`
  font-family: "Roboto", serif;
  font-weight: 300;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #2b2d41;
  box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.5);
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
    margin-bottom: calc(2rem + 0.4vw);
  }

  & :nth-child(12) > * {
  }

  & :hover {
    //border: 1px solid #ff0000;
  }

  @media (min-width: 1280px) {
    & > :first-child {
      transform: scale(1.6);
    }
  }

  @media (min-width: 1440px) {
    & > :first-child {
      transform: scale(1.8);
    }
  }

  @media (min-width: 2560px) {
    & > :first-child {
      transform: scale(2);
    }
  }

  /* 
  const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}
   */
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.red};

  font-size: calc(1.6rem + 0.4vw);
`;

export default skillset;
