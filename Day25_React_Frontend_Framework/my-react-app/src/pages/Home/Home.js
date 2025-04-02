// src/pages/Home/Home.js
import React from 'react';
import Greeting from '../../components/Greeting/Greeting';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h2>Hello Fellow Developer's</h2>
      <Greeting name="Ayush Raj" />
    </div>
  );
}

export default Home;
