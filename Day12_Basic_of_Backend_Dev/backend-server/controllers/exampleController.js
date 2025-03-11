const exampleModel = require('../models/exampleModel');

// Controller to get all items
exports.getAllItems = (req, res) => {
    const items = exampleModel.getAllItems();
    res.json(items);
};

// Controller to get an item by ID
exports.getItemById = (req, res) => {
    const id = req.params.id;
    const item = exampleModel.getItemById(id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
};

// Controller to create a new item
exports.createItem = (req, res) => {
    const newItem = req.body;
    const createdItem = exampleModel.createItem(newItem);
    res.status(201).json(createdItem);
};

// Controller to update an item by ID
exports.updateItemById = (req, res) => {
    const id = req.params.id;
    const updatedItem = req.body;
    const result = exampleModel.updateItemById(id, updatedItem);
    if (result) {
        res.json(result);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
};

// Controller to delete an item by ID
exports.deleteItemById = (req, res) => {
    const id = req.params.id;
    const result = exampleModel.deleteItemById(id);
    if (result) {
        res.json({ message: 'Item deleted successfully' });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
};
