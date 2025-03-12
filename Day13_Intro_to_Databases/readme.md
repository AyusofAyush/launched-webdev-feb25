## 📚 Introduction to Databases

### What is a Database?

A **database** is a structured collection of data organized to efficiently store, retrieve, modify, and manage information electronically.

**Example:** A student records database storing student names, courses, grades, and contact information.

---

## 📖 Important Database Terminologies & Jargon

- **Database Management System (DBMS):** Software to manage databases (e.g., MySQL, MongoDB).
- **Schema:** The structure defining tables, fields, and data relationships in a database.
- **Table:** Structured data storage composed of rows and columns in relational databases.
- **Document:** Semi-structured data storage format in NoSQL databases (e.g., JSON, XML).
- **Primary Key:** A unique identifier for database rows.
- **Foreign Key:** A key referencing a primary key from another table to create relationships.
- **Index:** A structure that improves the speed of data retrieval operations.
- **ACID properties:** Atomicity, Consistency, Isolation, Durability—principles ensuring reliable transactions.
- **Normalization:** Organizing database tables to reduce redundancy.
- **Denormalization:** Intentionally adding redundancy for performance.
- **Shard:** A horizontal partition of data to distribute across multiple servers.
- **Replication:** Duplicating data across multiple nodes for redundancy and availability.
- **Consistency:** Ensuring data is uniform across multiple database copies.
- **Scalability:** Database's ability to handle growth and manage more data efficiently.
- **Transactions:** A logical unit of work that must either complete entirely or not at all.

---

## 📌 Relational vs. Non-Relational Databases

### Relational Databases (SQL)

Store structured data in tables defined by strict schemas, suited for complex transactions and queries involving multiple relationships.

**Example:** Employees database:

| EmployeeID | Name       | Department | Salary |
| ---------- | ---------- | ---------- | ------ |
| 101        | John Doe   | Marketing  | 50000  |
| 102        | Jane Smith | Sales      | 60000  |

### Non-Relational Databases (NoSQL)

Flexible databases without strict schema, ideal for dynamic, scalable data storage.

**Example:** Document-based user profile:

```json
{
  "user_id": "u123",
  "name": "Alice",
  "skills": ["JavaScript", "Python", "Databases"],
  "education": {
    "degree": "BSc Computer Science",
    "year": 2020
  }
}
```

---

## 🔍 SQL vs NoSQL Databases

| Feature        | SQL Database                    | NoSQL Database                     |
| -------------- | ------------------------------- | ---------------------------------- |
| Schema         | Fixed, predefined               | Dynamic, flexible                  |
| Scalability    | Vertical scaling                | Horizontal scaling                 |
| Data Structure | Tables and relations            | Documents, graphs, key-value pairs |
| Data Integrity | ACID transactions               | BASE consistency                   |
| Complexity     | Complex queries & joins         | Simple, efficient querying         |
| Best for       | Structured data & relationships | Large, scalable, unstructured data |

---

## 📦 Types of NoSQL Databases

### Document-based Databases

Store semi-structured data (JSON/XML documents), ideal for dynamic schema needs.

- **Example:** MongoDB for storing user profiles.

### Key-Value Stores

Simple storage model mapping keys to values, ideal for caching and session management.

- **Example:** Redis for session caching.

### Column-family Stores

Store data in wide-column format, suitable for large-scale applications and analytics.

- **Example:** Apache Cassandra for scalable analytics.

### Graph Databases

Use nodes and relationships to represent interconnected data, perfect for social networks.

- **Example:** Neo4j for social networking data.

---

## 🚀 Mini Project: Blogging Application

**SQL Database (PostgreSQL):**

- Tables: Authors, Posts, Comments
- Relationships: Primary and foreign keys to maintain referential integrity.

**SQL Query Example:** Fetch all posts by a specific author.

```sql
SELECT * FROM Posts WHERE AuthorID = 123;
```

**NoSQL Database (MongoDB):**

- Collections: Posts with embedded Comments

**MongoDB Query Example:** Fetch recent comments from posts.

```javascript
db.posts.find({}, { comments: { $slice: -5 } });
```

---

## 🧠 Advice

- Clearly identify your data storage needs before choosing a database type.
- Use relational databases for structured, stable schema needs.
- Use NoSQL for flexible, rapidly changing data scenarios.

---

## 📖 Additional Resources

