// src/pages/CreateBlog.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createBlog } from '../services/api';
import BlogForm from '../components/BlogForm';

const CreateBlog = () => {
  const navigate = useNavigate();

  const handleCreate = async (newBlog) => {
    await createBlog(newBlog);
    navigate('/');
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <BlogForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreateBlog;
