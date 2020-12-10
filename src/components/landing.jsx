import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export default function landing() {
  return (
    <Main_Flex_Container>
      <GlobalStyle />
      <Flex_container_1>
        <Hi>Hi, mein Name ist</Hi>
        <Steffen>Steffen Unger</Steffen>
        <Steffen_info>
          Web Entwicklung Enthusiast, <br /> Umschüler im Bereich
          Anwendungsentwicklung
        </Steffen_info>
      </Flex_container_1>
      <Flex_container_2>
        <Front_to_Back>
          FRONT <span className="span_1">TO</span>
          <span className="span_2"> BACK</span>
        </Front_to_Back>
        <Web_entwicklung>Web Entwicklung</Web_entwicklung>

        <Wrapper>
          <Praktikumsplatz_gesucht>
            PRAKTIKUMSPLATZ GESUCHT
          </Praktikumsplatz_gesucht>
          <Start>August 2021</Start>
        </Wrapper>
      </Flex_container_2>
    </Main_Flex_Container>
  );
}

const GlobalStyle = createGlobalStyle`


.span_1{
  color: white;
  font-size: 1.2rem;
  
}

.span_2{
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
}
`;

const Main_Flex_Container = styled.div`
  padding: 3rem 0;
  margin-top: 20vh;
  background: #2b2d41;

  display: flex;
  justify-content: space-between;
  padding-right: 10rem; /*8rem seitenbastand + 2 rem extra*/
  padding-left: 8rem; /*8rem seitenbastand + 2 rem black border*/
`;

const Flex_container_1 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flex_container_2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hi = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

const Steffen = styled.h1`
  line-height: 1.2;
  font-size: 4rem;
  color: white;
  margin-bottom: 2rem;
  font-weight: 500;
`;

const Steffen_info = styled.p`
  font-size: 1.4rem;
  color: #849184;
`;

const Front_to_Back = styled.h2`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.primary};

  font-weight: 300;
`;

const Web_entwicklung = styled.p`
  font-size: 1.4rem;
  line-height: 0.8;
  color: white;
`;

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;

  align-items: center;
  background: ${({ theme }) => theme.colors.bg};
  padding: 1rem;
  margin-top: 2rem;
`;

const Praktikumsplatz_Container = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
  margin-bottom: 4rem;
`;

const Praktikumsplatz_gesucht = styled.h2`
  color: white;
  font-size: 1.4rem;
`;

const Start = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.primary};
`;
