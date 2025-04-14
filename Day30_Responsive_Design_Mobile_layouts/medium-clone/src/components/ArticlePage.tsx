import React from 'react';
import { useParams } from 'react-router-dom';
import { sampleArticles } from '../data/sampleArticles';

export const ArticleDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const article = sampleArticles.find(article => article.id === id);

    if (!article) {
        return <h1>Article not found</h1>;
    }

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
};
