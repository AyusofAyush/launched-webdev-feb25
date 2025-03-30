// src/components/BlogDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchBlog, deleteBlog } from '../services/api';
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const getBlog = async () => {
      const { data } = await fetchBlog(id);
      setBlog(data);
    };
    getBlog();
  }, [id]);

  const handleDelete = async () => {
    await deleteBlog(id);
    // Redirect to home page after deletion
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="blog-detail">
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/edit/${id}`}>Edit</Link>
    </div>
  );
};

export default BlogDetail;
