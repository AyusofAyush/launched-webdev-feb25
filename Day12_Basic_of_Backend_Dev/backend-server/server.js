const express = require('express');
const morgan = require('morgan'); // this is for logging APIs requests
const cors = require('cors'); // this is to allow localhost to make API call
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for logging HTTP requests
app.use(morgan('dev'));

// Middleware for parsing JSON bodies
app.use(express.json()); // Replaces body-parser.json()

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors()); // just for development 
/* Read about Browser CORS policy */

// Set up API routes
app.use('/api/v1', apiRoutes);
app.use('/api/v2', apiRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Express Server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
