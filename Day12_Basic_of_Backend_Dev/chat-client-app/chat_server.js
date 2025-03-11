// chat_server.js
const net = require('net');

const PORT = 3000;
const clients = [];

// Create a server instance
const server = net.createServer((socket) => {
    // Add the new client to the list
    clients.push(socket);

    console.log('A new client connected');

    // Handle incoming data from clients
    socket.on('data', (data) => {
        // Broadcast the data to all clients
        clients.forEach((client) => {
            if (client !== socket) {
                client.write(data);
            }
        });
    });

    // Handle client disconnect
    socket.on('end', () => {
        console.log('A client disconnected');
        // Remove the client from the list
        const index = clients.indexOf(socket);
        if (index !== -1) {
            clients.splice(index, 1);
        }
    });

    // Handle errors
    socket.on('error', (err) => {
        console.error('Socket error:', err);
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Chat server is listening on port ${PORT}`);
});
