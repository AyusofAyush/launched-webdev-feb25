# SQL Basics

## Setting Up a Database Server - Installing and configuring a database server (e.g., MySQL, PostgreSQL)

### **1. Introduction**

Setting up a database server is an essential step in web development. A database server is a dedicated system used for storing, managing, and retrieving data efficiently. Two of the most popular relational database management systems (RDBMS) are **MySQL** and **PostgreSQL**.

This guide provides step-by-step instructions for installing and configuring MySQL and PostgreSQL on **Windows**, **macOS**, and **Linux**.

---

### **2. General Prerequisites**

Before installing a database server, ensure that your system meets the following prerequisites:

#### **System Requirements:**

- A stable internet connection for downloading the database software.
- Administrative or root access to install and configure services.
- A command-line interface (CLI) such as **Command Prompt (Windows), Terminal (Mac/Linux), or PowerShell**.

#### **Software Dependencies:**

- Ensure **OpenSSL**, **GCC**, and other required libraries are installed (mostly for Linux/macOS).
- Update system packages using the respective package manager:
  - **Windows:** Ensure PowerShell is up-to-date.
  - **macOS:** Update Homebrew (`brew update`)
  - **Linux:** Run `sudo apt update` (Debian-based) or `sudo yum update` (RHEL-based).

---

### **3. Installing and Configuring MySQL**

### **3.1 Installing MySQL on Windows**

1. Download MySQL Installer from the official website: [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/)
2. Run the installer and select **MySQL Server** and required components.
3. Choose the setup type (**Developer Default** is recommended for fresh installs).
4. Configure MySQL Server:
   - Select **Standalone MySQL Server**.
   - Set **authentication mode** (use **Strong Password Encryption** for better security).
   - Set the **root password**.
   - Choose the **default port (3306)** or change it if required.
5. Start the MySQL service and configure it to run at startup.
6. Verify installation by running `mysql -u root -p` in Command Prompt.

### **3.2 Installing MySQL on macOS**

1. Install MySQL using Homebrew:
   ```sh
   brew install mysql
   ```
2. Start MySQL service:
   ```sh
   brew services start mysql
   ```
3. Set the root password:
   ```sh
   mysql_secure_installation
   ```
4. Verify installation:
   ```sh
   mysql -u root -p
   ```

### **3.3 Installing MySQL on Linux (Ubuntu/Debian)**

1. Update package lists and install MySQL Server:
   ```sh
   sudo apt update
   sudo apt install mysql-server
   ```
2. Secure MySQL installation:
   ```sh
   sudo mysql_secure_installation
   ```
3. Start MySQL service:
   ```sh
   sudo systemctl start mysql
   ```
4. Enable MySQL to start on boot:
   ```sh
   sudo systemctl enable mysql
   ```
5. Verify installation:
   ```sh
   mysql -u root -p
   ```

---

## **4. Installing and Configuring PostgreSQL**

### **4.1 Installing PostgreSQL on Windows**

