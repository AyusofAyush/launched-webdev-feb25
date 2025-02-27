# Intro to Backend Development

## What is Backend ?

Backend Development refers to the server-side development of the web application. It is the part of the application where the server and database reside and the logics is build to perform operations. It includes the main features and functionalities of the application on the server. Programming languages for the backend are mainly **Node.JS (for JavaScript), Django (for Python), Spring (Java), etc.**

## Backend Development Roadmap

- Knowledge of Web Server
- Programming Languages and Their Frameworks
- Version Control System (Git)
- Knowledge of Web Security
- APIs (Application Programming Interface)
- Containerization & Testing
- Deployment
- Cloud Providers

## Knowledge of Web Server


The web server runs websites, it stores, processes, and delivers (response) web pages to the user’s request. When the user makes a request by the web server, it is accepted by an HTTP server which finds and sends back the content to the browser through HTTP. Some examples of web servers are Apache and NGINX which are open-source platforms used to deliver content as per requests made.


## Programming Languages and their Framework


1. JS(NodeJS) - With JavaScript being the most demanding programming language, you can explore various new concepts and build a very amazing website. It is used to build interactive and dynamic websites. For JS, we have a framework which is NodeJS, which is designed with real-time, push-based architectures, the single-threaded model used for backend API services. NodeJS allows you to run JavaScript on the server.

2. Python (Django) - Python is the easiest of all programming languages and with Django, it plays a perfect combination to build a website. With less code, you can build better and more easy web applications. Python is most commonly used for developing websites and it performs quicker implementations. Django is the most secure and scalable framework one should work with.

3. Java (Spring boot) - Java is a versatile, object-oriented programming language widely used for building robust, scalable applications. Known for its portability across platforms, Java powers enterprise-level applications, mobile apps, web services, and more.

Spring Boot is a powerful framework for building Java-based web applications. It simplifies the development process by providing pre-configured templates, embedded servers, and a wide range of tools to create production-ready applications quickly. With features like dependency injection, auto-configuration, and seamless integration with various databases and services, Spring Boot enhances developer productivity and ensures robust, maintainable code.


## Version Control System (Git)


Version control system helps in maintaining and tracking changes in code changes to be used for future implementations. They are software tools that help in managing changes in source code over time. Git which is free and open-source can be the best choice as a version control system because of its secure, flexible, and easy-to-edit features.

**Why Git?**

It is the most commonly used version control system
It tracks changes made in files.
Git branches are cheap and easy to merge.
You can move to specific versions whenever you want to.


## Knowledge of Web Security


Various threats can attack a website which could result in its poor performance. Web security refers to the protective measures and protocols developers should follow to build an optimized and effective website. It includes scanning a website for vulnerabilities to defend against thefts or loss that occurs due to digital hackers.

Types of Risks developers face could be malware, backlisting, buffer overflow, and sensitive data exposure. Various techniques can be followed to avoid such issues:

**Using HTTPS:** HTTPS is a secured HTTP. When data is sent using HTTPS, it is protected via the Transport Layer Security protocol, which has three layers of protection:

**Encryption:** Way of securing data along with a password or “key” which is used to decrypt the information.

**Data Integrity:** When data integrity is secure, information stored in a database is complete, accurate, and reliable for a lifetime.

**Authentication:** This method protects against attacks and builds user trust which response to business growth.
Implementing secure backup and recovery: Data loss could be the major threat that could lead to security breaches. To avoid this, make sure to implement a backup process. This could be implemented in many ways:

Protecting media and content from theft or destruction.
Periodically testing the backups.
Apply a two-person rule so that one person cannot access the content or media without the permission of another article.
and various other methods include **XSS Attacks, Software updates, and SQL Injection.**


## APIs (Application Programming Interface)


An API (Application Programming Interface) is a set of functions that perform accessing data and interacting with external software components, microservices, and OS. In short, it delivers users’ responses to the system and sends responses back to the user. It is because of APIs (which act as a software intermediary) that two applications talk to each other. APIs are used by backend developers to create connections between services or applications to initiate communication to improve user experience. Express is a good choice for a server to create and expose APIs to have client-server communication. Some of the APIs you should know about are:

