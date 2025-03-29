# Introduction to APIs and web services RESTful API design principles

## API

An API (Application Programming Interface) is a set of rules and protocols that allows one piece of software to interact with another. It defines the methods and data structures that developers can use to communicate with a service, enabling different software applications to exchange data and functionality. Here are some key points about APIs:

1. **Purpose**: APIs enable the integration of various services, allowing different applications to work together and share data seamlessly.

2. **Types of APIs**:
   - **Web APIs**: These are used for web-based services and are accessed over HTTP/HTTPS protocols. Examples include REST APIs and SOAP APIs.
   - **Library/Framework APIs**: These are part of programming libraries or frameworks and provide functionalities for specific tasks within an application.
   - **Operating System APIs**: These provide access to functions of the operating system, like file management and process control.

3. **Components of an API**:
   - **Endpoints**: Specific URLs where the API's resources can be accessed.
   - **Methods**: The actions that can be performed, such as GET (retrieve data), POST (send data), PUT (update data), and DELETE (remove data).
   - **Headers**: Provide metadata about the request or response, such as content type or authentication tokens.
   - **Request Body**: Contains the data sent to the API, often in JSON or XML format.
   - **Response**: The data returned by the API after processing the request, usually in JSON or XML format.

4. **Authentication and Authorization**:
   - **Authentication**: Verifies the identity of the user or application making the request, often using methods like API keys, OAuth tokens, or JWT (JSON Web Tokens).
   - **Authorization**: Determines what actions the authenticated user or application is allowed to perform.

5. **Examples of Popular APIs**:
   - **Social Media APIs**: Like Facebook Graph API, Twitter API, and Instagram API.
   - **Payment APIs**: Like Stripe API and PayPal API.
   - **Maps and Location APIs**: Like Google Maps API and Mapbox API.

APIs are crucial in modern software development, enabling the creation of complex and interconnected systems by allowing different applications and services to communicate and work together efficiently.


## Why we require APIs today ?

### Why We Require APIs Today

1. **Interoperability**: APIs enable different software systems to communicate with each other, facilitating integration and interoperability between various applications and services.

2. **Efficiency**: APIs allow developers to use existing functionalities and services without having to build them from scratch, speeding up the development process.

3. **Scalability**: APIs enable the development of scalable systems by allowing components to interact and share resources dynamically.

4. **Modularity**: APIs support the modular development approach, where different parts of an application can be developed and updated independently.

5. **Ecosystem Growth**: APIs allow third-party developers to build applications and services on top of existing platforms, expanding the ecosystem and driving innovation.

6. **User Experience**: By integrating various services through APIs, developers can create more comprehensive and user-friendly applications, enhancing the overall user experience.

### RESTful APIs

RESTful APIs (Representational State Transfer APIs) are a type of web API that adhere to the principles of REST, an architectural style for designing networked applications. Here's an overview:

1. **Statelessness**: Each request from a client to a server must contain all the information needed to understand and process the request. The server does not store any client context between requests.

2. **Client-Server Architecture**: The client and server are separate entities that communicate over a network. The client requests resources, and the server provides them, allowing for a separation of concerns.

3. **Uniform Interface**: RESTful APIs use a uniform interface, typically HTTP, with standard methods (GET, POST, PUT, DELETE) and standard status codes.

4. **Resource-Based**: In REST, resources (e.g., users, products) are identified by URIs (Uniform Resource Identifiers). Each resource can be accessed and manipulated using standard HTTP methods.

5. **Representations**: Resources can have different representations (e.g., JSON, XML). The client and server exchange these representations to perform actions on the resources.

6. **Stateless Operations**: Each operation (request) is stateless, meaning it does not depend on any previous requests. This allows for scalability and reliability.

### Key Components of RESTful APIs

- **Endpoints/Resources**: The URIs that identify the resources (e.g., `/users`, `/products`).
- **HTTP Methods**:
  - **GET**: Retrieve data from the server.
  - **POST**: Send data to the server to create a new resource.
  - **PUT**: Update an existing resource on the server.
  - **DELETE**: Remove a resource from the server.
- **Headers**: Metadata included in the request and response (e.g., `Content-Type`, `Authorization`).
- **Request Body**: Data sent to the server in a POST or PUT request, typically in JSON or XML format.
- **Response**: Data returned by the server, usually in JSON or XML format, along with status codes indicating the result of the request.

### Example of RESTful API

