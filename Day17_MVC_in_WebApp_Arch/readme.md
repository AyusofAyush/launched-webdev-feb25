# MVC Architecture Understanding the Model-View-Controller pattern How MVC is implemented in web frameworks Setting Up a Web Application with a Framework Creating a basic application using a framework (e.g., Express)

## What is a Web Framework ?

A web framework is a software framework designed to support the development of web applications, including web services, web resources, and web APIs. Web frameworks provide a standard way to build and deploy web applications on the World Wide Web. They abstract common web development tasks, making it easier to build robust, scalable, and maintainable web applications.

### Key Features of Web Frameworks

1. **Routing**: Maps URLs to functions or methods in your code.
2. **Middleware**: Functions that process requests before they reach the final route handler.
3. **Templating**: Allows for the dynamic generation of HTML.
4. **Form Handling**: Simplifies the handling and validation of user input.
5. **Database Abstraction**: Provides an interface for interacting with databases.
6. **Security**: Includes features for securing web applications, such as protection against common web vulnerabilities.
7. **Session Management**: Handles user sessions and authentication.
8. **Testing Support**: Includes tools and frameworks for testing applications.

### Popular Web Frameworks

Here’s a list of some of the most popular web frameworks, categorized by the programming languages they use:

#### JavaScript

1. **Express.js**
   - Minimalist and flexible
   - Ideal for building RESTful APIs
   - Widely used with Node.js
   - [Documentation](https://expressjs.com/)

2. **Next.js**
   - React framework for production
   - Server-side rendering and static site generation
   - Built on top of Node.js and Express
   - [Documentation](https://nextjs.org/)

3. **NestJS**
   - Progressive Node.js framework
   - Built with TypeScript
   - Suitable for building scalable server-side applications
   - [Documentation](https://nestjs.com/)

#### Python

1. **Django**
   - High-level framework for rapid development
   - Includes ORM, templating, and authentication out of the box
   - Suitable for large-scale applications
   - [Documentation](https://www.djangoproject.com/)

2. **Flask**
   - Micro-framework with minimalistic design
   - Flexible and extensible
   - Suitable for small to medium-sized applications
   - [Documentation](https://flask.palletsprojects.com/)

3. **FastAPI**
   - Modern, fast (high-performance)
   - Based on standard Python type hints
   - Suitable for building APIs with automatic interactive documentation
   - [Documentation](https://fastapi.tiangolo.com/)

#### Ruby

1. **Ruby on Rails**
   - Full-stack framework for database-backed web applications
   - Convention over configuration philosophy
   - Strong emphasis on testing and security
   - [Documentation](https://rubyonrails.org/)

#### PHP

1. **Laravel**
   - Elegant syntax and feature-rich
   - Built-in tools for routing, authentication, and caching
   - Suitable for both small and large applications
   - [Documentation](https://laravel.com/)

2. **Symfony**
   - Reusable PHP components
   - Extensive documentation and community support
   - Suitable for large enterprise applications
   - [Documentation](https://symfony.com/)

#### Java

1. **Spring Boot**
   - Rapid application development with Java
   - Extensive ecosystem and integration with Spring framework
   - Suitable for microservices and large-scale applications
   - [Documentation](https://spring.io/projects/spring-boot)

2. **JavaServer Faces (JSF)**
   - Component-based UI framework
   - Integrated with Java EE
   - Suitable for traditional web applications
   - [Documentation](https://javaee.github.io/javaee-spec/javadocs/javax/faces/package-summary.html)

#### Go

1. **Gin**
   - High-performance HTTP web framework
   - Minimalist and fast
   - Suitable for building APIs
   - [Documentation](https://gin-gonic.com/)

2. **Echo**
   - High-performance, extensible
   - Focused on simplicity and productivity
   - Suitable for building RESTful APIs
   - [Documentation](https://echo.labstack.com/)

### In and Out of Web Frameworks

#### Pros of Using Web Frameworks

1. **Efficiency**: Accelerates development by providing out-of-the-box solutions for common tasks.
2. **Scalability**: Many frameworks are designed to handle the growth of your application.
3. **Security**: Built-in protections against common vulnerabilities like SQL injection, XSS, and CSRF.
4. **Maintainability**: Provides structure to your codebase, making it easier to manage and maintain.
5. **Community and Support**: Established frameworks have large communities and extensive documentation.

#### Cons of Using Web Frameworks

1. **Learning Curve**: Can be steep, especially for full-stack frameworks.
2. **Abstraction Overhead**: May obscure underlying processes, making debugging harder.
3. **Flexibility Limitations**: Can be opinionated, limiting how you can structure and build your application.
4. **Performance Overhead**: Some frameworks introduce overhead that can affect performance.

### Choosing the Right Web Framework

- **Project Requirements**: Consider the specific needs of your project (e.g., real-time features, RESTful APIs, static content).
- **Language Familiarity**: Choose a framework based on the programming language you are comfortable with.
- **Community and Ecosystem**: Look for a framework with a strong community and ecosystem for support and resources.
- **Scalability**: Consider the scalability needs of your application.
- **Learning Resources**: Ensure there are ample learning resources available for the framework.

### Conclusion

Web frameworks are essential tools for modern web development, providing a foundation that simplifies and accelerates the development process. Understanding the basics and features of different frameworks can help you choose the right one for your project and make the development process more efficient and enjoyable.


## Why Learn Web-Based Frameworks Today?

1. **Industry Standard**: Web frameworks are widely used in the industry. Learning them makes you a valuable asset to potential employers.
2. **Efficiency**: They provide tools and libraries that speed up the development process by handling repetitive tasks, allowing you to focus on the unique aspects of your project.
3. **Scalability**: Frameworks often come with built-in scalability features that help your application grow with user demand.
4. **Security**: They offer built-in security features to protect against common vulnerabilities like SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).
5. **Community Support**: Popular frameworks have large communities, which means better support, more tutorials, plugins, and quicker troubleshooting.
6. **Maintainability**: Frameworks enforce a certain structure and set of best practices that make your code more maintainable and easier to understand for other developers.
7. **Advanced Features**: They provide advanced features like templating engines, ORM integration, and real-time capabilities out of the box.

### Why Choose Express.js Over Other Frameworks?

Express.js, often referred to simply as Express, is one of the most popular web frameworks for Node.js. Here are several reasons to choose Express.js:

#### 1. **Minimalistic and Flexible**
- **Simplicity**: Express.js is unopinionated, meaning it doesn’t enforce a specific structure or dependencies. You have the freedom to structure your application as you see fit.
- **Flexibility**: You can add any libraries or middleware that suit your needs, making it a great choice for developers who prefer customization.

#### 2. **Lightweight**
- **Performance**: Express.js is lightweight, which can result in faster performance compared to more feature-heavy frameworks.
- **Minimal Overhead**: It adds minimal overhead to your application, allowing you to maximize Node.js’s asynchronous and non-blocking capabilities.

#### 3. **Wide Adoption and Community Support**
- **Large Community**: Being one of the most popular Node.js frameworks, Express.js has a vast community. This means plenty of tutorials, resources, and community-contributed middleware.
- **Extensive Middleware**: There is a rich ecosystem of middleware available, covering a wide range of functionalities from authentication to request logging.

#### 4. **Compatibility with Node.js**
- **Seamless Integration**: Express.js is built on top of Node.js, leveraging its non-blocking, event-driven architecture. This makes it a natural choice if you’re already using Node.js for other parts of your application.
- **Same Language for Frontend and Backend**: Using JavaScript for both frontend and backend simplifies the development process and reduces context switching.

#### 5. **Learning Curve**
- **Easy to Learn**: For those already familiar with JavaScript, picking up Express.js is relatively straightforward. The syntax and concepts are easy to grasp.
- **Great for Beginners**: Its minimalism makes it a great starting point for beginners who want to understand the fundamentals of web development without being overwhelmed by too many abstractions.

#### 6. **Extensibility**
- **Modular Design**: You can add only the components you need, avoiding unnecessary bloat. This modularity allows for a highly tailored development experience.
- **Custom Middleware**: You can easily create and integrate your own middleware to extend the functionality of your application.

#### 7. **Performance**
- **Non-blocking I/O**: Leveraging Node.js’s non-blocking I/O, Express.js is well-suited for applications that need to handle a large number of simultaneous connections, such as APIs and real-time applications.

### Example Scenarios Where Express.js Excels

1. **RESTful APIs**
   - Express.js is ideal for building RESTful APIs due to its simplicity and efficiency.
   - Example: Building an API for a microservice architecture.

2. **Single Page Applications (SPAs)**
   - Can serve as a backend for SPAs developed with frontend frameworks like React, Angular, or Vue.js.
   - Example: Backend server for a React-based web application.

3. **Prototyping**
   - Its minimal setup time makes it perfect for quickly prototyping applications.
   - Example: Rapidly creating a proof-of-concept for a new project.

4. **Microservices**
   - Express.js’s lightweight nature makes it suitable for developing microservices.
   - Example: Breaking down a monolithic application into smaller, more manageable services.

### Conclusion

Express.js is an excellent choice for developers looking for a minimalist, flexible, and efficient framework for building web applications and APIs. Its seamless integration with Node.js, wide community support, and ease of use make it a preferred choice for both beginners and experienced developers. Whether you're building simple applications, RESTful APIs, or complex microservices, Express.js provides the tools and flexibility needed to get the job done effectively.


## Lets talk about Express.js
Express.js is a minimalist web framework for Node.js, designed for building web applications and APIs. Here’s a comprehensive guide to understanding the basics of Express.js:

### What is Express.js?

- **Express.js** is a fast, unopinionated, and minimalist web framework for Node.js.
- It provides a robust set of features for web and mobile applications.
- It facilitates the rapid development of Node-based web applications.

### Key Features

1. **Middleware**: Functions that execute during the request-response cycle.
2. **Routing**: Defining URL routes to handle requests.
3. **Templates**: Supports various template engines to dynamically render HTML.
4. **Error Handling**: Centralized error handling for the entire application.

### Setting Up Express.js

1. **Install Node.js and npm**: Ensure you have Node.js and npm installed.
2. **Initialize a Project**: Create a new directory and run `npm init` to initialize a Node.js project.
3. **Install Express**: Install Express.js using npm.

```bash
npm install express
```

### Basic Application

Create a file named `app.js`:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
```

Run the application:

```bash
node app.js
```

Visit `http://localhost:3000` in your browser to see "Hello, World!".

### Middleware

Middleware functions are executed sequentially during the request-response cycle. They can:
- Execute code
- Modify the request and response objects
- End the request-response cycle
- Call the next middleware function

Example of using middleware:

```javascript
const express = require('express');
const app = express();
const port = 3000;

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
```

### Routing

Routing refers to determining how an application responds to a client request to a particular endpoint.

Example routes:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.post('/submit', (req, res) => {
  res.send('Form Submitted');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
```

### Handling Different HTTP Methods

Express provides methods to handle different HTTP methods such as GET, POST, PUT, DELETE, etc.

```javascript
app.get('/resource', (req, res) => {
  res.send('GET request');
});

app.post('/resource', (req, res) => {
  res.send('POST request');
});

app.put('/resource', (req, res) => {
  res.send('PUT request');
});

app.delete('/resource', (req, res) => {
  res.send('DELETE request');
});
```

### Serving Static Files

Express can serve static files like images, CSS, and JavaScript.

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
```

Place your static files (e.g., HTML, CSS, JS) in the `public` directory.

### Handling Form Data

To handle form data, you need to use middleware to parse the request body.

```bash
npm install body-parser
```

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Received name: ${name}, email: ${email}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
```

### Templating Engines

Express supports various templating engines like Pug, EJS, and Handlebars to render dynamic HTML.

Install Pug:

```bash
npm install pug
```

Set up Pug in your Express application:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
```

Create a `views` directory and an `index.pug` file:

```pug
doctype html
html
  head
    title= title
  body
    h1= message
```

### Error Handling

Centralized error handling in Express can be done using middleware.

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  throw new Error('Something went wrong!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
```

### Summary

- **Middleware**: Functions that modify request and response objects.
- **Routing**: Define how your application responds to various HTTP requests.
- **Static Files**: Serve static files like images, CSS, and JavaScript.
- **Templating Engines**: Render dynamic HTML using templating engines like Pug or EJS.
- **Error Handling**: Centralized error handling with middleware.

### Useful Resources

- [Express.js Official Documentation](https://expressjs.com/)
- [Node.js Official Documentation](https://nodejs.org/en/docs/)
- [Sequelize Documentation](https://sequelize.org/)
- [Pug Templating Engine](https://pugjs.org/api/getting-started.html)

This should give you a solid foundation to start working with Express.js and building web applications with it.


-----
# MVC architecture & Setting up a web application with this Architecture


## What is MVC Architecture ?

MVC, or Model-View-Controller, is a design pattern commonly used in web application development to separate concerns and improve the organization of code. Here's a brief overview of how MVC architecture works in the context of a backend web application:

1. **Model**: 
   - **Role**: The Model represents the data and the business logic of the application. It is responsible for retrieving data from the database, processing it, and returning it in a usable format.
   - **Components**: It usually consists of classes that define the structure of the data, such as database schemas, and methods to interact with the database (e.g., create, read, update, delete operations).

2. **View**:
   - **Role**: The View is responsible for presenting the data to the user. It takes the processed data from the Model and formats it into a user-friendly interface. In a backend context, this might involve rendering HTML templates or generating JSON/XML responses for an API.
   - **Components**: It includes templates or scripts that determine how the data should be displayed.

3. **Controller**:
   - **Role**: The Controller acts as an intermediary between the Model and the View. It handles incoming requests from the user, interacts with the Model to retrieve or manipulate data, and then selects the appropriate View to present the data.
   - **Components**: It contains methods that correspond to different routes or actions in the application (e.g., handling a form submission, fetching a list of items, updating a record).

### Example Workflow in an MVC Web Application

1. **User Request**: A user interacts with the application by making a request (e.g., clicking a link, submitting a form).

2. **Routing**: The request is routed to the appropriate Controller action based on the URL and HTTP method.

3. **Controller Action**: The Controller action receives the request, processes any input data, and interacts with the Model to perform business logic or data retrieval.

4. **Model Interaction**: The Model performs any necessary database operations and returns data to the Controller.

5. **View Selection**: The Controller selects a View and passes the data from the Model to it.

6. **Response**: The View renders the data into a user-friendly format (HTML, JSON, etc.) and sends the response back to the user.

### MVC in a Backend Web Framework

Different backend frameworks implement MVC in slightly different ways, but the core principles remain the same. Here are a few examples:

- **Django (Python)**: 
  - Model: Defined using Django's ORM (Object-Relational Mapping).
  - View: Implemented using Django views, which can render templates or return JSON responses.
  - Controller: Often referred to as "views" in Django terminology, but the actual routing logic is handled by Django's URL dispatcher.

- **Ruby on Rails (Ruby)**:
  - Model: Defined using ActiveRecord, Rails' ORM.
  - View: Implemented using ERB (Embedded Ruby) templates or JSON builders.
  - Controller: Rails controllers handle incoming requests and direct them to the appropriate Model and View.

- **Express.js (Node.js)**:
  - Model: Can be implemented using various ORMs like Mongoose (for MongoDB) or Sequelize (for SQL databases).
  - View: Can use templating engines like EJS, Pug, or Handlebars.
  - Controller: Defined as middleware functions that process requests and produce responses.

By separating the application logic into these three components, MVC architecture helps maintain a clean and modular codebase, making it easier to manage, test, and extend.


## Why do we need MVC Architecture in the first place ?

The Model-View-Controller (MVC) architecture is essential for creating structured, maintainable, and scalable web applications. Here's why:

1. **Separation of Concerns**: MVC divides the application into three interconnected components, each with a distinct responsibility. This separation makes it easier to manage and maintain code.

2. **Reusability**: Each component can be developed, tested, and updated independently, promoting code reuse and modularity.

3. **Parallel Development**: Different developers or teams can work on the Model, View, and Controller simultaneously without interfering with each other, speeding up the development process.

4. **Scalability**: The clear separation of concerns makes it easier to scale the application. Adding new features or updating existing ones is more straightforward because changes in one component have minimal impact on others.

5. **Maintainability**: With a well-structured codebase, debugging, testing, and extending the application become more manageable. The separation allows for easier identification and fixing of issues.

6. **Flexibility**: MVC architecture allows for flexibility in terms of using different technologies or frameworks for each component, making it easier to adapt to new requirements or improvements in technology.

### Pros of MVC Architecture

1. **Organized Code Structure**: The application is divided into layers, each with a specific responsibility, leading to a clean and organized codebase.
2. **Ease of Maintenance**: Issues can be identified and fixed more quickly, and updates can be made without affecting the entire system.
3. **Reusability**: Components can be reused across different parts of the application or in different projects.
4. **Scalability**: Easier to scale due to the modular nature of the architecture.
5. **Parallel Development**: Multiple developers or teams can work on different components simultaneously.
6. **Testing**: Easier to test components independently.

### Cons of MVC Architecture

1. **Complexity**: For small applications, the overhead of setting up MVC might be unnecessary and overly complex.
2. **Learning Curve**: Developers need to understand the MVC pattern and the specific framework being used.
3. **Initial Setup**: Setting up an MVC architecture can be time-consuming compared to simpler structures.
4. **Performance Overhead**: The separation of components can sometimes lead to performance overhead due to increased number of classes and interfaces.

### Place in the Industry

MVC is one of the most widely used architectural patterns in the industry, especially for web applications. It is implemented in many popular frameworks and libraries:

- **Ruby on Rails**: A pioneering framework that popularized MVC in web development.
- **Django**: A high-level Python framework that follows the MTV (Model-Template-View) pattern, similar to MVC.
- **ASP.NET MVC**: Microsoft's web application framework for building dynamic websites using the MVC pattern.
- **Spring MVC**: A module in the Spring Framework for building web applications in Java.
- **Laravel**: A PHP framework that uses MVC to structure its codebase.

### Significance of MVC

1. **Standardization**: MVC provides a standardized way of structuring web applications, which helps in reducing complexity and improving developer productivity.
2. **Framework Support**: Many modern web development frameworks are built around the MVC pattern, providing tools and conventions that simplify development.
3. **Best Practices**: MVC enforces best practices in application development, such as separation of concerns, modularity, and code reuse.
4. **Community and Resources**: The widespread use of MVC means there is a large community and plenty of resources (tutorials, libraries, tools) available, aiding learning and troubleshooting.

### Conclusion

The MVC architecture is crucial for building well-structured, maintainable, and scalable web applications. Its clear separation of concerns, reusability, and support for parallel development make it a preferred choice for many developers and organizations. Despite its initial complexity and learning curve, the long-term benefits of using MVC in terms of maintainability, scalability, and ease of development make it a significant architectural pattern in the industry.


## MVC Architecture in Express (Project code with explanation)

Sure! Let's structure the Express.js application with separate folders for models, views, and controllers, and use EJS as the templating engine.

### Project Structure

```
my-express-app/
├── controllers/
│   └── articleController.js
├── models/
│   └── article.js
├── routes/
│   └── articles.js
├── views/
│   └── articles/
│       ├── index.ejs
│       └── show.ejs
├── app.js
├── package.json
└── package-lock.json
```

### Step-by-Step Implementation

1. **Initialize the Project**

```sh
mkdir my-express-app
cd my-express-app
npm init -y
npm install express mongoose ejs
```

2. **Create the Model**

```javascript
// models/article.js
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  publishedDate: { type: Date, default: Date.now }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
```

3. **Create the Controller**

```javascript
// controllers/articleController.js
const Article = require('../models/article');

exports.getArticleList = async (req, res) => {
  try {
    const articles = await Article.find();
    res.render('articles/index', { articles });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getArticleDetail = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article == null) {
      return res.status(404).json({ message: 'Cannot find article' });
    }
    res.render('articles/show', { article });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createArticle = async (req, res) => {
  const article = new Article({
    title: req.body.title,
    content: req.body.content
  });

  try {
    const newArticle = await article.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article == null) {
      return res.status(404).json({ message: 'Cannot find article' });
    }

    if (req.body.title != null) {
      article.title = req.body.title;
    }
    if (req.body.content != null) {
      article.content = req.body.content;
    }

    const updatedArticle = await article.save();
    res.json(updatedArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article == null) {
      return res.status(404).json({ message: 'Cannot find article' });
    }

    await article.remove();
    res.json({ message: 'Deleted article' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
```

4. **Create the Views**

**index.ejs:**

```html
<!-- views/articles/index.ejs -->
<!DOCTYPE html>
<html>
<head>
  <title>Articles</title>
</head>
<body>
  <h1>Articles</h1>
  <ul>
    <% articles.forEach(article => { %>
      <li>
        <a href="/articles/<%= article._id %>"><%= article.title %></a>
      </li>
    <% }) %>
  </ul>
</body>
</html>
```

**show.ejs:**

```html
<!-- views/articles/show.ejs -->
<!DOCTYPE html>
<html>
<head>
  <title><%= article.title %></title>
</head>
<body>
  <h1><%= article.title %></h1>
  <p><%= article.content %></p>
  <a href="/articles">Back to Articles</a>
</body>
</html>
```

5. **Create the Routes**

```javascript
// routes/articles.js
const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.get('/', articleController.getArticleList);
router.get('/:id', articleController.getArticleDetail);
router.post('/', articleController.createArticle);
router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

module.exports = router;
```

6. **Setup the Main Application File**

```javascript
// app.js
const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/mvc_express_app', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/articles', articleRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### Summary

1. **Models**: Located in the `models` folder, defining the data structure and database interactions.
2. **Controllers**: Located in the `controllers` folder, handling the business logic and interacting with models.
3. **Views**: Located in the `views` folder, rendering the data using EJS templates.
4. **Routes**: Located in the `routes` folder, defining the application endpoints and mapping them to controller actions.

This setup ensures a clean separation of concerns, making the codebase more maintainable and scalable.


## Explanation of MVC architecture in above Express App


Certainly! Let's break down each part of the MVC architecture theoretically using the provided Express.js example:

### Model

**The Model represents the data layer of the application.**

- **Purpose**: To define the data structure and manage the data logic, including interactions with the database.
- **Components**: Typically consists of classes or schemas that define the properties of the data and methods to interact with the database.
- **Example**:
  ```javascript
  // models/article.js
  const mongoose = require('mongoose');

  const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    publishedDate: { type: Date, default: Date.now }
  });

  const Article = mongoose.model('Article', articleSchema);

  module.exports = Article;
  ```

In this example, `article.js` defines a schema for an article, specifying its properties and data types. It uses Mongoose to interact with a MongoDB database.

### View

**The View represents the presentation layer of the application.**

- **Purpose**: To present the data to the user in a user-friendly format. It renders the data provided by the Controller into HTML, JSON, or other formats suitable for the client.
- **Components**: Templates that define how the data should be displayed. In this example, we use EJS (Embedded JavaScript) as the templating engine.
- **Example**:

  **index.ejs**:
  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Articles</title>
  </head>
  <body>
    <h1>Articles</h1>
    <ul>
      <% articles.forEach(article => { %>
        <li>
          <a href="/articles/<%= article._id %>"><%= article.title %></a>
        </li>
      <% }) %>
    </ul>
  </body>
  </html>
  ```

  **show.ejs**:
  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title><%= article.title %></title>
  </head>
  <body>
    <h1><%= article.title %></h1>
    <p><%= article.content %></p>
    <a href="/articles">Back to Articles</a>
  </body>
  </html>
  ```

In these examples, EJS templates (`index.ejs` and `show.ejs`) are used to render the list of articles and individual article details, respectively.

### Controller

**The Controller represents the logic layer of the application.**

- **Purpose**: To handle incoming requests from the client, interact with the Model to retrieve or manipulate data, and then pass the data to the View for presentation.
- **Components**: Functions or methods that correspond to different actions (e.g., fetching a list of articles, displaying a single article, creating a new article).
- **Example**:
  ```javascript
  // controllers/articleController.js
  const Article = require('../models/article');

  exports.getArticleList = async (req, res) => {
    try {
      const articles = await Article.find();
      res.render('articles/index', { articles });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  exports.getArticleDetail = async (req, res) => {
    try {
      const article = await Article.findById(req.params.id);
      if (article == null) {
        return res.status(404).json({ message: 'Cannot find article' });
      }
      res.render('articles/show', { article });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  exports.createArticle = async (req, res) => {
    const article = new Article({
      title: req.body.title,
      content: req.body.content
    });

    try {
      const newArticle = await article.save();
      res.status(201).json(newArticle);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  exports.updateArticle = async (req, res) => {
    try {
      const article = await Article.findById(req.params.id);
      if (article == null) {
        return res.status(404).json({ message: 'Cannot find article' });
      }

      if (req.body.title != null) {
        article.title = req.body.title;
      }
      if (req.body.content != null) {
        article.content = req.body.content;
      }

      const updatedArticle = await article.save();
      res.json(updatedArticle);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  exports.deleteArticle = async (req, res) => {
    try {
      const article = await Article.findById(req.params.id);
      if (article == null) {
        return res.status(404).json({ message: 'Cannot find article' });
      }

      await article.remove();
      res.json({ message: 'Deleted article' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  ```

In this example, `articleController.js` defines functions to handle different actions such as retrieving a list of articles (`getArticleList`), displaying a single article (`getArticleDetail`), creating an article (`createArticle`), updating an article (`updateArticle`), and deleting an article (`deleteArticle`).

### Routes

**Routes define the URL mappings to the controller actions.**

- **Purpose**: To map incoming requests to the appropriate controller actions based on the URL and HTTP method.
- **Components**: Route definitions that specify which controller function should handle a particular endpoint.
- **Example**:
  ```javascript
  // routes/articles.js
  const express = require('express');
  const router = express.Router();
  const articleController = require('../controllers/articleController');

  router.get('/', articleController.getArticleList);
  router.get('/:id', articleController.getArticleDetail);
  router.post('/', articleController.createArticle);
  router.put('/:id', articleController.updateArticle);
  router.delete('/:id', articleController.deleteArticle);

  module.exports = router;
  ```

In this example, `articles.js` defines the routes for the articles. Each route maps an HTTP method and URL pattern to a corresponding controller function.

### Main Application File

**The main application file sets up the Express application.**

- **Purpose**: To initialize the Express application, configure middleware, and start the server.
- **Components**: Application setup, middleware configuration, route definitions, and server startup.
- **Example**:
  ```javascript
  // app.js
  const express = require('express');
  const mongoose = require('mongoose');
  const articleRouter = require('./routes/articles');

  const app = express();
  const PORT = 3000;

  mongoose.connect('mongodb://localhost:27017/mvc_example', { useNewUrlParser: true, useUnifiedTopology: true });

  app.set('view engine', 'ejs');
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/articles', articleRouter);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  ```

In this example, `app.js` initializes the Express application, connects to the MongoDB database using Mongoose, sets EJS as the view engine, configures middleware for JSON and URL-encoded request bodies, defines the routes, and starts the server.

### Summary

- **Model**: Manages the data and database interactions.
- **View**: Renders the data into user-friendly formats (HTML, JSON, etc.).
- **Controller**: Handles the business logic, processes incoming requests, and interacts with the Model.
- **Routes**: Define the mappings between URLs and controller actions.
- **Main Application File**: Sets up the application, configures middleware, and starts the server.

By separating these concerns, the MVC architecture helps to organize code, making it easier to maintain, test, and extend.


## Bonus: Controllers can be divided into controller + service

Certainly! Let's refactor the existing controller into two separate layers: one for pure controller logic and another for business logic. We'll create a service layer to handle the business logic.

### Directory Structure

```
.
├── app.js
├── controllers
│   └── articleController.js
├── models
│   └── article.js
├── routes
│   └── articles.js
├── services
│   └── articleService.js
└── views
    ├── articles
    │   ├── index.ejs
    │   └── show.ejs
```

### Service Layer

First, let's create the `articleService.js` file in the `services` directory to handle the business logic.

**services/articleService.js**:

```javascript
const Article = require('../models/article');

const getAllArticles = async () => {
  return await Article.find();
};

const getArticleById = async (id) => {
  return await Article.findById(id);
};

const createArticle = async (articleData) => {
  const article = new Article(articleData);
  return await article.save();
};

const updateArticle = async (id, articleData) => {
  const article = await Article.findById(id);
  if (!article) {
    throw new Error('Article not found');
  }
  Object.assign(article, articleData);
  return await article.save();
};

const deleteArticle = async (id) => {
  const article = await Article.findById(id);
  if (!article) {
    throw new Error('Article not found');
  }
  return await article.remove();
};

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
```

### Controller Layer

Next, let's modify the `articleController.js` file in the `controllers` directory to handle the HTTP requests and responses.

**controllers/articleController.js**:

```javascript
const articleService = require('../services/articleService');

exports.getArticleList = async (req, res) => {
  try {
    const articles = await articleService.getAllArticles();
    res.render('articles/index', { articles });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getArticleDetail = async (req, res) => {
  try {
    const article = await articleService.getArticleById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Cannot find article' });
    }
    res.render('articles/show', { article });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createArticle = async (req, res) => {
  try {
    const newArticle = await articleService.createArticle({
      title: req.body.title,
      content: req.body.content,
    });
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const updatedArticle = await articleService.updateArticle(req.params.id, {
      title: req.body.title,
      content: req.body.content,
    });
    res.json(updatedArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    await articleService.deleteArticle(req.params.id);
    res.json({ message: 'Deleted article' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
```

### Routes

The routes remain the same, as they already map HTTP methods and URLs to the appropriate controller functions.

**routes/articles.js**:

```javascript
const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.get('/', articleController.getArticleList);
router.get('/:id', articleController.getArticleDetail);
router.post('/', articleController.createArticle);
router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

module.exports = router;
```

### Summary

- **Service Layer (`articleService.js`)**: Contains business logic and interacts with the database.
- **Controller Layer (`articleController.js`)**: Handles HTTP requests, responses, and calls the service layer for business logic.
- **Routes (`articles.js`)**: Maps URLs to controller functions.

This separation of concerns ensures that the controller remains thin and focused on handling HTTP specifics, while the service layer encapsulates the business logic, making the application more maintainable and testable.

-----