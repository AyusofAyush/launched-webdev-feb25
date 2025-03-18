# Connecting a Web Application to a Database connections using server-side languages Performing CRUD operations

## 1. **What is a Web Application?**

A web application is a software program that runs on a web server and is accessed through a web browser. It typically consists of a frontend (user interface), backend (server-side logic), and database (data storage). Web applications enable user interactions and functionalities, like submitting forms, retrieving data, and performing transactions.

- **Frontend**: What users interact with (HTML, CSS, JavaScript).
- **Backend**: Manages business logic, server-side operations, and communicates with the database.
- **Database**: Stores data for the web application, such as user information, product details, etc.

**Examples**: E-commerce sites (Amazon), social media platforms (Facebook), online banking portals, etc.

### 2. **What is a Web Server?**

A web server is a software or hardware system that hosts web applications and delivers web content, such as HTML, CSS, and JavaScript, to users. It handles HTTP requests from clients (browsers) and responds with the appropriate resources, like web pages, images, or data.

- **Functions of a Web Server**:

  - Serve static files like HTML, CSS, and JavaScript.
  - Process dynamic content (through scripts or server-side languages).
  - Handle requests, responses, and routing.
  - Manage session, state, and caching.

- **Common Web Servers**:
  - **Apache**: Open-source, widely used for hosting websites.
  - **Nginx**: Known for performance and scalability, often used as a reverse proxy.
  - **Microsoft IIS**: Proprietary web server for Windows environments.

### 3. **What is a Database?**

A database is a structured collection of data that is stored and accessed electronically. It provides a way to organize, manage, and retrieve data efficiently. Databases can be categorized into SQL (relational) and NoSQL (non-relational) based on their structure and data handling mechanisms.

- **Functions of a Database**:
  - Store and manage data.
  - Provide query mechanisms to access and manipulate data.
  - Ensure data integrity, security, and consistency.
  - Handle concurrency, transactions, and backup mechanisms.

### 4. **What are Database Connections?**

A database connection is the communication link between a web application and a database. It allows the application to query the database, insert, update, and delete data. This connection can be established using a database driver or library (e.g., MySQL Connector, Mongoose for MongoDB).

- **Connection Pooling**: A technique to maintain a pool of database connections to reuse and manage them efficiently, reducing the overhead of opening and closing connections repeatedly.

### 5. **Types of Databases**

Databases can be broadly classified into:

1. **Relational Databases (SQL)**:

   - Structured using tables, rows, and columns.
   - Use Structured Query Language (SQL) to query and manipulate data.
   - Ensure ACID (Atomicity, Consistency, Isolation, Durability) properties.
   - Examples: MySQL, PostgreSQL, Oracle, SQL Server.

2. **Non-Relational Databases (NoSQL)**:
   - Do not follow a table-based structure; store data in various formats (document, key-value, columnar, graph).
   - Flexible schema design, suitable for unstructured or semi-structured data.
   - Scalable and optimized for specific use cases.
   - Examples: MongoDB, Cassandra, Redis, Neo4j.

### 6. **SQL vs. NoSQL Databases**

| Criteria           | SQL Databases                                    | NoSQL Databases                                      |
| ------------------ | ------------------------------------------------ | ---------------------------------------------------- |
| **Structure**      | Table-based, rows, and columns                   | Document, key-value, column, or graph-based          |
| **Schema**         | Fixed schema, predefined structure               | Dynamic schema, flexible structure                   |
| **Data Integrity** | Enforces strong consistency and constraints      | Provides eventual consistency, relaxed constraints   |
| **Query Language** | SQL (Structured Query Language)                  | Varies by database (e.g., MongoDB uses JSON queries) |
| **Scalability**    | Vertical scaling (increasing hardware resources) | Horizontal scaling (adding more servers)             |
| **Use Cases**      | Suitable for complex queries and transactions    | Best for handling large volumes of unstructured data |
| **Examples**       | MySQL, PostgreSQL, Oracle, SQL Server            | MongoDB, Cassandra, Redis, Neo4j                     |

### 7. **When to Use SQL and NoSQL Databases**

- **Use SQL Databases When**:

  - Data integrity and consistency are a priority.
  - Your data has clear relationships and constraints (e.g., foreign keys).
  - You need complex queries and transaction support (e.g., banking systems).
  - The structure of your data does not change frequently.

- **Use NoSQL Databases When**:
  - You need to store large volumes of unstructured or semi-structured data (e.g., logs, user activity).
  - You want to scale horizontally to handle high throughput and availability.
  - Your application demands flexibility in schema design or rapid schema evolution.
  - You need to handle different types of data, such as documents, graphs, or key-value pairs (e.g., social media, content management systems).

### 8. **Server-Side Languages for Performing CRUD Operations**

CRUD (Create, Read, Update, Delete) operations are fundamental to interacting with a database. Various server-side languages can be used to perform these operations:

1. **JavaScript (Node.js)**:

   - Libraries: `express`, `mongoose` (for MongoDB), `pg` (for PostgreSQL).
   - Frameworks: Express.js, NestJS.
   - Example:

     ```javascript
     // CRUD operation using MongoDB and Mongoose in Node.js
     const mongoose = require("mongoose");
     const User = mongoose.model("User", new mongoose.Schema({ name: String }));

     // Create
     const newUser = new User({ name: "John Doe" });
     await newUser.save();

     // Read
     const users = await User.find();

     // Update
     await User.updateOne({ _id: userId }, { $set: { name: "Jane Doe" } });

     // Delete
     await User.deleteOne({ _id: userId });
     ```

