# Basic routing and URL handling Templating and rendering dynamic content

## What is routing in Express ?

Routing in Express.js refers to the way the application responds to client requests for specific endpoints, which are defined by a URL path and a specific HTTP method. Essentially, routing determines how an application’s endpoints (URIs) respond to client requests. 

In Express.js, routes are created using methods of the `app` object that correspond to HTTP methods, such as `app.get()`, `app.post()`, `app.put()`, and `app.delete()`.

#### Basic Example of Routing in Express.js:

```javascript
const express = require('express');
const app = express();

// Define a route for GET requests to the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route for GET requests to '/about'
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Define a route for POST requests to '/contact'
app.post('/contact', (req, res) => {
  res.send('Contact Page');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

In this example:
- `app.get('/')` defines a route for handling GET requests to the root URL.
- `app.get('/about')` defines a route for handling GET requests to `/about`.
- `app.post('/contact')` defines a route for handling POST requests to `/contact`.

### What is Routing in a Web Application?

Routing in a web application is the mechanism by which an application responds to client requests to different endpoints or paths. It involves mapping URLs to specific functions or handlers within the application that process the requests and return appropriate responses.

#### Key Concepts of Routing in Web Applications:

1. **Endpoints/Paths**: These are the URLs that clients (such as web browsers) request. Each endpoint can have a specific route handler associated with it.
2. **HTTP Methods**: These define the type of operation to be performed at a given endpoint, such as GET, POST, PUT, DELETE, etc.
3. **Route Handlers**: These are the functions or methods that process the incoming request and generate a response. They can perform various operations such as querying a database, processing data, and rendering views.

#### Example of Routing in a Web Application:

Consider a blog application with the following routes:
- `GET /`: Displays the homepage.
- `GET /posts`: Displays a list of blog posts.
- `GET /posts/:id`: Displays a specific blog post based on the provided ID.
- `POST /posts`: Creates a new blog post.
- `PUT /posts/:id`: Updates an existing blog post based on the provided ID.
- `DELETE /posts/:id`: Deletes a specific blog post based on the provided ID.

Each of these routes is mapped to a specific handler function that processes the request and returns the appropriate response.

### Summary

Routing is a fundamental concept in both Express.js and web applications in general. It allows developers to define how their applications respond to various client requests, ensuring that users can interact with the application through well-defined URLs and HTTP methods. By organizing routes and their handlers effectively, developers can create robust and maintainable web applications.


## URL Handling in Express.js

### URL Handling in Express.js

URL handling in Express.js involves defining how the application responds to various URL paths requested by clients. This is typically done using routes. A route in Express.js is composed of:

- A URL path (or pattern)
- An HTTP method (such as GET, POST, PUT, DELETE)
- A route handler function that processes the request and sends a response

#### Example of URL Handling in Express.js

```javascript
const express = require('express');
const app = express();

// Handle GET request for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Handle GET request for the '/about' URL
app.get('/about', (req, res) => {
  res.send('About us');
});

// Handle GET request for the '/users/:userId' URL with a URL parameter
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`User Profile for user ${userId}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

In this example:
- `app.get('/')` handles GET requests to the root URL.
- `app.get('/about')` handles GET requests to the `/about` URL.
- `app.get('/users/:userId')` handles GET requests to `/users/:userId`, where `:userId` is a dynamic parameter that can be accessed via `req.params.userId`.


## Different Templeting Engine in Express

Express.js supports various view engines, allowing you to use different templating languages for rendering HTML. Here are some popular view engines along with short examples and brief explanations:

### 1. EJS (Embedded JavaScript)

**Installation:**
```bash
npm install ejs
```

**Setup and Example:**
```javascript
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'EJS Example', message: 'Hello EJS!' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

**views/index.ejs:**
```html
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <h1><%= message %></h1>
</body>
</html>
```

**Explanation:** EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.

### 2. Pug (formerly Jade)

**Installation:**
```bash
npm install pug
```

