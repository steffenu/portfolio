import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function card() {
  return (
    <Main_Flex_Container>
      <Image></Image>
      <Flex_container_1>
        <Title>PYTHON AUTOMATION</Title>
        <Description_Container>
          <Description>GUI MIT TKINTER , SOCKETS , THREADING</Description>
        </Description_Container>

        <Tag_Container>
          <Tag>REACT.JS</Tag>
          <Tag>STYLED COMPONENTS</Tag>
          <Tag>FRAMER MOTION</Tag>
        </Tag_Container>
      </Flex_container_1>
    </Main_Flex_Container>
  );
}

const Main_Flex_Container = styled.div`
  width: 65vw;
  height: 32vw;
  background: #2b2d41;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-right: 10px solid ${({ theme }) => theme.colors.primary};


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

export default card;
