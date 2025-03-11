// chat_client.js
const net = require('net');
const readline = require('readline');

const PORT = 3000;
const HOST = 'localhost';

// Create a readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Connect to the chat server
const client = net.createConnection(PORT, HOST, () => {
    console.log('Connected to chat server');
    rl.setPrompt('You: ');
    rl.prompt();
});

// Handle incoming data from the server
client.on('data', (data) => {
    console.log('\nServer: ' + data.toString());
    rl.prompt();
});

// Handle user input
rl.on('line', (line) => {
    client.write(line);
    rl.prompt();
});

// Handle errors
client.on('error', (err) => {
    console.error('Client error:', err);
    rl.close();
});
