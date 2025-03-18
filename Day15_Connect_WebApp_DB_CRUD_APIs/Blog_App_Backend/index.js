const express = require('express');
const bodyParser = require('body-parser'); // optional 
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler'); // custom middleware
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json()); // either use express.json()


// MongoDB connection
require('./db/connection');

// Routes
app.use('/api', userRoutes);
app.use('/api', postRoutes);



// Handle 404 - Resource not found
app.use(notFoundHandler);

// Handle generic error
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})