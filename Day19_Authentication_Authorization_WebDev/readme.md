# User Authentication and Authorization Implementing user login and registration Managing user sessions and roles Building a Web Application with a Framework Developing a complete feature with a framework

## Basics of Authetication & Authorization

Let's start with the basics of authentication and authorization, understand why they are important, and explore various techniques to implement them along with their pros and cons.

1. **Authentication**:

   - **Definition**: Authentication is the process of verifying the identity of a user or system. It ensures that the entity is who it claims to be.
   - **Example**: When you log into a website using a username and password, the process of verifying your credentials is authentication.

2. **Authorization**:
   - **Definition**: Authorization is the process of determining whether a user has permission to perform a certain action or access a specific resource. It comes after authentication.
   - **Example**: After logging in, your ability to access the admin dashboard is determined by authorization.

### Importance of Authentication and Authorization

- **Security**: Protect sensitive data and ensure only authorized users can access certain resources.
- **User Experience**: Personalize user experiences based on their roles and permissions.
- **Data Integrity**: Prevent unauthorized actions that could compromise data integrity.

### Techniques for Authentication and Authorization

1. **Session-based Authentication**:

   - **Technique**: Uses server-side sessions to store user information after login. A session ID is stored in a cookie on the client-side.
   - **Pros**:
     - Simple to implement.
     - Secure, as session data is stored on the server.
   - **Cons**:
     - Scalability issues with server-side session storage.
     - Requires cookie handling.
   - **Example**:

     ```javascript
     const session = require("express-session");
     app.use(
       session({ secret: "secretKey", resave: false, saveUninitialized: true })
     );

     app.post("/login", (req, res) => {
       const user = authenticateUser(req.body.username, req.body.password);
       if (user) {
         req.session.userId = user.id;
         res.send("Login successful");
       } else {
         res.send("Invalid credentials");
       }
     });

     app.get("/protected", (req, res) => {
       if (req.session.userId) {
         res.send("Protected content");
       } else {
         res.send("Not authorized");
       }
     });
     ```

2. **Token-based Authentication (JWT)**:

   - **Technique**: Uses JSON Web Tokens (JWT) to authenticate users. The token is stored client-side (e.g., in localStorage) and sent with each request.
   - **Pros**:
     - Stateless and scalable.
     - Can be used across different domains.
   - **Cons**:
     - Requires secure storage of tokens on the client-side.
     - Token expiration and refresh management can be complex.
   - **Example**:

     ```javascript
     const jwt = require("jsonwebtoken");

     app.post("/login", (req, res) => {
       const user = authenticateUser(req.body.username, req.body.password);
       if (user) {
         const token = jwt.sign({ id: user.id }, "secretKey", {
           expiresIn: "1h",
         });
         res.json({ token });
       } else {
         res.send("Invalid credentials");
       }
     });

     const authenticateJWT = (req, res, next) => {
       const token = req.header("Authorization");
       if (!token) return res.send("Access denied");

       jwt.verify(token, "secretKey", (err, user) => {
         if (err) return res.send("Invalid token");
         req.user = user;
         next();
       });
     };

     app.get("/protected", authenticateJWT, (req, res) => {
       res.send("Protected content");
     });
     ```

3. **OAuth**:

   - **Technique**: Allows third-party services (e.g., Google, Facebook) to authenticate users and authorize applications to access user data.
   - **Pros**:
     - Users can log in using existing accounts.
     - Reduces the need for password management.
   - **Cons**:
     - Complex to implement.
     - Relies on third-party services.
   - **Example**: Using Passport.js with Google OAuth:

     ```javascript
     const passport = require("passport");
     const GoogleStrategy = require("passport-google-oauth20").Strategy;

     passport.use(
       new GoogleStrategy(
         {
           clientID: "GOOGLE_CLIENT_ID",
           clientSecret: "GOOGLE_CLIENT_SECRET",
           callbackURL: "http://localhost:3000/auth/google/callback",
         },
         (token, tokenSecret, profile, done) => {
           return done(null, profile);
         }
       )
     );

     app.get(
       "/auth/google",
       passport.authenticate("google", { scope: ["profile"] })
     );
     app.get(
       "/auth/google/callback",
       passport.authenticate("google", { failureRedirect: "/" }),
       (req, res) => {
         res.redirect("/protected");
       }
     );

     app.get("/protected", (req, res) => {
       if (req.isAuthenticated()) {
         res.send("Protected content");
       } else {
         res.send("Not authorized");
       }
     });
     ```

