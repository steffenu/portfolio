import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function hobby_tags() {
  return (
    <Tag_Container>
      <Tag>Smart Home</Tag>
      <Tag>Raspberry Pi</Tag>
      <Tag>Video Editing / Content Creation</Tag>
      <Tag>Self Development</Tag>
      <Tag>Automatisieren</Tag>
      <Tag>Walking / Biking</Tag>
      <Tag>Musik / Konzerte</Tag>
    </Tag_Container>
  );
}

const Tag_Container = styled.ul`
  margin: 0 auto;
  background: #2b2d41;
  width: calc(100% - 20rem);
  padding: 3rem;

  display: flex;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0rem;
    padding: 1rem;

    & > * {
      margin-right: 0rem;
      margin-bottom: 2rem;
      font-size: 1.6rem !important;
    }
    & > *:not(:last-child) {
      margin-right: 0rem;
    }
  }
`;

const Tag = styled.li`
  color: white;
  font-family: "Roboto", serif;
  font-weight: 300;
  margin-top: 1rem;
  font-size: calc(1.6rem + 0.6vw);

  //border: 2px solid ${({ theme }) => theme.colors.primary};
  // border-radius: 15px;
  padding: 0.5rem 0.8rem;
`;

export default hobby_tags;
