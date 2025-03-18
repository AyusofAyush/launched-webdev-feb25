// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const { successResponse } = require('../utils/responseHandler');
const mongoose = require('mongoose');


// Create a new post
router.post('/posts', async (req, res, next) => {
    try {
         // Assuming req.body contains title, content, and authorId
         const { title, body, author } = req.body;

         // Check if authorId exists and is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(author)) {
            const error = new Error('Invalid Author');
            error.statusCode = 400;
            next(error);
        }

        // Check if the user with authorId exists
        const userExists = await User.exists({ _id: author });
        if (!userExists) {
            const error = new Error('User not found');
            error.statusCode = 404;
            next(error);
        }

         // Create a new post object
         const newPost = new Post({
             title,
             body,
             author // Assign the author ObjectId here
         });
 
         // Save the post to the database
         const savedPost = await newPost.save();
 
         successResponse(res, savedPost, 201);
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
});

// Read all posts
router.get('/posts', async (req, res, next) => {
    try {
        const posts = await Post.find().populate('author');
        successResponse(res, posts);
    } catch (error) {
        next(error);
    }
});

// Read a single post
router.get('/posts/:id', async (req, res, next) => {
    const _id = req.params.id;
    try {
        const post = await Post.findById(_id).populate('author');
        if (!post) {
            const error = new Error('Post Not Found');
            error.statusCode = 404;
            throw error;
        }
        successResponse(res, post);
    } catch (error) {
        next(error);
    }
});

// Update a post
router.patch('/posts/:id', async (req, res, next) => {
    const _id = req.params.id;
    try {
        const post = await Post.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
        if (!post) {
            const error = new Error('Post Not Found');
            error.statusCode = 404;
            throw error;
        }
        successResponse(res, post);
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
});

// Delete a post
router.delete('/posts/:id', async (req, res, next) => {
    const _id = req.params.id;
    try {
        const post = await Post.findByIdAndDelete(_id);
        if (!post) {
            const error = new Error('Post Not Found');
            error.statusCode = 404;
            throw error;
        }
        successResponse(res, post);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
