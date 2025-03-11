# Basics of Backend 

## Setup a Backend server

## Node.JS
```
Node.js is a cross-platform environment and library for running JavaScript applications which is used to create networking and server-side applications.

It can be downloaded from this link https://nodejs.org/en/



Node.js allows you to run JavaScript on the server.

`Node.js = Runtime Environment + JavaScript Library`

```


## Features of Node.js

- Extremely fast: Node.js is built on Google Chrome's V8 JavaScript Engine, so its library is very fast in code execution.

- I/O is Asynchronous and Event Driven: All APIs of Node.js library are asynchronous i.e. non-blocking. So a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call. It is also a reason that it is very fast.

- Single threaded: Node.js follows a single threaded model with event looping. 
**Note: Watch me for understanding [Event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)**

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

- Standard JavaScript errors i.e. ```<EvalError>, <SyntaxError>, <RangeError>, <ReferenceError>, <TypeError>, <URIError> etc.```
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

V8 is an open source JavaScript engine developed by the Chromium project for the Google Chrome web browser. It is written in C++. Now a days, it is used in many projects such as Couchbase, MongoDB and Node.js.

(read me about it on google)



## Node.JS Events

In Node.js applications, Events and Callbacks concepts are used to provide concurrency. As Node.js applications are single threaded and every API of Node js are asynchronous. So it uses async function to maintain the concurrency. Node uses observer pattern. Node thread keeps an event loop and after the completion of any task, it fires the corresponding event which signals the event listener function to get executed.



Event Driven Programming




-----


# Build Simple API using NodeJS (Express)

## Notes for Building a Simple API using Express and MVC Pattern

#### 1. **Introduction to MVC Pattern**
   - **Model**: Represents the data and business logic. It interacts with the database and defines the data structure.
   - **View**: Manages the presentation layer. For an API, this usually means formatting data as JSON or XML.
   - **Controller**: Handles the incoming HTTP requests, interacts with the model, and returns a response using the view.

#### 2. **Setting Up the Project**

1. **Initialize the Project**
   ```bash
   mkdir express-mvc-api
   cd express-mvc-api
   npm init -y
   ```
   This creates a `package.json` file.

2. **Install Dependencies**
   ```bash
   npm install express mongoose
   ```
   - `express`: The framework for building the API.
   - `mongoose`: An ODM (Object Data Modeling) library for MongoDB and Node.js.

3. **Project Structure**
   ```
   express-mvc-api/
   ├── models/
   │   └── userModel.js
   ├── controllers/
   │   └── userController.js
   ├── routes/
   │   └── userRoutes.js
   ├── app.js
   └── server.js
   ```

#### 3. **Creating the Model**
   The model interacts with the database, defining the data structure and methods to interact with it.

   **File**: `models/userModel.js`
   ```javascript
   const mongoose = require('mongoose');

   const userSchema = new mongoose.Schema({
     name: { type: String, required: true },
     email: { type: String, required: true, unique: true },
     password: { type: String, required: true },
   });

   const User = mongoose.model('User', userSchema);

   module.exports = User;
   ```

   - **Explanation**:
     - We define a `userSchema` using Mongoose.
     - `User` is the model that interacts with the `users` collection in MongoDB.

#### 4. **Creating the Controller**
   The controller handles the incoming requests and interacts with the model.

   **File**: `controllers/userController.js`
   ```javascript
   const User = require('../models/userModel');

   // @desc   Get all users
   // @route  GET /api/users
   // @access Public
   exports.getUsers = async (req, res) => {
     try {
       const users = await User.find();
       res.json(users);
     } catch (error) {
       res.status(500).json({ message: error.message });
     }
   };

   // @desc   Create a new user
   // @route  POST /api/users
   // @access Public
   exports.createUser = async (req, res) => {
     const { name, email, password } = req.body;

     try {
       const user = new User({ name, email, password });
       const newUser = await user.save();
       res.status(201).json(newUser);
     } catch (error) {
       res.status(400).json({ message: error.message });
     }
   };
   ```

   - **Explanation**:
     - **`getUsers`**: Fetches all users from the database and sends them as JSON.
     - **`createUser`**: Takes data from the request body, creates a new user, and saves it to the database.

