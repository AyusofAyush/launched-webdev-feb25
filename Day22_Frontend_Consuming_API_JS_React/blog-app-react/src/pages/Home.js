// src/pages/Home.js
import React from 'react';
import BlogList from '../components/BlogList';
import './Home.css';

const Home = () => {
  return (
    <div className='blog-home'>
      <h1>Blog Application</h1>
      <BlogList />
    </div>
  );
};

export default Home;
