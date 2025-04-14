import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardWrapper = styled.div`
    background-color: ${({ theme }) => theme.cardBackground};
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    transition: transform 0.2s;
    &:hover {
        transform: translateY(-10px);
    }
`;

const ArticleTitle = styled.h2`
    font-size: 1.25rem;
`;

const ArticleSummary = styled.p`
    margin: 0.5rem 0 1rem;
`;

export const ArticleCard: React.FC<{ article: any }> = ({ article }) => {
    return (
        <CardWrapper>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleSummary>{article.summary}</ArticleSummary>
            <Link to={`/article/${article.id}`}>Read More</Link>
        </CardWrapper>
    );
};
