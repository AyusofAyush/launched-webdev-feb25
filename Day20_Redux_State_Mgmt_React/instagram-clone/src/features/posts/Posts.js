// src/features/posts/Posts.js
import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../../components/Post';

const Posts = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
