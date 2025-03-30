// src/components/BlogEdit.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBlog, updateBlog } from '../services/api';
import BlogForm from './BlogForm';

const BlogEdit = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getBlog = async () => {
      const { data } = await fetchBlog(id);
      setBlog(data);
    };
    getBlog();
  }, [id]);

  const handleUpdate = async (updatedBlog) => {
    await updateBlog(id, updatedBlog);
    navigate(`/blogs/${id}`);
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Blog</h2>
      <BlogForm onSubmit={handleUpdate} initialData={blog} />
    </div>
  );
};

export default BlogEdit;