1. **GET Request**: Retrieve a list of users
   ```
   GET /users
   ```

2. **POST Request**: Create a new user
   ```
   POST /users
   {
     "name": "John Doe",
     "email": "john.doe@example.com"
   }
   ```

3. **PUT Request**: Update an existing user
   ```
   PUT /users/1
   {
     "name": "John Doe",
     "email": "john.updated@example.com"
   }
   ```

4. **DELETE Request**: Delete a user
   ```
   DELETE /users/1
   ```

RESTful APIs are widely used due to their simplicity, scalability, and compatibility with web technologies, making them a standard choice for building web services and integrating different systems.


## APIs Design Principles

Designing an API involves several principles to ensure it is efficient, user-friendly, and maintainable. Here are key API design principles with brief examples for clarity:

### 1. **Consistency**

**Principle**: Ensure that similar actions are performed in the same way across the API.

**Example**:
- For retrieving a list of resources, use the same naming convention.
  ```
  GET /users
  GET /products
  ```
- For accessing a specific resource, follow a consistent pattern.
  ```
  GET /users/{userId}
  GET /products/{productId}
  ```

### 2. **Statelessness**

**Principle**: Each API request should contain all the information needed to process it, without relying on any previous requests.

**Example**:
- When making a request to update a user, include all necessary data in the request.
  ```
  PUT /users/1
  {
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
  ```

### 3. **Resource-Based**

**Principle**: Design APIs around resources rather than actions.

**Example**:
- Use nouns to represent resources and HTTP methods to perform actions on them.
  ```
  GET /books
  POST /books
  PUT /books/{bookId}
  DELETE /books/{bookId}
  ```

### 4. **Use HTTP Methods Appropriately**

**Principle**: Utilize standard HTTP methods (GET, POST, PUT, DELETE) according to their intended purposes.

**Example**:
- Use GET to retrieve resources, POST to create, PUT to update, and DELETE to remove.
  ```
  GET /orders
  POST /orders
  PUT /orders/{orderId}
  DELETE /orders/{orderId}
  ```

### 5. **Meaningful URIs**

**Principle**: URIs should be intuitive and convey meaning about the resource they represent.

**Example**:
- Use clear and descriptive URIs.
  ```
  GET /employees
  GET /employees/{employeeId}/address
  ```

### 6. **Versioning**

**Principle**: Provide a versioning strategy to maintain backward compatibility while evolving the API.

**Example**:
- Include the version in the URI.
  ```
  GET /v1/customers
  GET /v2/customers
  ```

### 7. **Error Handling**

**Principle**: Provide informative error messages and use appropriate HTTP status codes.

**Example**:
- Return a 404 status code when a resource is not found and provide a descriptive message.
  ```
  HTTP/1.1 404 Not Found
  {
    "error": "User not found"
  }
  ```

### 8. **Security**

**Principle**: Ensure the API is secure by implementing proper authentication and authorization mechanisms.

**Example**:
- Use API keys, OAuth tokens, or JWTs for secure access.
  ```
  GET /accounts
  Headers: { "Authorization": "Bearer <token>" }
  ```

### 9. **Pagination**

**Principle**: For endpoints that return large sets of data, implement pagination to enhance performance and usability.

**Example**:
- Include parameters for page number and page size.
  ```
  GET /products?page=2&size=50
  ```

### 10. **Documentation**

**Principle**: Provide comprehensive documentation to help developers understand how to use the API effectively.

**Example**:
- Use tools like Swagger/OpenAPI to generate and maintain documentation.
  ```yaml
  paths:
    /pets:
      get:
        summary: Get a list of pets
        responses:
          '200':
            description: A JSON array of pet names
            content:
              application/json:
                schema: 
                  type: array
                  items:
                    type: string
  ```

### 11. **Idempotency**

**Principle**: Ensure that repeated requests have the same effect as a single request, especially for non-GET methods like PUT and DELETE.

**Example**:
- Making the same PUT request multiple times should not create multiple resources.
  ```
  PUT /users/1
  {
    "name": "Jane Doe",
    "email": "jane.doe@example.com"
  }
  ```

### 12. **HATEOAS (Hypermedia as the Engine of Application State)**

**Principle**: Provide links in the responses to guide the client on what they can do next, improving discoverability.

