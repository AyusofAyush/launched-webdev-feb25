// src/App.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from "./features/posts/Posts";
import { addPost } from "./features/posts/postsSlice";
import { login, logout } from "./features/user/userSlice";
import "./App.css";

const App = () => {
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleAddPost = () => {
    if (content.trim() === "") return;
    dispatch(
      addPost({
        id: Date.now(),
        author: user.username,
        content,
        likes: 0,
        avatar:
          "https://fastly.picsum.photos/id/1047/200/300.jpg?hmac=qKpI7C3-gy7En06KAzy2pm7dQAJncqoXDDZxLomHAGY",
        imageUrl,
      })
    );
    setContent("");
    setImageUrl("");
  };

  const handleLogin = () => {
    if (username.trim() === "") return;
    dispatch(login(username));
    setUsername("");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="App">
      <header>
        <h1>Instagram Clone</h1>
        {!user.isLoggedIn ? (
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        ) : (
          <div>
            <span>Welcome, {user.username}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </header>
      {user.isLoggedIn && (
        <div>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
          />
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL"
          />
          <button onClick={handleAddPost} disabled={content.trim() === ""}>
            Post
          </button>
        </div>
      )}
      <Posts />
      <footer>
        <p>&copy; 2025 Instagram Clone. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