2. **Python**:

   - Libraries: `SQLAlchemy` (SQL), `Django ORM`, `PyMongo`.
   - Frameworks: Django, Flask, FastAPI.
   - Example:

     ```python
     from sqlalchemy import create_engine, Column, String, Integer, Base
     from sqlalchemy.orm import sessionmaker

     # Create Database and Table
     engine = create_engine('sqlite:///users.db')
     Session = sessionmaker(bind=engine)
     session = Session()
     Base.metadata.create_all(engine)

     # CRUD Operations
     new_user = User(name='John Doe')
     session.add(new_user)  # Create
     session.commit()

     users = session.query(User).all()  # Read

     user = session.query(User).filter_by(name='John Doe').first()
     user.name = 'Jane Doe'  # Update
     session.commit()

     session.delete(user)  # Delete
     session.commit()
     ```

3. **Java**:

   - Libraries: Hibernate (ORM for SQL databases), Spring Data JPA.
   - Frameworks: Spring, Struts.
   - Example:

     ```java
     // CRUD operation using Spring Data JPA
     @Repository
     public interface UserRepository extends JpaRepository<User, Long> {}

     @Service
     public class UserService {
         @Autowired
         private UserRepository userRepository;

         public void createUser(User user) {
             userRepository.save(user);
         }

         public List<User> getAllUsers() {
             return userRepository.findAll();
         }

         public void updateUser(Long id, String name) {
             User user = userRepository.findById(id).orElseThrow();
             user.setName(name);
             userRepository.save(user);
         }

         public void deleteUser(Long id) {
             userRepository.deleteById(id);
         }
     }
     ```

4. **PHP**:

   - Libraries: PDO (PHP Data Objects).
   - Frameworks: Laravel, CodeIgniter.
   - Example:

     ```php
     // CRUD operation in PHP with MySQL
     $pdo = new PDO("mysql:host=localhost;dbname=testdb", "username", "password");

     // Create
     $stmt = $pdo->prepare("INSERT INTO users (name) VALUES (:name)");
     $stmt->execute([':name' => 'John Doe']);

     // Read
     $stmt = $pdo->query("SELECT * FROM users");
     $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

     // Update
     $stmt = $pdo->prepare("UPDATE users SET name = :name WHERE id = :id");
     $stmt->execute([':name' => 'Jane Doe', ':id' => $userId]);

     // Delete
     $stmt = $pdo->prepare("DELETE FROM users WHERE id = :id");
     $stmt->execute([':id' => $userId]);
     ```

Each server-side language has its unique capabilities, and the choice often depends on project requirements, developer expertise, and ecosystem support.

---

## Connecting a Web Application to a Database

## What is CRUD APIs

CRUD APIs (Create, Read, Update, Delete Application Programming Interfaces) are a type of API designed to facilitate the basic operations of persistent storage in a database. These operations are fundamental to interacting with data in most applications. Here's a breakdown of each component:

1. **Create**:

   - This operation allows you to add new data to the database.
   - In RESTful APIs, this typically corresponds to the HTTP POST method.
   - Example: Creating a new user record.

2. **Read**:

   - This operation allows you to retrieve data from the database.
   - In RESTful APIs, this typically corresponds to the HTTP GET method.
   - Example: Fetching user details.

3. **Update**:

   - This operation allows you to modify existing data in the database.
   - In RESTful APIs, this typically corresponds to the HTTP PUT or PATCH method.
   - Example: Updating user information.

4. **Delete**:
   - This operation allows you to remove data from the database.
   - In RESTful APIs, this typically corresponds to the HTTP DELETE method.
   - Example: Deleting a user record.

### Example CRUD Operations in a RESTful API:

Let's say you have an API for managing users.

- **Create**:

  - Endpoint: `POST /users`
  - Request Body: `{ "name": "John Doe", "email": "john@example.com" }`
  - Response: `201 Created`

- **Read**:

  - Endpoint: `GET /users`
  - Response: `200 OK`, with a list of users.

  - Endpoint: `GET /users/{id}`
  - Response: `200 OK`, with the details of a specific user.

- **Update**:

  - Endpoint: `PUT /users/{id}`
  - Request Body: `{ "name": "John Doe", "email": "john.doe@example.com" }`
  - Response: `200 OK`

- **Delete**:
  - Endpoint: `DELETE /users/{id}`
  - Response: `204 No Content`

### CRUD APIs in Practice

CRUD operations are integral to web and mobile applications where user data needs to be managed. For instance:

- **E-commerce applications** to manage products, orders, and users.
- **Social media platforms** to handle posts, comments, and user profiles.
- **Content management systems** to deal with articles, pages, and multimedia assets.

### Benefits of CRUD APIs

- **Simplicity**: Provides a straightforward way to interact with data.
- **Consistency**: Standardized operations across different applications.
- **Scalability**: Easily extendable to more complex operations and services.

Understanding CRUD operations is fundamental for web development and helps in building robust and maintainable applications.

## Prerequisite Installtion

- Install MongoDB community Edition
- Install NodeJS (LTS version)
- Install VS Code (if not using)
- Install Postman (for API testing)
- Install MongoDB Compass (DB Application)
- Setting up and Getting started

## How to make CRUD APIs ?

```
Lets create a Blog Application - CRUD APIs
```
