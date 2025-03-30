// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import BlogDetails from "./pages/BlogDetails";
import "./styles/styles.css";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create Blog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/edit/:id" element={<EditBlog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "#f1f1f1",
        }}
      >
        <p>Blog Application &copy; 2025</p>
      </footer>
    </Router>
  );
};

export default App;
