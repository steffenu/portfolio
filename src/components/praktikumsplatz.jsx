import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function praktikumsplatz() {
  return (
    <Praktikumsplatz_Container>
      <Wrapper>
        <Praktikumsplatz_gesucht>
          PRAKTIKUMSPLATZ GESUCHT
        </Praktikumsplatz_gesucht>
        <Start>1.8.2021</Start>
      </Wrapper>
    </Praktikumsplatz_Container>
  );
}

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;

  align-items: center;
  background: ${({ theme }) => theme.colors.bg};
  padding: 1.4rem;

  margin-left: ${({ theme }) => theme.abstand.seitenabstand};
`;

const Praktikumsplatz_Container = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
  margin-bottom: 4rem;
`;

const Praktikumsplatz_gesucht = styled.h2`
  color: white;
`;

const Start = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export default praktikumsplatz;
