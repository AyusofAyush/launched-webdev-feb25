// src/services/api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

export const fetchBlogs = () => API.get('/posts');
export const fetchBlog = (id) => API.get(`/posts/${id}`);
export const createBlog = (blog) => API.post('/posts', blog);
export const updateBlog = (id, blog) => API.put(`/posts/${id}`, blog);
export const deleteBlog = (id) => API.delete(`/posts/${id}`);