#### 5. **Creating the Routes**
   Routes map the URLs to the corresponding controller methods.

   **File**: `routes/userRoutes.js`
   ```javascript
   const express = require('express');
   const router = express.Router();
   const userController = require('../controllers/userController');

   router.get('/users', userController.getUsers);
   router.post('/users', userController.createUser);

   module.exports = router;
   ```

   - **Explanation**:
     - **`router.get('/users')`**: Maps the `GET /api/users` route to the `getUsers` controller function.
     - **`router.post('/users')`**: Maps the `POST /api/users` route to the `createUser` controller function.

#### 6. **Setting Up the Express Application**

   **File**: `app.js`
   ```javascript
   const express = require('express');
   const mongoose = require('mongoose');
   const userRoutes = require('./routes/userRoutes');

   const app = express();

   // Middleware to parse JSON
   app.use(express.json());

   // Routes
   app.use('/api', userRoutes);

   // Database connection
   mongoose.connect('mongodb://localhost/express_mvc_api', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   }).then(() => console.log('MongoDB connected'))
     .catch((error) => console.error('MongoDB connection error:', error));

   module.exports = app;
   ```

   - **Explanation**:
     - **`express.json()`**: Middleware to parse incoming JSON requests.
     - **`app.use('/api', userRoutes)`**: Registers the user routes under the `/api` path.
     - **`mongoose.connect`**: Connects to a MongoDB database.

#### 7. **Starting the Server**

   **File**: `server.js`
   ```javascript
   const app = require('./app');

   const PORT = process.env.PORT || 5000;

   app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });
   ```

   - **Explanation**:
     - Starts the server on the specified port, defaulting to 5000.

#### 8. **Testing the API**
   - **GET** Request to `/api/users` should return an empty array initially.
   - **POST** Request to `/api/users` with a JSON body `{ "name": "John", "email": "john@example.com", "password": "123456" }` should create a new user.

#### 9. **Conclusion**
   - This structure cleanly separates concerns following the MVC pattern.
   - The controller handles the logic, the model interacts with the database, and the routes handle HTTP requests.

   


------

### 1. **Basic Server Setup and Configuration**

Setting up a basic server involves installing the necessary software and configuring it to handle requests. In the context of web development with Node.js, this means creating a basic server using the `http` module or using a framework like Express.

#### Steps:
1. **Install Node.js:**
   - First, download and install Node.js from [nodejs.org](https://nodejs.org).
   - Verify installation:
     ```bash
     node -v
     npm -v
     ```

2. **Create a Basic Node.js Server:**
   Create a new directory for your project and initialize a new Node.js project:
   ```bash
   mkdir basic-server
   cd basic-server
   npm init -y
   ```

3. **Create a Basic Server File:**
   Create a file called `server.js` and add the following code:
   ```javascript
   const http = require('http');

   const server = http.createServer((req, res) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Hello, World!\n');
   });

   const PORT = 3000;
   server.listen(PORT, () => {
     console.log(`Server running at http://localhost:${PORT}/`);
   });
   ```
   This code creates an HTTP server that responds with "Hello, World!" for every request.

4. **Run the Server:**
   ```bash
   node server.js
   ```
   You should see `Server running at http://localhost:3000/`. Open your browser and go to `http://localhost:3000` to see the response.

### 2. **Setting up a Local Development Environment**

To set up a local development environment for Node.js, follow these steps:

