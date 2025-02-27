
console.log('------------------------------------------------');

console.log('Global objects:')

console.log(__dirname);   

console.log(__filename);   

// Nodejs OS module

console.log('------------------------------------------------');

const os=require('os');   // nodejs OS module


console.log("os.freemem(): \n",os.freemem());  
console.log("os.homedir(): \n",os.homedir());  
console.log("os.hostname(): \n",os.hostname());  
console.log("os.endianness(): \n",os.endianness());  
console.log("os.loadavg(): \n",os.loadavg());  
console.log("os.platform(): \n",os.platform());  
console.log("os.release(): \n",os.release());  
console.log("os.tmpdir(): \n",os.tmpdir());  
console.log("os.totalmem(): \n",os.totalmem());  
console.log("os.type(): \n",os.type());  
console.log("os.uptime(): \n",os.uptime());
  

// ---

console.log("os.cpus(): \n",os.cpus());  
console.log("os.arch(): \n",os.arch());  
console.log("os.networkInterfaces(): \n",os.networkInterfaces());   


console.log('------------------------------------------------');


// Node.js Process

console.log(`Process Architecture: ${process.arch}`);  
console.log(`Process PID: ${process.pid}`);  
console.log(`Process Platform: ${process.platform}`);  
console.log(`Process Version: ${process.version}`);  

console.log('------------------------------------------------');


// Node.Js Process Functions Example

console.log(`Current directory: ${process.cwd()}`);  
console.log(`Uptime: ${process.uptime()}`);  


console.log('------------------------------------------------');

// Node.JS path module

let path = require("path");  
// Normalization  
console.log('normalization : ' + path.normalize('/sssit/javatpoint//node/newfolder/tab/..'));  
// Join  
console.log('joint path : ' + path.join('/sssit', 'javatpoint', 'node/newfolder', 'tab', '..'));  
// Resolve  
console.log('resolve : ' + path.resolve('path_example.js'));  
// Extension   
console.log('ext name: ' + path.extname('path_example.js'));    

console.log('------------------------------------------------');


// Node.JS EventEmitter example

// Import events module  
// var events = require('events');  
// const fs = require('fs');
// // Create an eventEmitter object  
// var eventEmitter = new events.EventEmitter();  

// // Bind event and even handler as follows  
// eventEmitter.on('eventName', eventHandler);  

// // Fire an event   
// eventEmitter.emit('eventName');  

// check the events.js file for more

console.log('------------------------------------------------');


// Node.JS File System
// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

console.log('--------------------THE END------------------------');