- **SQL Tutorials:** [w3schools SQL](https://www.w3schools.com/sql/)
- **MongoDB Guides:** [MongoDB University](https://university.mongodb.com/)
- **Database Fundamentals:** [GeeksforGeeks DBMS](https://www.geeksforgeeks.org/dbms/)

---

## 📌 Appendix: Examples of Databases

**SQL Databases:**

1. MySQL
2. PostgreSQL
3. Oracle DB
4. Microsoft SQL Server
5. SQLite

**NoSQL Databases:** 6. MongoDB (Document) 7. Redis (Key-Value) 8. Apache Cassandra (Column-family) 9. Neo4j (Graph) 10. CouchDB (Document) 11. Amazon DynamoDB (Key-Value & Document) 12. Google Cloud Firestore (Document) 13. Apache HBase (Column-family) 14. Riak (Key-Value) 15. OrientDB (Multi-model, Graph & Document)

---

## Interview Questions and Answers

Here are **25 interview-level FAQs** on **Databases, SQL, and NoSQL**, covering both fundamental and advanced topics:

---

### **📌 Basic Questions**

1️⃣ **What is a database, and why do we use it?**  
 ✅ A database is an organized collection of data that allows for efficient storage, retrieval, modification, and deletion of information. It is used to store structured or unstructured data in applications ranging from websites to enterprise software.

2️⃣ **What is the difference between SQL and NoSQL databases?**  
 ✅ SQL databases are relational, structured, and use a predefined schema, while NoSQL databases are non-relational, flexible, and better suited for large-scale, unstructured, or hierarchical data.

3️⃣ **What is a schema in a database?**  
 ✅ A schema defines the structure of a database, including tables, fields, relationships, constraints, and data types.

4️⃣ **What is ACID compliance in databases?**  
 ✅ ACID stands for **Atomicity, Consistency, Isolation, Durability**, ensuring reliable transactions in databases.

5️⃣ **What are the types of relationships in an SQL database?**  
 ✅ One-to-One, One-to-Many, and Many-to-Many.

6️⃣ **What is normalization, and why is it used?**  
 ✅ Normalization is the process of organizing data to reduce redundancy and improve efficiency. It ensures data integrity and avoids anomalies.

7️⃣ **What is denormalization, and when is it used?**  
 ✅ Denormalization is the process of introducing redundancy into a database to improve read performance. It is commonly used in NoSQL and data warehouses.

8️⃣ **What are primary and foreign keys in a relational database?**  
 ✅ A **primary key** uniquely identifies a row in a table. A **foreign key** references a primary key in another table to establish a relationship.

9️⃣ **What is indexing in SQL, and why is it important?**  
 ✅ Indexing improves query performance by allowing faster data retrieval, similar to an index in a book.

🔟 **What is a JOIN in SQL? List the different types of JOINs.**  
 ✅ A JOIN combines records from multiple tables based on a related column. Types:

- INNER JOIN
- LEFT JOIN (OUTER JOIN)
- RIGHT JOIN (OUTER JOIN)
- FULL OUTER JOIN
- CROSS JOIN
- SELF JOIN

---

### **📌 Intermediate-Level Questions**

1️⃣1️⃣ **What is the difference between DELETE, TRUNCATE, and DROP in SQL?**  
 ✅ DELETE removes specific records but maintains table structure, TRUNCATE removes all records but keeps the structure, and DROP removes the table completely.

1️⃣2️⃣ **What are transactions in a database?**  
 ✅ A transaction is a unit of work performed in a database that follows ACID properties.

1️⃣3️⃣ **What is the difference between OLTP and OLAP?**  
 ✅ OLTP (Online Transaction Processing) is optimized for CRUD operations, while OLAP (Online Analytical Processing) is optimized for data analysis and reporting.

1️⃣4️⃣ **What is the difference between a clustered and non-clustered index?**  
 ✅ A **clustered index** sorts and stores rows in a table based on key values, while a **non-clustered index** creates a separate structure to hold pointers to the original table.

1️⃣5️⃣ **Explain sharding in NoSQL databases.**  
 ✅ Sharding is a horizontal partitioning technique that distributes large datasets across multiple servers to enhance scalability.

1️⃣6️⃣ **What are BASE properties in NoSQL databases?**  
 ✅ BASE stands for:

- **Basically Available** (ensures availability of data)
- **Soft state** (state may change over time)
- **Eventual consistency** (data is eventually consistent)

1️⃣7️⃣ **What is the CAP theorem?**  
 ✅ The **CAP theorem** states that a distributed database can provide only two of the following three guarantees:

- **Consistency**
- **Availability**
- **Partition Tolerance**

1️⃣8️⃣ **What is the difference between horizontal and vertical scaling?**  
 ✅ **Horizontal scaling** (sharding) adds more machines to distribute load, while **vertical scaling** increases the power (CPU, RAM) of a single server.

1️⃣9️⃣ **What is the difference between MongoDB and PostgreSQL?**  
 ✅ MongoDB is a NoSQL document-based database, while PostgreSQL is a powerful relational SQL database with ACID compliance.

2️⃣0️⃣ **How do NoSQL databases handle relationships without foreign keys?**  
 ✅ NoSQL databases use embedded documents or references instead of foreign keys. For example, in MongoDB, we can nest objects within documents.

---

### **📌 Advanced-Level Questions**

2️⃣1️⃣ **What is eventual consistency in NoSQL?**  
 ✅ Eventual consistency means that while immediate consistency is not guaranteed, the database will eventually reach a consistent state across nodes.

2️⃣2️⃣ **Explain the differences between Graph, Document, Key-Value, and Wide-Column databases in NoSQL.**  
 ✅

- **Graph Databases** (Neo4j): Best for social networks, fraud detection.
- **Document Databases** (MongoDB): Best for flexible, hierarchical data storage.
- **Key-Value Stores** (Redis, DynamoDB): Ideal for caching and fast lookups.
- **Wide-Column Stores** (Cassandra, HBase): Used for analytics and big data.

2️⃣3️⃣ **What is a materialized view in SQL?**  
 ✅ A materialized view stores query results physically for faster retrieval, unlike a normal view that generates results dynamically.

2️⃣4️⃣ **How do Redis and MySQL differ in performance?**  
 ✅ Redis is an in-memory key-value store, making it much faster than MySQL for caching but unsuitable for complex transactions.

2️⃣5️⃣ **How would you decide between using a relational vs. non-relational database in a large-scale application?**  
 ✅

- Use **SQL** when dealing with structured, transactional data (banking, e-commerce).
- Use **NoSQL** when dealing with large-scale, flexible data (social media, IoT, real-time analytics).

---

### **🎯 Thoughts**

These **25 questions** cover **database fundamentals, SQL, NoSQL, indexing, transactions, scaling, and real-world applications.** Preparing answers for these will help in **technical interviews for backend development, database engineering, and full-stack roles.** 🚀

Happy Learning! 🚀
