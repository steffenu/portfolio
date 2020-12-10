import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function hobby_tags() {
  return (
    <Tag_Container>
      <Tag>Smart Home</Tag>
      <Tag>Raspberry Pi</Tag>
      <Tag>Microcontroller</Tag>
      <Tag>Video Editing / Content Creation</Tag>
      <Tag>Neue Dinge Lernen</Tag>
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
  margin-bottom: 2rem;

  display: flex;
  justify-content: center;
  list-style: none;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;

const Tag = styled.li`
  color: white;
  font-family: "Roboto", serif;
  font-weight: 700;
  font-size: 1.2rem;
  font-size: 0.8vw;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  padding: 0.5rem 0.8rem;
`;

export default hobby_tags;