1. Download PostgreSQL from: [https://www.postgresql.org/download/windows/](https://www.postgresql.org/download/windows/)
2. Run the installer and select the necessary components.
3. Set up a PostgreSQL superuser (default is **postgres**).
4. Configure the default port (**5432** by default).
5. Choose the installation directory and start the installation.
6. Access PostgreSQL using:
   ```sh
   psql -U postgres
   ```

### **4.2 Installing PostgreSQL on macOS**

1. Install PostgreSQL via Homebrew:
   ```sh
   brew install postgresql
   ```
2. Start the PostgreSQL service:
   ```sh
   brew services start postgresql
   ```
3. Create a new PostgreSQL user (optional):
   ```sh
   createuser -s postgres
   ```
4. Verify installation:
   ```sh
   psql postgres
   ```

### **4.3 Installing PostgreSQL on Linux (Ubuntu/Debian)**

1. Update package lists and install PostgreSQL:
   ```sh
   sudo apt update
   sudo apt install postgresql postgresql-contrib
   ```
2. Start PostgreSQL service:
   ```sh
   sudo systemctl start postgresql
   ```
3. Enable PostgreSQL to start on boot:
   ```sh
   sudo systemctl enable postgresql
   ```
4. Access PostgreSQL prompt:
   ```sh
   sudo -u postgres psql
   ```

---

## **5. Post-Installation Configuration**

### **5.1 Configuring MySQL**

- Change the default root password:
  ```sh
  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'NewPassword';
  ```
- Create a new database:
  ```sh
  CREATE DATABASE my_database;
  ```
- Create a new user and grant privileges:
  ```sh
  CREATE USER 'myuser'@'localhost' IDENTIFIED BY 'mypassword';
  GRANT ALL PRIVILEGES ON my_database.* TO 'myuser'@'localhost';
  FLUSH PRIVILEGES;
  ```

### **5.2 Configuring PostgreSQL**

- Change the default password for the `postgres` user:
  ```sh
  ALTER USER postgres WITH PASSWORD 'NewPassword';
  ```
- Create a new database:
  ```sh
  CREATE DATABASE my_database;
  ```
- Create a new user and grant privileges:
  ```sh
  CREATE USER myuser WITH ENCRYPTED PASSWORD 'mypassword';
  GRANT ALL PRIVILEGES ON DATABASE my_database TO myuser;
  ```

---

## **6. Verifying and Managing the Database Server**

### **6.1 Checking MySQL Status:**

```sh
sudo systemctl status mysql  # Linux
brew services list           # macOS
```

### **6.2 Checking PostgreSQL Status:**

```sh
sudo systemctl status postgresql  # Linux
brew services list                # macOS
```

### **6.3 Starting/Stopping Services:**

- **MySQL:**
  ```sh
  sudo systemctl start mysql
  sudo systemctl stop mysql
  ```
- **PostgreSQL:**
  ```sh
  sudo systemctl start postgresql
  sudo systemctl stop postgresql
  ```

---

## What is SQL Database?

An SQL database is a type of database that uses Structured Query Language (SQL) for defining, manipulating, and querying data. These databases are typically relational databases, meaning they organize data into tables that can be linked based on defined relationships. Here's a deeper dive into what an SQL database entails:

#### Key Characteristics of SQL Databases:

1. **Relational Model**:

   - **Tables**: Data is stored in tables (also called relations). Each table consists of rows (records) and columns (attributes or fields).
   - **Rows**: Each row represents a single record with a unique identifier known as the primary key.
   - **Columns**: Each column represents an attribute of the record, such as name, age, or address.

2. **SQL Language**:

   - SQL is used to perform various operations on the data stored in the database, including querying, updating, inserting, and deleting data.
   - SQL provides a standardized way to interact with the database, ensuring consistency and compatibility across different systems.

3. **Data Integrity**:

   - **Primary Keys**: Unique identifiers for each row in a table to ensure that each record can be uniquely identified.
   - **Foreign Keys**: References to primary keys in other tables, used to establish and enforce relationships between tables.
   - **Constraints**: Rules applied to table columns to ensure data integrity and accuracy, such as `NOT NULL`, `UNIQUE`, `CHECK`, and `FOREIGN KEY` constraints.

4. **ACID Properties**:
   - SQL databases adhere to ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring reliable transactions and data integrity.
   - **Atomicity**: Ensures that each transaction is treated as a single unit, which either completes in its entirety or not at all.
   - **Consistency**: Ensures that a transaction brings the database from one valid state to another, maintaining database rules.
   - **Isolation**: Ensures that concurrent transactions do not interfere with each other.
   - **Durability**: Ensures that once a transaction is committed, it remains so, even in the case of a system failure.

#### Common SQL Database Systems:

1. **MySQL**:

   - Widely used open-source relational database management system (RDBMS).
   - Popular for web applications and supported by many web hosting services.

2. **PostgreSQL**:

   - Open-source RDBMS known for its robustness, extensibility, and compliance with SQL standards.
   - Supports advanced data types and performance optimization features.

3. **Microsoft SQL Server**:

   - Proprietary RDBMS developed by Microsoft.
   - Known for its integration with Microsoft products and services, and enterprise-level features.

4. **Oracle Database**:

   - Highly robust and feature-rich RDBMS developed by Oracle Corporation.
   - Commonly used in large enterprises for complex applications requiring high performance and scalability.

5. **SQLite**:
   - Lightweight, file-based RDBMS that is embedded within applications.
   - Commonly used in mobile applications and small projects.

Example Usage:

Imagine a simple database for a school's student management system. It might have tables such as `Students`, `Courses`, and `Enrollments`:

- **Students Table**:

  ```sql
  CREATE TABLE Students (
      StudentID INT PRIMARY KEY,
      FirstName VARCHAR(50),
      LastName VARCHAR(50),
      DateOfBirth DATE
  );
  ```

- **Courses Table**:

  ```sql
  CREATE TABLE Courses (
      CourseID INT PRIMARY KEY,
      CourseName VARCHAR(100),
      Credits INT
  );
  ```

- **Enrollments Table**:

  ```sql
  CREATE TABLE Enrollments (
      EnrollmentID INT PRIMARY KEY,
      StudentID INT,
      CourseID INT,
      EnrollmentDate DATE,
      FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
      FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
  );
  ```

  Query Examples:

- **Insert a new student**:

  ```sql
  INSERT INTO Students (StudentID, FirstName, LastName, DateOfBirth)
  VALUES (1, 'John', 'Doe', '2000-01-01');
  ```

- **Retrieve all courses**:

  ```sql
  SELECT * FROM Courses;
  ```

- **Enroll a student in a course**:

  ```sql
  INSERT INTO Enrollments (EnrollmentID, StudentID, CourseID, EnrollmentDate)
  VALUES (1, 1, 101, '2023-09-01');
  ```

- **Find all students enrolled in a specific course**:
  ```sql
  SELECT Students.FirstName, Students.LastName
  FROM Students
  JOIN Enrollments ON Students.StudentID = Enrollments.StudentID
  WHERE Enrollments.CourseID = 101;
  ```

#### Benefits of SQL Databases:

- **Data Integrity**: Ensures accurate and reliable data through constraints and relationships.
- **Flexibility**: Supports complex queries and data manipulation operations.
- **Scalability**: Can handle large volumes of data and concurrent users.
- **Standardization**: Follows standardized SQL syntax, making it easier to learn and use across different systems.

SQL databases are foundational in many applications, providing a robust and efficient way to store, retrieve, and manage structured data.

### What is NoSQL Database ?

NoSQL databases are a category of database management systems designed to handle a wide variety of data models, including document, graph, key-value, and columnar formats. They are particularly suited for managing large volumes of unstructured, semi-structured, or structured data, offering flexibility, scalability, and performance advantages over traditional relational databases in certain use cases.

#### Key Characteristics of NoSQL Databases:

1. **Schema-less**:

   - Unlike relational databases, NoSQL databases do not require a predefined schema. This allows for more flexibility in storing different types of data and adapting to changes in data structure without downtime or schema migration.

2. **Horizontal Scalability**:

   - NoSQL databases are designed to scale out by distributing data across multiple servers. This horizontal scaling allows them to handle large volumes of data and high traffic loads efficiently.

3. **Variety of Data Models**:

   - **Document Store**: Stores data in JSON, BSON, or XML format. Each document is a self-contained unit, making it easy to store complex nested data structures.
     - Example: MongoDB
   - **Key-Value Store**: Data is stored as a collection of key-value pairs, where the key is a unique identifier, and the value is the data.
     - Example: Redis
   - **Column Store**: Stores data in columns rather than rows, making it efficient for read-heavy operations and analytical queries.
     - Example: Apache Cassandra
   - **Graph Database**: Stores data in nodes and edges, making it ideal for applications with complex relationships and interconnected data.
     - Example: Neo4j

4. **High Availability and Fault Tolerance**:
   - Many NoSQL databases are designed with built-in replication and distribution mechanisms, ensuring data availability and reliability even in the event of hardware failures.

#### Common NoSQL Databases and Use Cases:

1. **MongoDB**:

   - **Type**: Document Store
   - **Use Cases**: Content management systems, real-time analytics, IoT applications
   - **Example**: Storing user profiles and activity logs for a social media application.

2. **Redis**:

   - **Type**: Key-Value Store
   - **Use Cases**: Caching, session management, real-time analytics
   - **Example**: Storing user session data to enable fast access and improve application performance.

3. **Apache Cassandra**:

   - **Type**: Column Store
   - **Use Cases**: High write and read throughput applications, time-series data, recommendation engines
   - **Example**: Managing sensor data from an IoT network with high write and read demands.

4. **Neo4j**:
   - **Type**: Graph Database
   - **Use Cases**: Social networks, fraud detection, recommendation systems
   - **Example**: Representing and querying relationships in a social network to find friends of friends or suggest new connections.

#### Advantages of NoSQL Databases:

1. **Flexibility**:

   - Ability to handle a wide variety of data types and structures without requiring a fixed schema.
   - Easy to adapt to changing data models and requirements.

2. **Scalability**:

   - Designed to scale out by adding more servers, making it easier to manage large volumes of data and high-traffic applications.

3. **Performance**:

   - Optimized for specific use cases and data access patterns, providing high performance for read and write operations.

4. **High Availability**:
   - Built-in replication and distribution features ensure data availability and reliability, even in the face of hardware failures.

#### Example Use Case:

Suppose you are building a real-time recommendation system for an e-commerce platform. A NoSQL database like MongoDB or Apache Cassandra would be suitable due to the following reasons:

- **Schema-less Flexibility**: Product data can have varying attributes (e.g., electronics, clothing, books), and a schema-less database allows you to store these variations without predefined schema constraints.
- **Horizontal Scalability**: As the number of users and products grows, you can easily scale out by adding more servers to handle increased load.
- **Performance**: NoSQL databases can handle high write and read throughput, making them ideal for real-time recommendation queries and user interactions.

```javascript
// Example: Storing a product document in MongoDB
{
  "_id": "12345",
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 29.99,
  "attributes": {
    "brand": "TechBrand",
    "color": "Black",
    "wireless": true,
    "batteryLife": "12 months"
  },
  "reviews": [
    {
      "userId": "user1",
      "rating": 5,
      "comment": "Great mouse, very responsive!"
    },
    {
      "userId": "user2",
      "rating": 4,
      "comment": "Good value for the price."
    }
  ]
}
```

#### Conclusion:

NoSQL databases offer a powerful alternative to traditional relational databases, providing the flexibility, scalability, and performance needed for modern applications. They are particularly well-suited for handling large volumes of diverse data types, making them an essential tool for many developers and organizations.

### Difference Between SQL & NoSQL Databases

SQL and NoSQL databases are fundamentally different in terms of their design, data models, scalability, and use cases. Here's a detailed comparison of the two:

### SQL Databases:

**1. Data Model:**

- **Structured Data**: SQL databases use a structured data model, typically organized into tables with rows and columns.
- **Schema**: They require a predefined schema, meaning the structure of the data must be defined before data can be inserted. This schema enforces data integrity and relationships through constraints and data types.

**2. Scalability:**

- **Vertical Scaling**: SQL databases are generally scaled vertically by increasing the resources (CPU, RAM, SSD) on a single server.
- **Replication and Sharding**: While some SQL databases support sharding and replication, they are traditionally more challenging to scale out horizontally compared to NoSQL databases.

**3. Query Language:**

- **SQL (Structured Query Language)**: SQL databases use SQL for defining, querying, and manipulating data. SQL is a powerful and standardized language used for complex queries and transactions.
- **ACID Compliance**: SQL databases ensure ACID (Atomicity, Consistency, Isolation, Durability) properties, making them suitable for applications requiring reliable transactions and data integrity.

**4. Examples:**

- MySQL, PostgreSQL, Microsoft SQL Server, Oracle Database

**5. Use Cases:**

- **Relational Data**: Applications that require structured data with complex relationships, such as ERP systems, financial applications, and traditional business applications.
- **Transactions**: Systems that require multi-step transactions and strong data consistency, such as banking systems and e-commerce platforms.

### NoSQL Databases:

**1. Data Model:**

- **Flexible Data Model**: NoSQL databases support various data models, including document, key-value, column-family, and graph models. They can store unstructured, semi-structured, and structured data.
- **Schema-less**: NoSQL databases do not require a predefined schema. This allows for more flexibility in handling different data types and structures, and adapting to changes without schema migration.

**2. Scalability:**

- **Horizontal Scaling**: NoSQL databases are designed to scale out by distributing data across multiple servers. This makes it easier to handle large volumes of data and high traffic loads.
- **Built-in Distribution**: Many NoSQL databases have built-in mechanisms for data distribution, replication, and sharding, facilitating horizontal scaling.

**3. Query Language:**

- **Varied Query Languages**: NoSQL databases often have their own query languages or APIs. For example, MongoDB uses a JSON-like query language, while Cassandra uses CQL (Cassandra Query Language).
- **Eventual Consistency**: Many NoSQL databases follow eventual consistency models, which may not guarantee immediate consistency across all nodes, but provide higher availability and partition tolerance.

**4. Examples:**

- MongoDB (Document), Redis (Key-Value), Cassandra (Column-Family), Neo4j (Graph)

**5. Use Cases:**

- **Big Data**: Applications that need to handle large volumes of unstructured or semi-structured data, such as social media platforms, real-time analytics, and IoT applications.
- **Scalability and Flexibility**: Systems that require high scalability and flexibility in data models, such as content management systems, recommendation engines, and distributed data storage.

### Summary Table:

| Feature               | SQL Databases                               | NoSQL Databases                                      |
| --------------------- | ------------------------------------------- | ---------------------------------------------------- |
| **Data Model**        | Structured, table-based                     | Flexible, various models (document, key-value, etc.) |
| **Schema**            | Predefined schema required                  | Schema-less, flexible                                |
| **Scalability**       | Vertical (scale-up)                         | Horizontal (scale-out)                               |
| **Query Language**    | SQL (Structured Query Language)             | Varied query languages and APIs                      |
| **Consistency**       | Strong ACID compliance                      | Eventual consistency (in many NoSQL databases)       |
| **Examples**          | MySQL, PostgreSQL, SQL Server, Oracle       | MongoDB, Redis, Cassandra, Neo4j                     |
| **Typical Use Cases** | Transactional applications, relational data | Big data, real-time analytics, flexible data storage |

### Choosing Between SQL and NoSQL:

- **Choose SQL if**:

  - You need ACID compliance and strong consistency.
  - Your data is highly structured with complex relationships.
  - You require complex queries and transactions.

- **Choose NoSQL if**:
  - You need to handle large volumes of unstructured or semi-structured data.
  - You require high scalability and can tolerate eventual consistency.
  - Your application demands flexibility in data models and rapid schema evolution.

Each type of database has its strengths and is suited to different kinds of applications. The choice between SQL and NoSQL depends on the specific requirements of your project, including the nature of the data, scalability needs, and consistency requirements.

---

## More about SQL

SQL (Structured Query Language) is a standardized programming language used for managing and manipulating relational databases. It is particularly well-suited for handling structured data, where relationships between data entities are defined. Here's a basic overview to help you understand SQL:

### Key Concepts of SQL:

1. **Relational Databases**:

   - A relational database stores data in tables, which are collections of rows and columns. Each row represents a record, and each column represents an attribute of the record.
   - Tables can be linked using keys (primary keys and foreign keys), which help maintain the relationships between different tables.

2. **SQL Statements**:

   - **Data Definition Language (DDL)**: Used to define and manage database schema. Examples include:

     - `CREATE TABLE`: Creates a new table.
     - `ALTER TABLE`: Modifies an existing table.
     - `DROP TABLE`: Deletes a table.

   - **Data Manipulation Language (DML)**: Used for managing data within tables. Examples include:

     - `SELECT`: Retrieves data from one or more tables.
     - `INSERT`: Adds new records to a table.
     - `UPDATE`: Modifies existing records.
     - `DELETE`: Removes records from a table.

   - **Data Control Language (DCL)**: Used for managing access to data. Examples include:

     - `GRANT`: Gives a user access privileges to the database.
     - `REVOKE`: Removes access privileges.

   - **Transaction Control Language (TCL)**: Manages changes made by DML statements. Examples include:
     - `COMMIT`: Saves all changes made during the current transaction.
     - `ROLLBACK`: Undoes all changes made during the current transaction.
     - `SAVEPOINT`: Sets a point within a transaction to which you can later roll back.

### Basic SQL Queries:

1. **Selecting Data**:

   ```sql
   SELECT column1, column2
   FROM table_name
   WHERE condition;
   ```

2. **Inserting Data**:

   ```sql
   INSERT INTO table_name (column1, column2)
   VALUES (value1, value2);
   ```

3. **Updating Data**:

   ```sql
   UPDATE table_name
   SET column1 = value1, column2 = value2
   WHERE condition;
   ```

4. **Deleting Data**:
   ```sql
   DELETE FROM table_name
   WHERE condition;
   ```

### Example Use Case:

Suppose you have a database for a library. It includes a table `Books` with columns `BookID`, `Title`, `Author`, and `YearPublished`.

- To list all books:

  ```sql
  SELECT * FROM Books;
  ```

- To add a new book:

  ```sql
  INSERT INTO Books (BookID, Title, Author, YearPublished)
  VALUES (1, '1984', 'George Orwell', 1949);
  ```

- To update a book's information:

  ```sql
  UPDATE Books
  SET YearPublished = 1950
  WHERE Title = '1984';
  ```

- To delete a book from the table:
  ```sql
  DELETE FROM Books
  WHERE BookID = 1;
  ```

## What can SQL do ?

```
SQL can execute queries against a database
SQL can retrieve data from a database
SQL can insert records in a database
SQL can update records in a database
SQL can delete records from a database
SQL can create new databases
SQL can create new tables in a database
SQL can create stored procedures in a database
SQL can create views in a database
SQL can set permissions on tables, procedures, and views
```

## Some Most Important SQL Commands

```
SELECT - extracts data from a database
UPDATE - updates data in a database
DELETE - deletes data from a database
INSERT INTO - inserts new data into a database
CREATE DATABASE - creates a new database
ALTER DATABASE - modifies a database
CREATE TABLE - creates a new table
ALTER TABLE - modifies a table
DROP TABLE - deletes a table
CREATE INDEX - creates an index (search key)
DROP INDEX - deletes an index
```

## SQL Tutorial

- Select

```sql
SELECT * FROM Customers;
```

- Distinct

```sql
SELECT DISTINCT Country FROM Customers;
```

- Where

```sql
SELECT * FROM Customers
WHERE Country='Mexico';
```

- Order by

```sql
SELECT * FROM Customers
ORDER BY Country ASC, CustomerName DESC;
```

- And

```sql
SELECT *
FROM Customers
WHERE Country = 'Spain' AND CustomerName LIKE 'G%';
```

- Or

```sql
SELECT *
FROM Customers
WHERE Country = 'Germany' OR Country = 'Spain';
```

- Not

```sql
SELECT * FROM Customers
WHERE NOT Country = 'Spain';

SELECT * FROM Customers
WHERE CustomerName NOT LIKE 'A%';

SELECT * FROM Customers
WHERE CustomerID NOT BETWEEN 10 AND 60;

SELECT * FROM Customers
WHERE City NOT IN ('Paris', 'London');

SELECT * FROM Customers
WHERE NOT CustomerID > 50;
```

- Insert

```sql
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
```

- NULL

```sql
SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NULL; // = or <> it means equal

SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NOT NULL;
```

- Update

```sql
UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;
```

- Delete

```sql
DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';

DELETE FROM Customers; // delete all records

DROP TABLE Customers; // drop table
```

- Select Top

```sql
MySQL Syntax:

SELECT column_name(s)
FROM table_name
WHERE condition
LIMIT number;
```

- SQL Aggregate Functions

```sql
MIN() - returns the smallest value within the selected column
MAX() - returns the largest value within the selected column
COUNT() - returns the number of rows in a set
SUM() - returns the total sum of a numerical column
AVG() - returns the average value of a numerical column
```

- SQL Like

```sql
LIKE operator is used in a WHERE clause to search for a specified pattern in a column.

There are two wildcards often used in conjunction with the LIKE operator:

 The percent sign % represents zero, one, or multiple characters
 The underscore sign _ represents one, single character

SELECT * FROM Customers
WHERE CustomerName LIKE 'a%';

SELECT * FROM Customers
WHERE city LIKE 'L_nd__';

SELECT * FROM Customers
WHERE city LIKE '%L%';

SELECT * FROM Customers
WHERE CustomerName LIKE 'La%';

SELECT * FROM Customers
WHERE CustomerName LIKE 'a%' OR CustomerName LIKE 'b%';

SELECT * FROM Customers
WHERE CustomerName LIKE '%a';

SELECT * FROM Customers
WHERE CustomerName LIKE '%or%';

SELECT * FROM Customers
WHERE Country LIKE 'Spain';
```

- Wildcard Characters

```sql
%	Represents zero or more characters
_	Represents a single character
[]	Represents any single character within the brackets *
^	Represents any character not in the brackets *
-	Represents any single character within the specified range *
{}	Represents any escaped character **

// ** Supported only in Oracle databases.
// * Not supported in PostgreSQL and MySQL databases.


SELECT * FROM Customers
WHERE CustomerName LIKE '[bsp]%';

SELECT * FROM Customers
WHERE CustomerName LIKE '[a-f]%';
```

- IN

```sql
SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');

SELECT * FROM Customers
WHERE Country NOT IN ('Germany', 'France', 'UK');
```

- Between

```sql
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;
```

- Alias

```sql
SELECT CustomerID AS ID, CustomerName AS Customer
FROM Customers;

SELECT ProductName AS [My Great Products]
FROM Products; // for space characters

SELECT ProductName AS "My Great Products"
FROM Products;

// table alias
SELECT o.OrderID, o.OrderDate, c.CustomerName
FROM Customers AS c, Orders AS o
WHERE c.CustomerName='Around the Horn' AND c.CustomerID=o.CustomerID;

// MSQL Example:
SELECT CustomerName, CONCAT(Address,', ',PostalCode,', ',City,', ',Country) AS Address
FROM Customers;
```

- JOIN

```sql
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
```

- Left Join

```sql
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
LEFT JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
```

- Right Join

```sql
SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
FROM Orders
RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
ORDER BY Orders.OrderID;
```

- Full Outer Join

```sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID
ORDER BY Customers.CustomerName;
```

- Union

```sql
SELECT City FROM Customers
UNION
SELECT City FROM Suppliers
ORDER BY City;

SELECT City FROM Customers
UNION ALL
SELECT City FROM Suppliers
ORDER BY City;

SELECT City, Country FROM Customers
WHERE Country='Germany'
UNION
SELECT City, Country FROM Suppliers
WHERE Country='Germany'
ORDER BY City;
```

- Group By

```sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;
```

- Having

```sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;

SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5
ORDER BY COUNT(CustomerID) DESC;
```

- Exists

```sql
SELECT SupplierName
FROM Suppliers
WHERE EXISTS (SELECT ProductName FROM Products WHERE Products.SupplierID = Suppliers.supplierID AND Price < 20);
```

- Any

```sql
SELECT ProductName
FROM Products
WHERE ProductID = ANY
  (SELECT ProductID
  FROM OrderDetails
  WHERE Quantity > 99);
```

- All

```sql
SELECT ProductName
FROM Products
WHERE ProductID = ALL
  (SELECT ProductID
  FROM OrderDetails
  WHERE Quantity = 10);
```

- SQL Case

```sql
SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN 'The quantity is greater than 30'
    WHEN Quantity = 30 THEN 'The quantity is 30'
    ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;
```

- SQL Comments

```sql
-- SELECT * FROM Customers;
SELECT * FROM Products;

SELECT * FROM Customers -- WHERE City='Berlin';
```

---
