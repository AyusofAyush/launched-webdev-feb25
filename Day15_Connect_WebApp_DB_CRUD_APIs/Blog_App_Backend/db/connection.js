const mongoose = require('mongoose');

const connectionURL = 'mongodb://127.0.0.1:27017/blogging-app-backend';

mongoose.connect(connectionURL, {
    // don't pass any options 
    // use default options
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

