import React from "react";
import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";
import Node from "../svg/node.svg";
import React_SVG from "../svg/react.svg";

function card_container() {
  return (
    <Main_Flex_Container>
      <GlobalStyle></GlobalStyle>

      <Main_Flex_Container_Card
        whileHover={{ scale: 1.02 }}
        transition={{ ease: "easeOut" }}
      >
        <Image></Image>
        <Flex_container_1>
          <Title>XYZ PROJEKT</Title>
          <Description_Container>
            <Description>GUI MIT TKINTER , SOCKETS , THREADING</Description>
          </Description_Container>
        </Flex_container_1>
      </Main_Flex_Container_Card>

      {/* <React_SVG className="svg"></React_SVG> */}

      <Main_Flex_Container_Card
        whileHover={{ scale: 1.02 }}
        transition={{ ease: "easeOut" }}
      >
        <Image></Image>
        <Flex_container_1>
          <Title>XYZ PROJEKT</Title>
          <Description_Container>
            <Description>
              Some random text that serves as a longer description with more
              text.
            </Description>
          </Description_Container>
        </Flex_container_1>
      </Main_Flex_Container_Card>

      {/* <Node className="svg"></Node> */}

      <Main_Flex_Container_Card
        whileHover={{ scale: 1.02 }}
        transition={{ ease: "easeOut" }}
      >
        <Image></Image>
        <Flex_container_1>
          <Title>XYZ PROJEKT</Title>
          <Description_Container>
            <Description>
              Some random text that serves as a longer description with more
              text. Some random text that serves as a longer description with
              more text.
            </Description>
          </Description_Container>
        </Flex_container_1>
      </Main_Flex_Container_Card>

      {/* <Node className="svg"></Node> */}

      <Main_Flex_Container_Card
        whileHover={{ scale: 1.02 }}
        transition={{ ease: "easeOut" }}
      >
        <Image></Image>
        <Flex_container_1>
          <Title>XYZ PROJEKT</Title>
          <Description_Container>
            <Description>
              {" "}
              Some random text that serves as a longer description with more
              text. Some random text that serves as a longer description with
              more text.
            </Description>
          </Description_Container>
        </Flex_container_1>
      </Main_Flex_Container_Card>
    </Main_Flex_Container>
  );
}

const GlobalStyle = createGlobalStyle`

.svg{
  margin: 20rem 0;
  fill: ${({ theme }) => theme.colors.primary};
  & > * {
    fill: ${({ theme }) => theme.colors.primary};
  }
}
`;

const Main_Flex_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //margin-bottom: 10vh;

  background: rgb(22, 223, 177);
  background: linear-gradient(
    90deg,
    rgba(22, 223, 177, 0.10222807384672616) 0%,
    rgba(22, 223, 177, 0) 50%,
    rgba(22, 223, 177, 0.10783031474308469) 100%
  );

  & > :first-child {
    margin-top: 20vw;
  }

  & > *:not(last-child) {
    margin-bottom: 20rem;
  }

  & > :last-child {
    margin-bottom: 20vw;
  }
`;

/* 
const BoxStyled = styled(motion.div)`
    display: flex;
`;
*/

const Main_Flex_Container_Card = styled(motion.div)`
  width: 65vw;
  height: 32vw;
  background: #2b2d41;

  display: flex;

  justify-content: space-around;
  align-items: center;

  border-right: 5px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    width: 80vw;
    height: 42vw;
  }
`;

const Background_Container = styled.div`
  margin-left: 5px;

  width: 65vw;
  height: 32vw;

  background: ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
`;

const Image = styled.img`
  background: ${({ theme }) => theme.colors.primary};
  min-width: 60%;
  height: 80%;
  border-radius: 15px;
  opacity: 0.6;
  margin-left: 2rem;
`;

const Flex_container_1 = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const Tag_Container = styled.ul`
  display: flex;
  list-style: none;

  & > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const Tag = styled.li`
  color: white;
  font-size: 1.2rem;
  font-size: 0.8vw;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  padding: 0.5rem 0.5rem;
`;

const Title = styled.h2`
  color: #c3e2c4;
  font-size: 2.5rem;
  font-size: 2.5vw;
`;

const Description_Container = styled.div`
  margin-top: 15%;
  padding: 1rem;
  width: 80%;
  border-radius: 15px;
  background: #212336;
  margin-bottom: 32%;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
  font-size: 1.4vw;
`;

export default card_container;
