import React from 'react';
import { useParams } from 'react-router-dom';
import { sampleArticles } from '../data/sampleArticles';
import styled from 'styled-components';

const ArticleWrapper = styled.div`
    padding: 2rem;
    max-width: 800px;
    margin: auto;
    background-color: ${({ theme }) => theme.articleBackground};
`;

const ArticleTitle = styled.h1`
    font-size: 2rem;
`;

const ArticleContent = styled.p`
    font-size: 1rem;
`;

export const ArticleDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const article = sampleArticles.find((article) => article.id === id);

    if (!article) {
        return <h1>Article not found</h1>;
    }

    return (
        <ArticleWrapper>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleContent>{article.content}</ArticleContent>
        </ArticleWrapper>
    );
};