**Example**:
- Include links to related resources in the response.
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "links": {
      "self": "/users/1",
      "orders": "/users/1/orders"
    }
  }
  ```

Applying these principles helps in creating robust, intuitive, and scalable APIs that are easier for developers to use and maintain.


## Summary

### Simplified API Design Principles with Pros and Cons

1. **Consistency**
   - **What**: Use similar patterns for similar actions.
   - **Pro**: Makes the API easier to understand and use.
   - **Con**: Requires careful planning and adherence to patterns.

   **Example**: Always use `/users` to get a list of users and `/users/{id}` to get a specific user.

2. **Statelessness**
   - **What**: Each request should contain all necessary information.
   - **Pro**: Simplifies server design and improves scalability.
   - **Con**: Requires clients to handle all state information.

   **Example**: Sending all user data in a PUT request to update user details.

3. **Resource-Based**
   - **What**: Design around resources (things) rather than actions.
   - **Pro**: Makes the API intuitive and RESTful.
   - **Con**: May require careful naming and structuring of resources.

   **Example**: Use `/products` for products, not `/getProducts`.

4. **Use HTTP Methods Appropriately**
   - **What**: Use standard HTTP methods for their intended actions.
   - **Pro**: Aligns with web standards and expectations.
   - **Con**: Requires adherence to HTTP standards and proper use of methods.

   **Example**: Use GET to fetch data, POST to create data.

5. **Meaningful URIs**
   - **What**: Use clear and descriptive URIs.
   - **Pro**: Makes the API easier to understand and navigate.
   - **Con**: Requires thoughtful URI design and maintenance.

   **Example**: `/users/{userId}` is clearer than `/getUser`.

6. **Versioning**
   - **What**: Include a version number to handle changes.
   - **Pro**: Allows for changes without breaking existing clients.
   - **Con**: Adds complexity to the API management.

   **Example**: `/v1/products` and `/v2/products`.

7. **Error Handling**
   - **What**: Provide clear error messages and status codes.
   - **Pro**: Helps clients understand and fix issues.
   - **Con**: Requires consistent implementation of error responses.

   **Example**: 404 for not found and 400 for bad request.

8. **Security**
   - **What**: Implement authentication and authorization.
   - **Pro**: Protects the API from unauthorized access.
   - **Con**: Adds complexity to the API design and usage.

   **Example**: Use API keys or tokens to secure endpoints.

9. **Pagination**
   - **What**: Break up large data sets into pages.
   - **Pro**: Improves performance and usability.
   - **Con**: Adds complexity to the API and client-side handling.

   **Example**: `/products?page=2&size=50`.

10. **Documentation**
    - **What**: Provide clear and comprehensive documentation.
    - **Pro**: Helps developers understand and use the API effectively.
    - **Con**: Requires ongoing effort to maintain and update.

    **Example**: Use tools like Swagger for interactive documentation.

11. **Idempotency**
    - **What**: Ensure repeated requests have the same effect as a single request.
    - **Pro**: Avoids unintended side effects from repeated actions.
    - **Con**: Requires careful implementation, especially for state-changing requests.

    **Example**: Multiple PUT requests to `/users/1` should update the user, not create multiple records.

12. **HATEOAS (Hypermedia as the Engine of Application State)**
    - **What**: Include links in responses to guide the client.
    - **Pro**: Enhances discoverability and usability of the API.
    - **Con**: Adds complexity to API responses and client handling.

    **Example**: Include links like `/users/1/orders` in the response to show related actions.

### Summary

**API Design Principles** help in creating APIs that are easy to use, scalable, and maintainable. They involve:

1. **Consistency**: Keep actions and patterns uniform.
2. **Statelessness**: Ensure each request is self-contained.
3. **Resource-Based**: Focus on resources rather than actions.
4. **HTTP Methods**: Use GET, POST, PUT, DELETE appropriately.
5. **Meaningful URIs**: Make URIs descriptive and intuitive.
6. **Versioning**: Use version numbers to handle changes.
7. **Error Handling**: Provide clear errors and status codes.
8. **Security**: Implement proper authentication and authorization.
9. **Pagination**: Handle large data sets efficiently.
10. **Documentation**: Offer clear and comprehensive documentation.
11. **Idempotency**: Ensure repeated requests have the same effect.
12. **HATEOAS**: Include links to guide client actions.

Following these principles ensures a well-structured, reliable, and user-friendly API.

-----

## Project Code Explanation: 

### Project Structure

We'll use the following structure:

```
myapp/
├── controllers/
│   ├── authController.js
│   └── userController.js
├── models/
│   └── User.js
├── services/
│   └── authService.js
├── views/
│   ├── login.ejs
│   ├── register.ejs
│   ├── profile.ejs
│   └── home.ejs
├── public/
│   ├── css/
│   │   └── style.css
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
├── app.js
├── config.js
├── .env
└── package.json
```

### Step 1: Initialize the Project

1. Create the project directory and navigate into it.
2. Initialize a new Node.js project.

```bash
mkdir myapp
cd myapp
npm init -y
```

### Step 2: Install Dependencies

```bash
npm install express mongoose bcryptjs jsonwebtoken ejs dotenv body-parser express-session connect-mongo
npm install --save-dev nodemon
```

### Step 3: Create `.env` file

Create a `.env` file in the root directory and add the following content:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/myapp
JWT_SECRET=your_jwt_secret
SESSION_SECRET=your_session_secret
```

