import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function nachwort() {
  return (
    <Main_Flex_Container>
      <Flex_container_1>
        <Description>DANKE FÜR DEINEN BESUCH !</Description>
      </Flex_container_1>
    </Main_Flex_Container>
  );
}

const Main_Flex_Container = styled.div`
  margin: 6rem auto;

  width: 63vw;
  height: 20vw;
  background: #2b2d41;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 10px solid ${({ theme }) => theme.colors.primary};
  border-bottom: 10px solid ${({ theme }) => theme.colors.primary};
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
`;

const Flex_container_1 = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
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
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  font-size: 2vw;
`;

export default nachwort;