**Setup and Example:**
```javascript
const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: 'Pug Example', message: 'Hello Pug!' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

**views/index.pug:**
```pug
doctype html
html
  head
    title= title
  body
    h1= message
```

**Explanation:** Pug is a high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers. It features a clean and concise syntax.

### 3. Handlebars (hbs)

**Installation:**
```bash
npm install hbs
```

**Setup and Example:**
```javascript
const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Handlebars Example', message: 'Hello Handlebars!' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

**views/index.hbs:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>{{title}}</title>
</head>
<body>
  <h1>{{message}}</h1>
</body>
</html>
```

**Explanation:** Handlebars is a simple templating language inspired by Mustache. It allows you to separate the generation of HTML from the rest of your JavaScript code, making it cleaner and more modular.

### 4. Mustache

**Installation:**
```bash
npm install mustache-express
```

**Setup and Example:**
```javascript
const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', `${__dirname}/views`);

app.get('/', (req, res) => {
  res.render('index', { title: 'Mustache Example', message: 'Hello Mustache!' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

**views/index.mustache:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>{{title}}</title>
</head>
<body>
  <h1>{{message}}</h1>
</body>
</html>
```

**Explanation:** Mustache is a logic-less template syntax. It works by expanding tags in a template using values provided in a hash or object.

### 5. Nunjucks

**Installation:**
```bash
npm install nunjucks
```

**Setup and Example:**
```javascript
const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.set('view engine', 'njk');

app.get('/', (req, res) => {
  res.render('index', { title: 'Nunjucks Example', message: 'Hello Nunjucks!' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

**views/index.njk:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>{{ title }}</title>
</head>
<body>
  <h1>{{ message }}</h1>
</body>
</html>
```

**Explanation:** Nunjucks is a full-featured templating engine for JavaScript. It is essentially a port of Jinja2, a popular templating engine for Python.

### 6. Twig (via Twig.js)

**Installation:**
```bash
npm install twig
```

**Setup and Example:**
```javascript
const express = require('express');
const twig = require('twig');
const app = express();

app.set('view engine', 'twig');

app.get('/', (req, res) => {
  res.render('index', { title: 'Twig Example', message: 'Hello Twig!' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

**views/index.twig:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>{{ title }}</title>
</head>
<body>
  <h1>{{ message }}</h1>
</body>
</html>
```

**Explanation:** Twig.js is a JavaScript implementation of the Twig PHP templating language. It provides a similar syntax and feature set to Twig.

### Conclusion

Each of these view engines offers different features and syntaxes. Choosing the right one depends on your project's requirements and your personal preference.




## Templating in Express.js

Let's use EJS (Embedded JavaScript) as the templating engine for your Express.js application. Here’s a step-by-step guide:

1. **Install EJS**:

   First, install EJS using npm:

   ```bash
   npm install ejs
   ```

2. **Set Up EJS in Your Express.js Application**:

   Next, configure your Express.js application to use EJS as the templating engine:

   ```javascript
   const express = require('express');
   const app = express();

   // Set 'ejs' as the templating engine
   app.set('view engine', 'ejs');
   app.set('views', './views'); // Specify the views directory

   // Define a route that renders a template
   app.get('/', (req, res) => {
     res.render('index', { title: 'Home', message: 'Welcome to the homepage!' });
   });

   // Define another route
   app.get('/about', (req, res) => {
     res.render('about', { title: 'About', message: 'About us page content' });
   });

   // Define a dynamic route
   app.get('/users/:userId', (req, res) => {
     const userId = req.params.userId;
     res.render('user', { title: 'User Profile', userId: userId });
   });

   // Start the server
   app.listen(3000, () => {
     console.log('Server is running on http://localhost:3000');
   });
   ```

3. **Create EJS Templates**:

   Create an `index.ejs`, `about.ejs`, and `user.ejs` file in the `views` directory.

   **views/index.ejs**:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title><%= title %></title>
   </head>
   <body>
       <h1><%= message %></h1>
   </body>
   </html>
   ```

   **views/about.ejs**:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title><%= title %></title>
   </head>
   <body>
       <h1><%= message %></h1>
   </body>
   </html>
   ```

   **views/user.ejs**:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title><%= title %></title>
   </head>
   <body>
       <h1>User Profile for user: <%= userId %></h1>
   </body>
   </html>
   ```

In this setup:
- `app.set('view engine', 'ejs');` configures Express.js to use EJS as the templating engine.
- `app.set('views', './views');` specifies the directory where the template files are located.
- `res.render('index', { title: 'Home', message: 'Welcome to the homepage!' });` renders the `index.ejs` template and passes the data (`title` and `message`) to it.

This way, you can create dynamic HTML pages that incorporate data passed from your Express.js route handlers.


## Dynamic Content template based: Blog Application 


> Let's see the code for our Amazing Blog App

### Summary of Creating the Blog App

#### Project Overview

We created a simple blog application using Express.js, EJS as the view engine, and MongoDB for the database. The application allows users to perform CRUD operations (Create, Read, Update, Delete) on blog posts. The project also includes dynamic content rendering and basic CSS styling for a better user experience.

#### Project Setup

1. **Initialize Project:**
   - Created a new Node.js project.
   - Installed necessary dependencies: Express, EJS, Mongoose, Body-Parser, Method-Override.

2. **Directory Structure:**
   - `models/`: Contains the Mongoose model for blog posts.
   - `public/css/`: Contains the CSS styles.
   - `views/`: Contains EJS templates.
   - `app.js`: The main application file.

#### Code Implementation

1. **Express.js Application Setup (app.js):**
   - Set up Express middleware for handling JSON, URL-encoded data, static files, and method overrides.
   - Configured EJS as the templating engine.
   - Connected to MongoDB using Mongoose.
   - Defined routes for handling CRUD operations.

2. **Mongoose Model (models/post.js):**
   - Created a `Post` model with `title`, `content`, and `created_at` fields.

3. **EJS Templates:**
   - `layout.ejs`: A layout template used by other views for consistent structure and styling.
   - `index.ejs`: Displays all blog posts.
   - `new.ejs`: Form for creating a new post.
   - `edit.ejs`: Form for editing an existing post.
   - `show.ejs`: Displays a single blog post.

4. **CSS Styling (public/css/styles.css):**
   - Added basic CSS styles to improve the visual appearance of the application.

#### Routes and CRUD Operations

1. **Create a New Post:**
   - **Route:** `POST /posts`
   - **View:** `new.ejs`
   - **Description:** Renders a form to create a new post and handles the form submission to save the post in MongoDB.

2. **Read All Posts:**
   - **Route:** `GET /`
   - **View:** `index.ejs`
   - **Description:** Fetches all posts from MongoDB and displays them.

3. **Read a Specific Post:**
   - **Route:** `GET /posts/:id`
   - **View:** `show.ejs`
   - **Description:** Fetches and displays a single post based on its ID.

4. **Update a Post:**
   - **Route:** `PUT /posts/:id`
   - **View:** `edit.ejs`
   - **Description:** Renders a form to edit an existing post and handles the form submission to update the post in MongoDB.

5. **Delete a Post:**
   - **Route:** `DELETE /posts/:id`
   - **Description:** Deletes a specific post based on its ID from MongoDB.

#### Testing the API

We provided `curl` commands to test the various CRUD operations:
- Create a new post
- Get all posts
- Get a specific post by ID
- Update a specific post by ID
- Delete a specific post by ID

### Conclusion

The blog application is a full-featured web application that demonstrates how to:
- Set up a Node.js project with Express.js and EJS.
- Use Mongoose to interact with a MongoDB database.
- Implement CRUD operations.
- Render dynamic content using EJS templates.
- Apply basic CSS styling for improved UI.


-----