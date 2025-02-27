const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Function to handle CORS by setting headers
function setCorsHeaders(res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow specific methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers
}

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set CORS headers for all responses
    setCorsHeaders(res);

    if (req.method === 'OPTIONS') {
        // Handle preflight requests for CORS
        res.writeHead(204);
        res.end();
        return;
    }

    // Routing logic based on URL
    if (req.url === '/api/json' && req.method === 'GET') {
        // Send JSON response
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'Hello, this is a JSON response!',
            status: 'success',
        }));
    } else if (req.url === '/html' && req.method === 'GET') {
        // Send plain HTML response
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Inline HTML</title>
            </head>
            <body>
                <h1>Inline HTML Response</h1>
                <p>This HTML was sent directly from the server using res.end().</p>
            </body>
            </html>
        `);
    } else if (req.url === '/demo' && req.method === 'GET') {
        // Read and send the demo.html file
        const filePath = path.join(__dirname, 'demo.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading the HTML file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/' && req.method === 'GET') {
        // Default route
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Node.js Server!');
    } else {
        // Handle 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
