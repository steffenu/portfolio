import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Background_1 from "../svg/background/boreus1.svg";

export default function landing() {
  return (
    <Main_Flex_Container>
      <GlobalStyle />

      <Flex_Wrapper>
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
            <span className="span_0">FRONT</span>{" "}
            <span className="span_1">TO</span>
            <span className="span_2"> BACK</span>
          </Front_to_Back>
          <Web_entwicklung>Web Entwicklung</Web_entwicklung>
        </Flex_container_2>
      </Flex_Wrapper>
      <Background_1
        viewBox="0 0 1300.81 676.91"
        width="100%"
        height="100%"
        className="start_svg"
      ></Background_1>
    </Main_Flex_Container>
  );
}

const GlobalStyle = createGlobalStyle`

.start_svg{

max-width: 100%;
height: 100%;
overflow:hidden;
align-self: flex-end;
opacity: 0.4;


  
}

.span_1{
  color: white;
  font-size: 1.2rem;
  align-self:flex-end;
  
}

.span_2{
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
}
`;

const Main_Flex_Container = styled.div`
  padding: 4rem 0;

  background: #2b2d41;
  position: relative;

  display: flex;
  justify-content: space-between;
  //padding-right: 10rem; /*8rem seitenbastand + 2 rem extra*/
  padding-left: 8rem; /*8rem seitenbastand + 2 rem black border*/

  min-height: calc(100vh - 120px);

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > * :nth-child(2) {
    }
  }
`;

const Flex_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
`;

const Flex_container_1 = styled.div`
  z-index: 2;

  display: flex;
  flex-direction: column;
`;

const Flex_container_2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Hi = styled.p`
  font-size: calc(1.2rem + 0.8vw);
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

const Steffen = styled.h1`
  line-height: 1.2;
  font-size: calc(4rem + 0.8vw);
  color: white;
  margin-bottom: 2rem;
  font-weight: 500;
`;

const Steffen_info = styled.p`
  font-size: calc(1.4rem + 0.8vw);
  color: #849184;
`;

const Front_to_Back = styled.h2`
  margin-top: 8vw;

  width: 100%;
  font-size: calc(3.2rem + 0.8vw);
  color: ${({ theme }) => theme.colors.primary};

  font-weight: 300;
`;

const Web_entwicklung = styled.p`
  font-size: calc(1.2rem + 0.8vw);
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
  font-size: calc(1.6rem + 0.8vw);
  color: ${({ theme }) => theme.colors.primary};
`;
