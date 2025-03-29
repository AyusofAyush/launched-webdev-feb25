// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  // we are registering all the reducers here
  reducer: {
    posts: postsReducer,
    user: userReducer,
  },
});

export default store;