### Step 4: Create Configuration File

Create a `config.js` file to load environment variables.

```javascript
require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  sessionSecret: process.env.SESSION_SECRET,
};
```

### Step 5: Create Models

Create a `User.js` model in the `models` directory.

```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
```

### Step 6: Create Services

Create an `authService.js` in the `services` directory.

```javascript
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config');

exports.register = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

exports.login = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user || !(await user.comparePassword(password))) {
    throw new Error('Invalid username or password');
  }
  const token = jwt.sign({ id: user._id, username: user.username }, config.jwtSecret, { expiresIn: '1h' });
  return { user, token };
};

exports.verifyToken = (token) => {
  return jwt.verify(token, config.jwtSecret);
};
```

### Step 7: Create Controllers

Create an `authController.js` in the `controllers` directory.

```javascript
const authService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.redirect('/login');
  } catch (error) {
    res.status(400).render('register', { error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { user, token } = await authService.login(req.body.username, req.body.password);
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/profile');
  } catch (error) {
    res.status(400).render('login', { error: error.message });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
};

exports.isAuthenticated = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) throw new Error('Not authenticated');
    const decoded = authService.verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    res.redirect('/login');
  }
};
```

Create a `userController.js` in the `controllers` directory.

```javascript
exports.getProfile = (req, res) => {
  res.render('profile', { user: req.user });
};
```

### Step 8: Create Routes

Create `authRoutes.js` in the `routes` directory.

```javascript
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/register', (req, res) => res.render('register'));
router.post('/register', authController.register);

router.get('/login', (req, res) => res.render('login'));
router.post('/login', authController.login);

router.get('/logout', authController.logout);

module.exports = router;
```

Create `userRoutes.js` in the `routes` directory.

```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('/profile', authController.isAuthenticated, userController.getProfile);

module.exports = router;
```

### Step 9: Create Views

Create `register.ejs` in the `views` directory.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Register</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <h1>Register</h1>
  <% if (error) { %>
    <p><%= error %></p>
  <% } %>
  <form action="/register" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <button type="submit">Register</button>
  </form>
  <a href="/login">Login</a>
</body>
</html>
```

Create `login.ejs` in the `views` directory.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <h1>Login</h1>
  <% if (error) { %>
    <p><%= error %></p>
  <% } %>
  <form action="/login" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <button type="submit">Login</button>
  </form>
  <a href="/register">Register</a>
</body>
</html>
```

Create `profile.ejs` in the `views` directory.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Profile</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <h1>Profile</h1>
  <p>Welcome, <%= user.username %>!</p>
  <a href="/logout">Logout</a>
</body>
</html>
```

Create `home.ejs` in the `views` directory.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <h1>Home</h1>
  <a href="/login">Login</a>
  <a href="/register">Register</a>
</body>
</html>
```

### Step 10: Create CSS

Create `style.css` in the `public/css` directory.

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  color: #333;
 

 display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

h1 {
  margin-bottom: 20px;
}

form {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #28a745;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

a {
  display: block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

### Step 11: Create the Main Application

Create `app.js` in the root directory.

```javascript
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const config = require('./config');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: config.mongoURI }),
}));

app.use(authRoutes);
app.use(userRoutes);

app.get('/', (req, res) => res.render('home'));

app.listen(config.port, () => console.log(`Server running on port ${config.port}`));
```

### Running the Application

1. Start MongoDB.
2. Run the application using `nodemon`:

```bash
npx nodemon app.js
```

Now, you have a complete working application with authentication and authorization using JWT, MongoDB, and EJS templates. The application follows the MVC architecture and has a clean, professional UI with basic CSS styling.

-----