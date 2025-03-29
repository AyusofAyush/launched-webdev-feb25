// src/components/Post.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { likePost, addComment } from '../features/posts/postsSlice';

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    if (comment.trim() === '') return;
    dispatch(addComment({ postId: post.id, comment }));
    setComment('');
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={post.avatar} alt="avatar" />
        <h3>{post.author}</h3>
      </div>
      {post.imageUrl && <img src={post.imageUrl} alt="post" className="post-image" />}
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      <button onClick={() => dispatch(likePost(post.id))}>Like ({post.likes})</button>
      <div className="comments">
        {post.comments.map((c, index) => (
          <p key={index}>{c}</p>
        ))}
      </div>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
      />
      <button onClick={handleAddComment} disabled={comment.trim() === ''}>Comment</button>
    </div>
  );
};

export default Post;
