const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { successResponse } = require('../utils/responseHandler');

// Create a new user
router.post('/users', async (req, res, next) => {
    const user = new User(req.body);
    try {
        await user.save();
        successResponse(res, user, 201);
    } catch (error) {
        error.statusCode = 400;
        next(error);
    }
});

// Read all users
router.get('/users', async (req, res, next) => {
    try {
        const users = await User.find();
        successResponse(res, users);
    } catch (error) {
        next(error);
    }
});

// Read a single user
router.get('/users/:id', async (req, res, next) => {
    const _id = req.params.id;
    try {
        const user = await User.findById(_id);
        if (!user) {
            const error = new Error('User Not Found');
            error.statusCode = 404;
            throw error;
        }
        successResponse(res, user);
    } catch (error) {
        next(error);
    }
});

// Update a user
router.put('/users/:id', async (req, res, next) => {
    const _id = req.params.id;
    try {
        const user = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
        if (!user) {
            const error = new Error('User Not Found');
            error.statusCode = 404;
            throw error;
        }
        successResponse(res, user);
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
});


// Delete a user
router.delete('/users/:id', async (req, res, next) => {
    const _id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(_id);
        if (!user) {
            const error = new Error('User Not Found');
            error.statusCode = 404;
            throw error;
        }
        successResponse(res, user);
    } catch (error) {
        next(error);
    }
});

module.exports = router;