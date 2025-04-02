// src/components/Greeting/Greeting.js
import React from "react";
import "./Greeting.css";

function Greeting({ name }) {
  return <h1 className="greeting">I'm, {name}!</h1>;
}

export default Greeting;