**REST (Representational State Transfer) API:**
Explanation: REST APIs use HTTP requests to perform CRUD (Create, Read, Update, Delete) operations. They are stateless and use standard HTTP methods (GET, POST, PUT, DELETE).
Example: A GET request to https://api.example.com/users retrieves a list of users.


**SOAP (Simple Object Access Protocol) API:**

Explanation: SOAP APIs use XML-based messaging protocol for exchanging information. They are more rigid and require strict adherence to standards.
Example: A SOAP request to https://api.example.com/soap/users to retrieve user information would involve an XML envelope with a specific structure.


**GraphQL API:**

Explanation: GraphQL allows clients to request exactly the data they need, making it more efficient than REST. It uses a single endpoint and allows for complex queries.
Example: A query like { user(id: "1") { name, email } } to https://api.example.com/graphql retrieves only the name and email of the user with ID 1.

**WebSocket API:**

Explanation: WebSocket APIs enable real-time, bidirectional communication between a client and a server over a single, long-lived connection.
Example: A chat application where messages are sent and received in real-time using WebSocket connections to wss://chat.example.com.

**RPC (Remote Procedure Call) API:**

Explanation: RPC APIs allow clients to execute code on a server as if it were a local procedure call, using protocols like JSON-RPC or XML-RPC.
Example: A JSON-RPC call to https://api.example.com/rpc to execute a method like {"jsonrpc": "2.0", "method": "getUser", "params": {"id": 1}, "id": 1}.

OpenAPI (formerly Swagger):

Explanation: OpenAPI is a specification for building APIs that includes a standard way to describe APIs using a common language, allowing for easy documentation and client generation.
Example: A documented REST API using OpenAPI can be explored via a URL like https://api.example.com/docs.



## Containerization & Testing


Containerization is the process of packaging software code with all the necessary elements like frameworks, libraries, and other dependencies, to make services isolated from each other in a container. This process is done by the backend developers to run a container easily. Docker and Kubernetes are the most used containers.

Docker is an open-source containerization platform, that enables developers to package applications into containers. It is similar to a virtual machine but much more efficient. Its basic use of it is it allows the applications to run in different environments.

Kubernetes often abbreviated as “K8s”, automates deploying and managing cloud-native applications using public cloud platforms.


## Deployment


**Deployment**

When the testing passes, developers move to the deployment where they can see the working of their application. It can also be referred to as a live environment. This process includes 5 steps: Planning, development, testing, deploying, and monitoring.

**Planning:** When multiple developers are working on the same project, a deployment plan is a necessity. Using this step, you avoid conflicts between changes made making sure the deployment process is as smooth and easy. This could lead to the quicker and more efficient development of the application.

**Development:** Once, the planning is done, actual development takes place. This is the step where you gather ideas and prioritization requirements. Then, the management of the complete application can be moved to testing.

**Testing:** Testing is a crucial step to ensure there are no bugs before moving it to the production level. Testing is possible only when you deploy it to various environments to check whether it fits in or not. Check for the bugs and if any, make sure to remove them and then move to the deployment process.

**Deploying:** Seeing your application working live, with no bugs, and in an optimized way gives satisfaction to the effort made. It means pushing changes or updates from one environment to another.

Monitoring: Constant monitoring is required to check whether the website is working well or not. There might be a chance that issues may occur after deploying as well, so keep an eye out for the proper functioning, and the time for release should be planned so that minimum users would have viewed and changes can be made to see the optimized web application.


## Cloud Providers


Cloud Providers
Everything is making its way to the cloud, be it software, applications, services, or products. Cloud computing. It is Web-based computing that permits businesses and individuals to consume computing resources such as virtual machines, databases, processing, services, storage, and events, and gives you a pay-as-you-go service. Cloud computing can be divided into three major categories, Software as a **Service (SaaS), Platform as a Service (PaaS), and Infrastructure as a Service (IaaS).**

The most used Cloud Services are:

- Amazon Web Services (AWS)
- Microsoft Azure
- Google Cloud
- Alibaba Cloud
- IBM Cloud
- & more...


## Backend Development Frameworks / Technologies

- Laravel: Laravel is a PHP framework for web applications, created by Taylor Otwell in 2011. It follows the Model-View-Controller (MVC) architectural pattern.

- Node JS: Node JS is an open-source and cross-platform runtime environment built on Chrome’s V8 JavaScript engine for executing JavaScript code outside of a browser.

- Django: Django is a Python-based web framework that allows you to quickly create efficient web applications. It provides built-in features for everything including Django Admin Interface, default database – SQLlite3, etc.

- Spring Boot: Spring Boot is a Java framework that makes it easier to create and run Java applications. It simplifies the configuration and setup process, allowing developers to focus more on writing code for their applications.

- Flask: Flask is an API of Python that allows us to build up web-applications. It was developed by Armin Ronacher. Flask is based on WSGI(Web Server Gateway Interface) toolkit and Jinja2 template engine.

- Express: Flask is an API of Python that allows us to build up web-applications. It was developed by Armin Ronacher. Flask is based on WSGI(Web Server Gateway Interface) toolkit and Jinja2 template engine.

- Ruby on Rails: Ruby on Rails or also known as rails is a server-side web application development framework that is written in the Ruby programming language, and it is developed by David Heinemeier Hansson under the MIT License. It supports MVC architecture.

## Benefits of Back-End Development

- Data Management: Backend handles data storage, retrieval, and management in databases. This ensures organized and efficient handling of large volumes of data.

- Business Logic: Backend is responsible for implementing the business logic of an application. It processes data, performs calculations, and enforces business rules to ensure proper application functionality.

- Server-Side Processing: Backend code runs on the server, allowing for server-side processing. This reduces the load on the client’s device and enhances the overall performance of the application.

- API Development: Backend is responsible for creating APIs (Application Programming Interfaces) that allow communication between different components of a system. APIs enable integration with third-party services and ensure a seamless user experience.

- Scalability: Backend architecture plays a key role in the scalability of an application. Well-designed backend systems can easily scale to handle increased loads and user traffic.

- Database Management: Backend developers design and manage databases, ensuring efficient data storage, retrieval, and maintenance. This is critical for applications that deal with a large amount of dynamic content.

- Support for Multiple Platforms: Backend logic ensures consistency and compatibility across various platforms and devices. This allows users to access the application from different devices without compromising the user experience.

- Updates and Maintenance: Backend development facilitates easier updates and maintenance of applications. Changes to the application logic can be implemented on the server without requiring updates to individual client devices.

- Optimization: Backend developers optimize code and databases to improve application performance. This includes optimizing queries, implementing caching strategies, and reducing response times.

- Data Validation: Backend is responsible for validating data before it is stored in the database. This ensures data integrity and prevents the storage of incorrect or inconsistent data.

- Consistent User Experience: Backend development contributes to a consistent user experience by ensuring that all users, regardless of the device or platform they are using, receive the same data and functionality.

- Compliance and Regulations: Backend developers implement features and processes to ensure that applications comply with legal regulations and industry standards, such as data protection laws.

## Backend Projects

```
Contact Form
Social Media REST API
File Uploader
Portfolio App
Real-Time Chat
Job Search App
Task Manager
Email Sender

etc...

```

---

## Setup a Backend server

## Node.JS

```
Node.js is a cross-platform environment and library for running JavaScript applications which is used to create networking and server-side applications.

It can be downloaded from this link https://nodejs.org/en/

Node.js is an open source server environment.

Node.js allows you to run JavaScript on the server.

`Node.js = Runtime Environment + JavaScript Library`

```

## Features of Node.js

- Extremely fast: Node.js is built on Google Chrome's V8 JavaScript Engine, so its library is very fast in code execution.

- I/O is Asynchronous and Event Driven: All APIs of Node.js library are asynchronous i.e. non-blocking. So a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call. It is also a reason that it is very fast.

- Single threaded: Node.js follows a single threaded model with event looping.