### Best Approaches for Implementing Authentication and Authorization in Express and Node.js

1. **Choose the Right Technique**:

   - For simple applications or internal tools, session-based authentication might be sufficient.
   - For scalable and stateless applications, JWT is recommended.
   - For user convenience and avoiding password management, consider OAuth with Passport.js.

2. **Use Middleware**:

   - Implement middleware functions for authentication and authorization checks to keep the code DRY (Don't Repeat Yourself).

3. **Secure Your Application**:

   - Always use HTTPS to protect data in transit.
   - Store secrets (e.g., JWT secret keys) securely using environment variables.
   - Implement proper error handling and logging.

4. **Token Management**:

   - Handle token expiration and refresh tokens properly to enhance user experience without compromising security.

5. **Database Integration**:
   - Use a database to store user credentials and roles securely. Consider using libraries like Mongoose for MongoDB or Sequelize for SQL databases.

By understanding these basics and techniques, you can choose the best approach for your application and implement secure authentication and authorization in your Express and Node.js projects. Let me know if you want to dive deeper into any specific technique or need further examples!

## Some More Techniques

Certainly! Let's delve into SAML and session-based storage, along with an overview of when to use each authentication technique considering various factors.

### SAML (Security Assertion Markup Language)

#### What is SAML?

- **SAML** is an XML-based framework for authentication and authorization between two entities: an identity provider (IdP) and a service provider (SP).
- It allows single sign-on (SSO) by enabling users to log in once and gain access to multiple applications.

#### How SAML Works

1. **User Requests Access**: The user attempts to access a resource on the service provider.
2. **SP Redirects to IdP**: The service provider redirects the user to the identity provider for authentication.
3. **User Authenticates**: The identity provider authenticates the user (e.g., via username/password).
4. **IdP Sends Assertion**: The identity provider sends a SAML assertion (an XML document) to the service provider.
5. **SP Grants Access**: The service provider processes the SAML assertion and grants the user access to the requested resource.

#### Example Flow

- Imagine a user accessing an internal company portal (SP). They are redirected to the company's SSO login page (IdP), authenticate, and are redirected back to the portal with access granted.

#### Pros and Cons of SAML

- **Pros**:
  - **SSO Capability**: Users log in once and access multiple services.
  - **Security**: Strong authentication mechanisms.
  - **Interoperability**: Works across different domains and platforms.
- **Cons**:
  - **Complexity**: More complex to set up compared to other methods.
  - **Overhead**: Involves exchanging large XML documents.

### Session-based Storage

#### What is Session-based Storage?

- **Session-based storage** involves storing user session data on the server after the user logs in. A session ID is stored in a cookie on the client-side, which is sent with each request to the server to identify the user session.

#### How Session-based Storage Works

1. **User Logs In**: The user logs in with their credentials.
2. **Server Creates Session**: The server creates a session and stores user information in server memory or a database.
3. **Session ID in Cookie**: The server sends a session ID to the client, which is stored in a cookie.
4. **Client Sends Cookie**: The client sends the cookie with the session ID on each request.
5. **Server Validates Session**: The server validates the session ID and retrieves user information to authorize the request.

#### Example Flow

- A user logs into a website, and the server creates a session storing user data. The session ID is sent to the user's browser and stored in a cookie. On subsequent requests, the server uses the session ID to retrieve user data and authorize actions.

#### Pros and Cons of Session-based Storage

- **Pros**:
  - **Simplicity**: Easy to implement and manage.
  - **Security**: Session data is stored on the server.
- **Cons**:
  - **Scalability**: Managing sessions in a distributed environment can be challenging.
  - **Stateful**: The server needs to maintain state information.

### When to Use Each Technique

#### Considerations for Choosing an Authentication Technique

1. **Application Scale and Complexity**:

   - **Session-based Authentication**: Suitable for small to medium-sized applications with limited scale. Ideal for internal tools or applications where state management is simpler.
   - **JWT (Token-based Authentication)**: Better for stateless, scalable applications, particularly with microservices architectures.
   - **SAML**: Best for enterprise-level applications requiring SSO and interoperability across different systems.

2. **Security Requirements**:

   - **Session-based Authentication**: Offers secure session management but can be vulnerable to session hijacking if not implemented correctly.
   - **JWT**: Provides stateless authentication but requires secure token storage and management.
   - **SAML**: Strong security mechanisms and SSO capabilities make it suitable for high-security environments.

3. **User Experience**:

   - **Session-based Authentication**: Simple for users but may require re-authentication if sessions expire.
   - **JWT**: Provides a smooth user experience with token expiration and refresh strategies.
   - **SAML**: Excellent for user convenience with SSO, reducing the need for multiple logins.

4. **Implementation Complexity**:
   - **Session-based Authentication**: Easiest to implement with minimal overhead.
   - **JWT**: Moderate complexity with token handling and validation.
   - **SAML**: Most complex, requiring setup and configuration of IdP and SP, handling XML assertions.

### Examples for Each Technique

#### 1. **Session-based Authentication**:

```javascript
const express = require("express");
const session = require("express-session");
const app = express();

app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
  })
);

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = authenticateUser(username, password);
  if (user) {
    req.session.userId = user.id;
    res.send("Login successful");
  } else {
    res.send("Invalid credentials");
  }
});

app.get("/protected", (req, res) => {
  if (req.session.userId) {
    res.send("Protected content");
  } else {
    res.send("Not authorized");
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

#### 2. **JWT (Token-based Authentication)**:

```javascript
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = authenticateUser(username, password);
  if (user) {
    const token = jwt.sign({ id: user.id }, "secretKey", { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.send("Invalid credentials");
  }
});

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.send("Access denied");

  jwt.verify(token, "secretKey", (err, user) => {
    if (err) return res.send("Invalid token");
    req.user = user;
    next();
  });
};

