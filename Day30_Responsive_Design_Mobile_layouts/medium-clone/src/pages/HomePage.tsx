import React from "react";
import { ArticleList } from "../components/ArticleList";
import styled from "styled-components";

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 1.5rem;
`;

export const HomePage: React.FC = () => {
  return (
    <main>
      <StyledH1>
        <h1>Welcome to Medium Clone</h1>
      </StyledH1>
      <ArticleList />
    </main>
  );
};
