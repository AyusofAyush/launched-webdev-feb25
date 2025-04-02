// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Uncomment the following line to setup Redux store
  // <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </Provider>
);