app.get("/protected", authenticateJWT, (req, res) => {
  res.send("Protected content");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

#### 3. **SAML Authentication**:

Implementing SAML in a Node.js application typically involves using a library like `passport-saml`:

```javascript
const express = require("express");
const passport = require("passport");
const SamlStrategy = require("passport-saml").Strategy;
const app = express();

passport.use(
  new SamlStrategy(
    {
      path: "/login/callback",
      entryPoint: "https://idp.example.com/sso/saml",
      issuer: "passport-saml",
    },
    (profile, done) => {
      return done(null, profile);
    }
  )
);

app.use(passport.initialize());

app.get(
  "/login",
  passport.authenticate("saml", { failureRedirect: "/", failureFlash: true }),
  (req, res) => {
    res.redirect("/");
  }
);

app.post(
  "/login/callback",
  passport.authenticate("saml", { failureRedirect: "/", failureFlash: true }),
  (req, res) => {
    res.redirect("/protected");
  }
);

app.get("/protected", (req, res) => {
  if (req.isAuthenticated()) {
    res.send("Protected content");
  } else {
    res.send("Not authorized");
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

### Conclusion

- **Session-based Authentication**: Use for simple, stateful applications with moderate security needs.
- **JWT (Token-based Authentication)**: Ideal for scalable, stateless applications, particularly for APIs and microservices.
- **SAML**: Best for enterprise environments requiring SSO and strong security across multiple services.

Each technique has its place depending on the application's requirements, security considerations, and user experience goals. Choose the method that aligns best with your application's needs and complexity.

## Let's talk a little more about SAML in general

Sure! Let's simplify SAML-based authentication and authorization with a basic explanation and an easy-to-understand example.

### What is SAML?

**SAML (Security Assertion Markup Language)** is a standard for exchanging authentication and authorization data between two parties:

- **Identity Provider (IdP)**: The entity that authenticates a user (e.g., a company's login system).
- **Service Provider (SP)**: The entity that provides the service the user wants to access (e.g., an online application).

### Why Use SAML?

- **Single Sign-On (SSO)**: Users can log in once and access multiple applications without logging in again.
- **Security**: Provides a secure way to exchange authentication information.
- **Convenience**: Users don't need to remember multiple usernames and passwords for different applications.

### How SAML Works: A Simple Example

Let's say you work for a company, and you use multiple applications daily. Instead of logging into each application separately, your company uses SAML to provide Single Sign-On (SSO). Here's how it works:

1. **User Requests Access**: You try to access an online expense reporting application (the service provider).
2. **SP Redirects to IdP**: The expense application redirects you to the company's login page (the identity provider).
3. **User Authenticates**: You enter your username and password on the company's login page.
4. **IdP Sends SAML Assertion**: Once authenticated, the identity provider creates a SAML assertion (a secure XML document) that states you are authenticated and sends it to the expense application.
5. **SP Grants Access**: The expense application receives the SAML assertion, verifies it, and grants you access to the application.

### Simplified Workflow with Example

Let's use a real-world analogy:

- **Identity Provider (IdP)**: Your company's security desk.
- **Service Provider (SP)**: Different office buildings (e.g., HR department, Finance department).

#### Steps in Detail:

1. **You Arrive at Work**: You (the user) arrive at the office and need access to the HR department (the service provider).

2. **Security Desk Check**: Instead of showing your ID at every department door, you go to the security desk (the identity provider) when you arrive.

3. **Identity Verification**: At the security desk, you show your employee ID and the security guard verifies your identity.

4. **Access Pass Issued**: After verifying your identity, the security guard gives you an access pass (the SAML assertion).

5. **Entering Departments**: You use the access pass to enter different departments (HR, Finance, etc.). Each department trusts the access pass issued by the security desk and allows you to enter without checking your ID again.

#### Why This is Useful:

- **Convenience**: You don’t have to show your ID at every department.
- **Security**: Each department trusts the security desk's verification process.
- **Efficiency**: Faster access to multiple departments with a single verification.

### Implementing SAML in a Simple Application

In a web application, using a library like `passport-saml` in Node.js can help simplify the implementation. Here's a very basic example:

1. **Install Dependencies**:

   ```bash
   npm install express passport passport-saml
   ```

2. **Setup Express and Passport**:

   ```javascript
   const express = require("express");
   const passport = require("passport");
   const SamlStrategy = require("passport-saml").Strategy;

   const app = express();

   passport.use(
     new SamlStrategy(
       {
         path: "/login/callback",
         entryPoint: "https://idp.example.com/sso/saml",
         issuer: "passport-saml",
       },
       (profile, done) => {
         return done(null, profile);
       }
     )
   );

   app.use(passport.initialize());

   app.get(
     "/login",
     passport.authenticate("saml", {
       successRedirect: "/",
       failureRedirect: "/login",
     })
   );

   app.post(
     "/login/callback",
     passport.authenticate("saml", {
       failureRedirect: "/",
       failureFlash: true,
     }),
     (req, res) => {
       res.redirect("/");
     }
   );

   app.get("/protected", (req, res) => {
     if (req.isAuthenticated()) {
       res.send("Protected content");
     } else {
       res.send("Not authorized");
     }
   });

   app.listen(3000, () => {
     console.log("Server running on http://localhost:3000");
   });
   ```

### Summary

- **SAML** allows users to log in once (via the IdP) and access multiple applications (SPs) without logging in again.
- It enhances security and user convenience, especially in enterprise environments.
- The basic flow involves the SP redirecting the user to the IdP for authentication, and the IdP sending a SAML assertion to the SP to confirm the user's identity and permissions.

This explanation and example should give you a clear understanding of how SAML works and how it can be implemented in a web application. Let me know if you need further details or have any questions!


## Let's understand JWT 

### What is JWT?

**JWT (JSON Web Token)** is an open standard (RFC 7519) for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed using a secret (with the HMAC algorithm) or a public/private key pair (using RSA or ECDSA).

### Why is JWT Popular?

- **Stateless**: JWTs are stateless, meaning they do not require server-side session storage. This makes them ideal for scalable applications.
- **Compact**: JWTs are compact and can be easily transmitted in URLs, HTTP headers, or within cookies.
- **Self-contained**: JWTs contain all the necessary information about the user or entity in the token itself, eliminating the need to query the database for user information on every request.

### How JWT Works

1. **User Logs In**: The user provides their credentials (e.g., username and password) to the authentication server.
2. **Token Issued**: If the credentials are valid, the authentication server issues a JWT, signing it with a secret key.
3. **Token Sent to Client**: The JWT is sent to the client (e.g., in the response body or as an HTTP-only cookie).
4. **Client Stores Token**: The client stores the JWT (e.g., in localStorage, sessionStorage, or a cookie).
5. **Client Sends Token on Requests**: For subsequent requests to protected routes, the client includes the JWT in the HTTP Authorization header.
6. **Server Validates Token**: The server verifies the JWT's signature using the secret key or public key.
7. **Access Granted**: If the token is valid, the server processes the request and grants access to the protected resource.

### Structure of a JWT

A JWT consists of three parts, separated by dots (`.`):

1. **Header**: Contains the type of token (JWT) and the signing algorithm (e.g., HMAC SHA256 or RSA).
2. **Payload**: Contains the claims. Claims are statements about an entity (typically, the user) and additional data.
3. **Signature**: Used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.

#### Example of a JWT
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

- **Header**:
  ```json
  {
    "alg": "HS256",
    "typ": "JWT"
  }
  ```
- **Payload**:
  ```json
  {
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
  }
  ```
- **Signature**: Created by encoding the header and payload using Base64Url, and then signing them using the specified algorithm and a secret key.

### Example in Node.js using Express and JWT

#### Step 1: Install Dependencies
```bash
npm install express jsonwebtoken
```

#### Step 2: Create Express Application
```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

const secretKey = 'your-very-secure-secret';

// Mock user data
const users = [{ id: 1, username: 'user', password: 'pass' }];

// Login Route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Middleware to Authenticate Token
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');
  if (token) {
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Protected Route
app.get('/protected', authenticateJWT, (req, res) => {
  res.send('Protected content');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

### JWT and Scalability

**Statelessness**: Since JWTs are self-contained and do not require server-side sessions, they allow for horizontal scaling. Multiple servers can handle requests without needing a shared session store.

### When to Use JWT

- **Microservices Architecture**: JWT is ideal for microservices where stateless authentication is preferred.
- **APIs**: JWTs are suitable for securing RESTful APIs.
- **Mobile and Single-Page Applications (SPAs)**: JWTs are often used in mobile apps and SPAs due to their compact size and ease of use.

### When to Avoid JWT

- **Short-Lived Sessions**: If you need to manage short-lived sessions or require server-side session management, traditional session-based authentication may be more suitable.
- **Sensitive Data Storage**: Avoid storing sensitive user data directly in the JWT payload, as it is base64-encoded and can be easily decoded.
- **Complex Authorization Logic**: If your application has complex authorization requirements, managing everything within a JWT can be challenging.

### Pros and Cons of JWT

#### Pros
- **Stateless and Scalable**: No need for server-side session storage.
- **Compact**: Efficient to transmit in URLs and headers.
- **Self-contained**: Contains all necessary information in the token itself.

#### Cons
- **Security**: JWTs can be vulnerable if not implemented correctly (e.g., improper secret management, lack of encryption for sensitive data).
- **Token Size**: JWTs can grow large if too much information is embedded in the payload.
- **Complexity**: Managing token expiration, refresh tokens, and revocation can add complexity.

### Summary

- **JWT** is a secure, compact, and self-contained way to transmit information between parties.
- **Popular for stateless authentication**: Ideal for scalable applications, especially in microservices and APIs.
- **Considerations**: While JWTs provide many benefits, careful implementation is required to avoid security pitfalls. Use JWTs when scalability and statelessness are important, but avoid them for short-lived sessions or when managing complex authorization logic.

I hope this provides a clear understanding of JWT and its uses! Let me know if you need further details or have any questions.


## Lets Build an Application

Let's dive into authentication and authorization in an Express application from scratch.

### 1. **Setting Up Express**

First, let's set up a basic Express application.

1. **Initialize a new Node.js project**:

   ```bash
   mkdir express-app
   cd express-app
   npm init -y
   ```

2. **Install Express**:

   ```bash
   npm install express
   ```

3. **Create a basic server**:
   Create a file named `app.js` and add the following code:

   ```javascript
   const express = require("express");
   const app = express();
   const port = 3000;

   app.get("/", (req, res) => {
     res.send("Hello, World!");
   });

   app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
   });
   ```

### 2. **Authentication vs Authorization**

- **Authentication** is the process of verifying the identity of a user.
- **Authorization** is the process of verifying what an authenticated user has access to.

### 3. **Authentication**

We'll use JSON Web Tokens (JWT) for authentication. JWT is a compact, URL-safe means of representing claims to be transferred between two parties.

#### Steps for JWT Authentication:

1. **Install necessary packages**:

   ```bash
   npm install jsonwebtoken bcryptjs body-parser
   ```

2. **Setup User Model**:
   Create a `models` folder and a file `User.js` for a basic user model. Here, I'll use an in-memory array to store users for simplicity.

   ```javascript
   const bcrypt = require("bcryptjs");

   const users = [];

   const createUser = async (username, password) => {
     const hashedPassword = await bcrypt.hash(password, 10);
     const user = { username, password: hashedPassword };
     users.push(user);
     return user;
   };

   const findUser = (username) =>
     users.find((user) => user.username === username);

   module.exports = { createUser, findUser };
   ```

3. **Register Route**:

   ```javascript
   const express = require("express");
   const bodyParser = require("body-parser");
   const { createUser, findUser } = require("./models/User");

   const app = express();
   app.use(bodyParser.json());

   app.post("/register", async (req, res) => {
     const { username, password } = req.body;
     if (findUser(username)) {
       return res.status(400).json({ message: "User already exists" });
     }
     const user = await createUser(username, password);
     res.status(201).json(user);
   });

   app.listen(3000, () => {
     console.log("Server running on http://localhost:3000");
   });
   ```

4. **Login Route and JWT Generation**:

   ```javascript
   const jwt = require("jsonwebtoken");

   app.post("/login", async (req, res) => {
     const { username, password } = req.body;
     const user = findUser(username);
     if (!user || !(await bcrypt.compare(password, user.password))) {
       return res.status(401).json({ message: "Invalid credentials" });
     }

     const token = jwt.sign({ username: user.username }, "secretKey", {
       expiresIn: "1h",
     });
     res.json({ token });
   });
   ```

### 4. **Authorization**

Authorization can be implemented using middleware to check the JWT for certain routes.

1. **Authorization Middleware**:

   ```javascript
   const authenticateJWT = (req, res, next) => {
     const token = req.header("Authorization");
     if (!token) {
       return res
         .status(401)
         .json({ message: "Access token is missing or invalid" });
     }

     jwt.verify(token, "secretKey", (err, user) => {
       if (err) {
         return res.status(403).json({ message: "Token is not valid" });
       }

       req.user = user;
       next();
     });
   };

   app.get("/protected", authenticateJWT, (req, res) => {
     res.json({ message: "This is a protected route", user: req.user });
   });
   ```

### 5. **Putting It All Together**

Here is the complete `app.js` with all the routes and middleware:

```javascript
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { createUser, findUser } = require("./models/User");

const app = express();
app.use(bodyParser.json());

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (findUser(username)) {
    return res.status(400).json({ message: "User already exists" });
  }
  const user = await createUser(username, password);
  res.status(201).json(user);
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = findUser(username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ username: user.username }, "secretKey", {
    expiresIn: "1h",
  });
  res.json({ token });
});

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access token is missing or invalid" });
  }

  jwt.verify(token, "secretKey", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token is not valid" });
    }

    req.user = user;
    next();
  });
};

app.get("/protected", authenticateJWT, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

### Next Steps:

- **Enhance Security**: Store secret keys securely, implement rate limiting, use HTTPS, etc.
- **Database Integration**: Instead of an in-memory array, use a database like MongoDB, PostgreSQL, etc.
- **User Roles**: Implement different roles (e.g., admin, user) and restrict access to certain routes based on roles.

Let me know if you need more details or have specific questions!


> See the minor project for exact source code 

Sure! Let's build a full working project using Node.js, Express, MongoDB, JWT, and EJS in the MVC architecture.

_____



