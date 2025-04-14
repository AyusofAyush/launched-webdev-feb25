import React from 'react';
import { ArticleCard } from './ArticleCard';
import { sampleArticles } from '../data/sampleArticles';
import styled from 'styled-components';

const ListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    padding: 2rem;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const ArticleList: React.FC = () => {
    return (
        <ListWrapper>
            {sampleArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </ListWrapper>
    );
};
