const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

// Sample route to get all items
router.get('/items', exampleController.getAllItems);

// Sample route to get an item by ID
router.get('/items/:id', exampleController.getItemById);

// Sample route to create a new item
router.post('/items', exampleController.createItem);

// Sample route to update an item by ID
router.put('/items/:id', exampleController.updateItemById);

// Sample route to delete an item by ID
router.delete('/items/:id', exampleController.deleteItemById);

module.exports = router;