- Highly Scalable: Node.js is highly scalable because event mechanism helps the server to respond in a non-blocking way.

- No buffering: Node.js cuts down the overall processing time while uploading audio and video files. Node.js applications never buffer any data. These applications simply output the data in chunks.

- Open source: Node.js has an open source community which has produced many excellent modules to add additional capabilities to Node.js applications.

## Global Objects (window in browser / global in nodejs)

```
__dirname
__filename
Console
Process
Buffer
setImmediate(callback[, arg][, ...])
setInterval(callback, delay[, arg][, ...])
setTimeout(callback, delay[, arg][, ...])
clearImmediate(immediateObject)
clearInterval(intervalObject)
clearTimeout(timeoutObject)

```

## Node JS Timer

```
Set timer functions:


setImmediate(): It is used to execute setImmediate.
setInterval(): It is used to define a time interval.
setTimeout(): ()- It is used to execute a one-time callback after delay milliseconds.


Clear timer functions:

clearImmediate(immediateObject): It is used to stop an immediateObject, as created by setImmediate
clearInterval(intervalObject): It is used to stop an intervalObject, as created by setInterval
clearTimeout(timeoutObject): It prevents a timeoutObject, as created by setTimeout
```

## Node.JS Errors types

- Standard JavaScript errors i.e. <EvalError>, <SyntaxError>, <RangeError>, <ReferenceError>, <TypeError>, <URIError> etc.
- System errors
- User-specified errors
- Assertion errors

## Node.js Net

```
Node.js provides the ability to perform socket programming. We can create chat application or communicate client and server applications using socket programming in Node.js


server:

File: net_server.js

const net = require('net');
let server = net.createServer((socket) => {
  socket.end('goodbye\n');
}).on('error', (err) => {
  // handle errors here
  throw err;
});
// grab a random port.
server.listen(() => {
  address = server.address();
  console.log('opened server on %j', address);
});


client:

File: net_client.js

const net = require('net');
const client = net.connect({port: 50302}, () => {//use same port of server
  console.log('connected to server!');
  client.write('world!\r\n');
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log('disconnected from server');
});
```

## Node.Js Process

```
Node.js provides the facility to get process information such as process id, architecture, platform, version, release, uptime, upu usage etc. It can also be used to kill process, set uid, set groups, unmask etc.

arch	    returns process architecture: 'arm', 'ia32', or 'x64'
args	    returns commands line arguments as an array
env	        returns user environment
pid	        returns process id of the process
platform	returns platform of the process: 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'
release	    returns the metadata for the current node release
version	    returns the node version
versions	returns the node version and its dependencies

Process Functions

Function	    Description
cwd()	        returns path of current working directory
hrtime()	    returns the current high-resolution real time in a [seconds, nanoseconds] array
memoryUsage()	returns an object having information of memory usage.
process.kill(pid[, signal])	is used to kill the given pid.
uptime()	    returns the Node.js process uptime in seconds.


```

## Node.JS File System

```
In Node.js, file I/O is provided by simple wrappers around standard POSIX functions. Node File System (fs) module can be imported using following syntax

let fs = require('fs')

Read files
Create files
Update files
Delete files
Rename files

fs reading a file

`let fs = require("fs");
// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});
// Synchronous read  vs Asyncronous read
let data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());
console.log("Program Ended");  `


Open a File

Flags for Read/Write
Following is a list of flags for read/write operation:

Flag	    Description
r	        open file for reading. an exception occurs if the file does not exist.
r+	        open file for reading and writing. an exception occurs if the file does not exist.
rs	        open file for reading in synchronous mode.
rs+	        open file for reading and writing, telling the os to open it synchronously. see notes for 'rs' about using this with caution.
w	        open file for writing. the file is created (if it does not exist) or truncated (if it exists).
wx	        like 'w' but fails if path exists.
w+	        open file for reading and writing. the file is created (if it does not exist) or truncated (if it exists).
wx+	        like 'w+' but fails if path exists.
a	        open file for appending. the file is created if it does not exist.
ax	        like 'a' but fails if path exists.
a+	        open file for reading and appending. the file is created if it does not exist.
ax+	        open file for reading and appending. the file is created if it does not exist.

`
let fs = require("fs");
// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
  console.log("File opened successfully!");
});
`
```