1. **Install Node.js:**
   - Download from [nodejs.org](https://nodejs.org).
   - Verify the installation as shown above.

2. **Install a Code Editor:**
   - Use a code editor like Visual Studio Code, Sublime Text, or any other of your choice.

3. **Set Up a Basic Project:**
   - Create a new directory for your project:
     ```bash
     mkdir my-project
     cd my-project
     ```
   - Initialize the project:
     ```bash
     npm init -y
     ```
   - This will create a `package.json` file, which keeps track of dependencies and project metadata.

4. **Install Necessary Packages:**
   - For most Node.js projects, you will want to install Express:
     ```bash
     npm install express
     ```
   - Optionally, install Nodemon for automatic server restarts:
     ```bash
     npm install --save-dev nodemon
     ```

5. **Create a Basic `server.js` File:**
   - Use the same example as shown in the Basic Server Setup.

6. **Run the Project:**
   - If using `nodemon`:
     ```bash
     npx nodemon server.js
     ```

### 3. **Introduction to Web Servers (Apache, Nginx)**

#### Overview:
- **Apache** and **Nginx** are popular web servers used to serve static and dynamic content on the web. They can be configured as reverse proxies, load balancers, or just as servers for serving HTML/CSS/JS files.

#### Use Cases:
- **Apache:** Preferred for serving dynamic content like PHP. Provides rich features like `.htaccess` for URL rewriting.
- **Nginx:** Preferred for serving static content or as a reverse proxy. It’s known for its high performance and low memory usage.

#### Node.js Integration:
- Typically, you would configure Apache or Nginx to forward requests to a Node.js server. This can be done using reverse proxy configurations.

**Example Nginx Reverse Proxy Configuration:**
```nginx
server {
    listen 80;
    server_name my-node-app.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
This configuration forwards all requests to the Node.js server running on port 3000.

### 4. **Handling HTTP Requests and Responses**

Node.js provides the `http` module to handle HTTP requests and responses. However, in most applications, you’ll use a framework like Express to simplify request and response handling.

#### Handling HTTP Requests and Responses Using Express:

1. **Install Express:**
   ```bash
   npm install express
   ```

2. **Create a Basic Server:**
   ```javascript
   const express = require('express');
   const app = express();
   const PORT = 3000;

   // Basic Request Handling
   app.get('/', (req, res) => {
     res.send('Hello, World!');
   });

   // Handling POST Requests
   app.post('/submit', (req, res) => {
     res.send('Form submitted!');
   });

   app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```
   - **`app.get('/', callback)`:** Handles GET requests to the root URL.
   - **`app.post('/submit', callback)`:** Handles POST requests to `/submit`.

### 5. **Understanding HTTP Methods (GET, POST, PUT, DELETE)**

HTTP defines various methods for interacting with resources. Node.js and Express provide methods to handle these in

### Understanding HTTP Methods (GET, POST, PUT, DELETE)

#### 1. **GET**
- **Purpose:** Retrieve data from the server.
- **Characteristics:**
  - Data is sent via URL parameters (query strings).
  - Can be cached and bookmarked.
  - Safe and idempotent (does not change server state).
- **Example:**
  ```javascript
  app.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);
  });
  ```

#### 2. **POST**
- **Purpose:** Send data to the server to create a new resource.
- **Characteristics:**
  - Data is sent in the request body (not visible in URL).
  - Not idempotent (multiple identical requests can create multiple resources).
- **Example:**
  ```javascript
  app.post('/users', (req, res) => {
    const newUser = req.body; // Assume body-parser is used
    res.status(201).json({ message: 'User created', user: newUser });
  });
  ```

#### 3. **PUT**
- **Purpose:** Update an existing resource.
- **Characteristics:**
  - Data is sent in the request body.
  - Not Idempotent (sending the same request multiple times results in the same state if req body is different).
- **Example:**
  ```javascript
  app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    res.json({ message: `User with ID ${userId} updated`, user: updatedUser });
  });
  ```

#### 4. **DELETE**
- **Purpose:** Remove a resource from the server.
- **Characteristics:**
  - Typically does not have a body in the request.
  - Idempotent (deleting the same resource multiple times has the same effect).
- **Example:**
  ```javascript
  app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `User with ID ${userId} deleted` });
  });
  ```

### Summary
- **GET**: Retrieve data.
- **POST**: Create a new resource.
- **PUT**: Update an existing resource.
- **DELETE**: Remove a resource.

These methods form the backbone of RESTful APIs, allowing for interaction with resources in a standardized way.

---