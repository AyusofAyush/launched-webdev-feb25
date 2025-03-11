let items = [
    { id: 1, name: 'Item 1', description: 'This is item 1' },
    { id: 2, name: 'Item 2', description: 'This is item 2' },
    { id: 3, name: 'Item 3', description: 'This is item 3' }
];

// service methods for items array

// Get all items
exports.getAllItems = () => {
    return items;
};

// Get item by ID
exports.getItemById = (id) => {
    return items.find(item => item.id == id);
};

// Create a new item
exports.createItem = (newItem) => {
    newItem.id = items.length + 1;
    items.push(newItem);
    return newItem;
};

// Update item by ID
exports.updateItemById = (id, updatedItem) => {
    let item = items.find(item => item.id == id);
    if (item) {
        item.name = updatedItem.name;
        item.description = updatedItem.description;
        return item;
    }
    return null;
};

// Delete item by ID
exports.deleteItemById = (id) => {
    const index = items.findIndex(item => item.id == id);
    if (index !== -1) {
        items.splice(index, 1);
        return true;
    }
    return false;
};