## Node.js Path

```
The Node.js path module is used to handle and transform files paths. This module can be imported by using the following syntax:

Syntax:

let path =  require ("path");

Path Methods
Let's see the list of methods used in path module:

Index	    Method	        Description
1.	    path.normalize(p)	    It is used to normalize a string path, taking care of '..' and '.' parts.
2.	    path.join([path1][, path2][, ...])	It is used to join all arguments together and normalize the resulting path.
3.	    path.resolve([from ...], to)	It is used to resolve an absolute path.
4.	    path.isabsolute(path)	It determines whether path is an absolute path. an absolute path will always resolve to the same location, regardless of the working directory.
5.	    path.relative(from, to)	It is used to solve the relative path from "from" to "to".
6.	    path.dirname(p)	It return the directory name of a path. It is similar to the unix dirname command
7.	    path.basename(p[, ext])	It returns the last portion of a path. It is similar to the Unix basename command.
8.	    path.extname(p)	It returns the extension of the path, from the last '.' to end of string in the last portion of the path. if there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.
9.	    path.parse(pathstring)	It returns an object from a path string.
10.	    path.format(pathobject)	It returns a path string from an object, the opposite of path.parse above.

```

## Node.js V8 Engine

```
V8 is an open source JavaScript engine developed by the Chromium project for the Google Chrome web browser. It is written in C++. Now a days, it is used in many projects such as Couchbase, MongoDB and Node.js.

(read me about it on google)
```

## Node.JS Events

```
In Node.js applications, Events and Callbacks concepts are used to provide concurrency. As Node.js applications are single threaded and every API of Node js are asynchronous. So it uses async function to maintain the concurrency. Node uses observer pattern. Node thread keeps an event loop and after the completion of any task, it fires the corresponding event which signals the event listener function to get executed.



Event Driven Programming

```

---

---

## Setting up a Node Server

To create a server using only Node.js without using any external libraries like Express, you can use the built-in `http` and `fs` modules. Below is a step-by-step guide to set up a basic server that handles different types of responses (HTML, JSON), serves an HTML file, and handles CORS.

### **1. Project Setup**

Create a new directory for your project, and inside this directory, create two files: `server.js` and `demo.html`.

### **2. Directory Structure**

```
/node-server
├── server.js
└── demo.html
```

### **3. Creating the HTML File (demo.html)**

Create a simple `demo.html` file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Demo Page</title>
  </head>
  <body>
    <h1>Welcome to the Demo Page!</h1>
    <p>This is a sample HTML page served by a Node.js server.</p>
  </body>
</html>
```

### **4. Creating the Server (server.js)**

Here's how to set up the Node.js server using only core modules:

```javascript
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

