// src/components/BlogList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../services/api';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const { data } = await fetchBlogs();
      setBlogs(data);
    };
    getBlogs();
  }, []); // called once ... if pass values -> then changes when values change 

  return (
    <div className="blog-list">
      <h2>Blog Posts</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-item">
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
          <Link to={`/blogs/${blog.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