// Function to handle CORS by setting headers
function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Allow specific methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow specific headers
}

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set CORS headers for all responses
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    // Handle preflight requests for CORS
    res.writeHead(204);
    res.end();
    return;
  }

  // Routing logic based on URL
  if (req.url === "/api/json" && req.method === "GET") {
    // Send JSON response
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Hello, this is a JSON response!",
        status: "success",
      })
    );
  } else if (req.url === "/html" && req.method === "GET") {
    // Send plain HTML response
    res.writeHead(200, { "Content-Type": "text/html" });
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
  } else if (req.url === "/demo" && req.method === "GET") {
    // Read and send the demo.html file
    const filePath = path.join(__dirname, "demo.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading the HTML file");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/" && req.method === "GET") {
    // Default route
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the Node.js Server!");
  } else {
    // Handle 404 Not Found
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### **5. Explanation of the Code**

- **CORS Handling:**

  ```javascript
  function setCorsHeaders(res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
  ```

  This function sets the necessary CORS headers to allow cross-origin requests from any domain. It is called at the beginning of each request handling.

- **Preflight Request Handling:**

  ```javascript
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }
  ```

  This handles preflight `OPTIONS` requests, which are part of the CORS mechanism.

- **JSON Response:**

  ```javascript
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      message: "Hello, this is a JSON response!",
      status: "success",
    })
  );
  ```

  This sends a JSON response with a `Content-Type` of `application/json`.

- **Inline HTML Response:**

  ```javascript
  res.writeHead(200, { "Content-Type": "text/html" });
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
  ```

  This sends an HTML string as a response.

- **Serving a Static HTML File:**
  ```javascript
  const filePath = path.join(__dirname, "demo.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error reading the HTML file");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
  ```
  This reads the content of `demo.html` from the file system and sends it as the response.

### **6. Running the Server**

- Start the server by running the following command:

  ```bash
  node server.js
  ```

- The server will be running on `http://localhost:3000`.

### **7. Testing the Server**

- Visit `http://localhost:3000/` to see the default plain text message.
- Visit `http://localhost:3000/api/json` to get a JSON response.
- Visit `http://localhost:3000/html` to get an inline HTML response.
- Visit `http://localhost:3000/demo` to get the content of the `demo.html` file.

This setup demonstrates how to create a basic HTTP server in Node.js, handle different types of responses, serve a static HTML file, and manage CORS without using any external libraries.

---

---

## Realtime chat App - Project

Certainly! Below, I'll provide a basic example of a chat application using Node.js with a server (`chat_server.js`) and a client (`chat_client.js`). This example uses TCP sockets via Node.js's built-in `net` module.

### **Chat Server (chat_server.js)**

This server listens for incoming connections and broadcasts messages to all connected clients.

```javascript
// chat_server.js
const net = require("net");

const PORT = 3000;
const clients = [];

// Create a server instance
const server = net.createServer((socket) => {
  // Add the new client to the list
  clients.push(socket);

  console.log("A new client connected");

  // Handle incoming data from clients
  socket.on("data", (data) => {
    // Broadcast the data to all clients
    clients.forEach((client) => {
      if (client !== socket) {
        client.write(data);
      }
    });
  });

  // Handle client disconnect
  socket.on("end", () => {
    console.log("A client disconnected");
    // Remove the client from the list
    const index = clients.indexOf(socket);
    if (index !== -1) {
      clients.splice(index, 1);
    }
  });

  // Handle errors
  socket.on("error", (err) => {
    console.error("Socket error:", err);
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Chat server is listening on port ${PORT}`);
});
```

### **Chat Client (chat_client.js)**

This client connects to the chat server and allows users to send and receive messages.

```javascript
// chat_client.js
const net = require("net");
const readline = require("readline");

const PORT = 3000;
const HOST = "localhost";

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Connect to the chat server
const client = net.createConnection(PORT, HOST, () => {
  console.log("Connected to chat server");
  rl.setPrompt("You: ");
  rl.prompt();
});

// Handle incoming data from the server
client.on("data", (data) => {
  console.log("\nServer: " + data.toString());
  rl.prompt();
});

// Handle user input
rl.on("line", (line) => {
  client.write(line);
  rl.prompt();
});

// Handle errors
client.on("error", (err) => {
  console.error("Client error:", err);
  rl.close();
});
```

### **Instructions to Run**

1. **Start the Chat Server:**
   Open a terminal and run the chat server using Node.js:

   ```bash
   node chat_server.js
   ```

2. **Start Chat Clients:**
   Open multiple terminals (or command prompts) and run the chat client in each terminal:

   ```bash
   node chat_client.js
   ```

3. **Chat:**
   You can now type messages in any client terminal, and those messages will be broadcasted to all connected clients.

### **How It Works**

- **Server:**

  - Listens for incoming connections on a specified port.
  - Adds each connected client to an array.
  - Broadcasts incoming messages to all clients except the sender.
  - Handles client disconnections and errors.

- **Client:**
  - Connects to the server and sets up a readline interface for user input.
  - Sends user input to the server and displays messages received from the server.

This basic example demonstrates a simple chat application using TCP sockets. For more advanced features, you might consider using WebSockets with libraries like `ws` for real-time communication over HTTP.

---
