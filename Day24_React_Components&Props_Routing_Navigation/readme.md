# React - Components, Props, Routing & Navigation 


## Basics, Terminologies & Definitions

Sure! Here’s a comprehensive list of concepts used in React 18 along with basic explanations:

### 1. **JSX**
   - **Explanation**: JSX stands for JavaScript XML. It allows you to write HTML elements in JavaScript and place them in the DOM without using `createElement()` and `appendChild()`.
   
### 2. **Components**
   - **Explanation**: Components are the building blocks of a React application. They can be functional (using functions) or class-based (using ES6 classes). Each component is a self-contained module that can maintain its own state and lifecycle methods.

### 3. **Props**
   - **Explanation**: Props (short for properties) are read-only inputs to components that allow data to be passed from parent to child components.

### 4. **State**
   - **Explanation**: State is a built-in object that stores property values that belong to the component. State changes can be asynchronous and trigger re-rendering of the component.

### 5. **Lifecycle Methods**
   - **Explanation**: Lifecycle methods are special methods in class components that are invoked at different stages of a component’s existence, such as mounting, updating, and unmounting.

### 6. **Hooks**
   - **Explanation**: Hooks are functions that let you "hook into" React state and lifecycle features from function components. Common hooks include `useState`, `useEffect`, `useContext`, and more.

### 7. **useState Hook**
   - **Explanation**: The `useState` hook allows you to add state to function components. It returns an array with the current state and a function to update it.

### 8. **useEffect Hook**
   - **Explanation**: The `useEffect` hook allows you to perform side effects in function components, such as data fetching, subscriptions, or manually changing the DOM.

### 9. **useContext Hook**
   - **Explanation**: The `useContext` hook allows you to consume context values directly in function components.

### 10. **Context API**
**Explanation**: Context API is a way to pass data through the component tree without having to pass props down manually at every level. It’s used for global state management.

### 11. **Refs**
**Explanation**: Refs provide a way to access DOM nodes or React elements created in the render method. They are useful for managing focus, text selection, or triggering animations.

### 12. **Fragments**
**Explanation**: Fragments let you group a list of children without adding extra nodes to the DOM. They are used to return multiple elements from a component’s render method.
    e.g.: <> some content </>

### 13. **Portals**
**Explanation**: Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

### 14. **Higher-Order Components (HOC)**
**Explanation**: HOCs are advanced techniques in React for reusing component logic. They are functions that take a component and return a new component.

### 15. **Render Props**
**Explanation**: Render props are techniques for sharing code between React components using a prop whose value is a function.

### 16. **Error Boundaries**
**Explanation**: Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.
refer: [read more](https://legacy.reactjs.org/docs/error-boundaries.html)

### 17. **React Router**
**Explanation**: React Router is a standard library for routing in React. It enables navigation among views of various components in a React application.

### 18. **Redux**
**Explanation**: Redux is a predictable state container for JavaScript apps, often used with React to manage the application state.

### 19. **React.memo**
**Explanation**: `React.memo` is a higher-order component that memoizes the rendered output of a function component, improving performance by avoiding unnecessary renders.

### 20. **React.lazy and Suspense**
**Explanation**: `React.lazy` and `Suspense` enable code splitting in React applications, allowing components to be loaded lazily and improving performance by reducing the initial load time.

### 21. **Concurrent Mode**
**Explanation**: Concurrent Mode (experimental in React 18) helps make React apps more responsive by rendering updates without blocking the main thread.

### 22. **Server-Side Rendering (SSR)**
**Explanation**: SSR is the ability to render React components on the server and send the HTML to the client. This can improve performance and SEO.

### 23. **Static Site Generation (SSG)**
**Explanation**: SSG pre-renders pages at build time, improving performance and SEO. It’s often used with frameworks like Next.js.

### 24. **useReducer Hook**
**Explanation**: The `useReducer` hook is used for state management in React. It’s an alternative to `useState` and is ideal for managing complex state logic.

### 25. **useCallback Hook**
**Explanation**: The `useCallback` hook returns a memoized callback function, which is useful to optimize performance when passing callbacks to child components.

### 26. **useMemo Hook**
**Explanation**: The `useMemo` hook returns a memoized value, optimizing performance by preventing expensive calculations on every render.

### 27. **PropTypes**
**Explanation**: PropTypes are used to validate the props passed to a component, ensuring they are of the correct type and shape.

### 28. **Custom Hooks**
**Explanation**: Custom hooks are JavaScript functions that start with "use" and can call other hooks. They allow you to extract and share stateful logic between components.

### 29. **Babel**
**Explanation**: Babel is a JavaScript compiler that converts ECMAScript 2015+ code into a backward-compatible version of JavaScript. It’s often used with React to enable the use of modern JavaScript features.

### 30. **Webpack**
**Explanation**: Webpack is a module bundler for JavaScript applications. It’s used to bundle multiple modules into a single file and includes features like code splitting and asset management.

### 31. **JSX Pragma**
**Explanation**: JSX pragma is a comment that tells the compiler which function to use when compiling JSX. It’s used to customize the behavior of JSX compilation.

### 32. **Virtual DOM**
**Explanation**: The virtual DOM is an in-memory representation of the real DOM elements generated by React components before any changes are made to the web page.

### 33. **Reconciliation**
**Explanation**: Reconciliation is the process through which React updates the DOM with the results of rendering a component. It compares the virtual DOM with the real DOM and updates only the parts that have changed.

### 34. **Synthetic Events**
**Explanation**: Synthetic events are React's cross-browser wrapper around the browser’s native event system, ensuring events behave consistently across different browsers.

### 35. **StrictMode**
**Explanation**: `StrictMode` is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants.

### 36. **Context Provider and Consumer**
**Explanation**: The `Provider` component is used to wrap a tree of components that need access to the context. The `Consumer` component is used to access the context values.

### 37. **Profiler**
**Explanation**: The `Profiler` component measures the performance of React applications by collecting timing information about each render of a component.

### 38. **createRef and useRef**
**Explanation**: `createRef` is used in class components to create a reference to a DOM element. `useRef` is a hook that creates a mutable object which holds a `.current` property.

This list covers the core concepts and some advanced features of React 18. Each topic can be further explored to understand its usage and nuances in more depth.


## Understanding components, props, Routing & Navigation in React

### Components

#### Functional Component
Functional components are simple JavaScript functions that return JSX.
```jsx
import React from 'react';

const Greeting = () => {
  return <h1>Hello, World!</h1>;
};

export default Greeting;
```

#### Class Component
Class components are ES6 classes that extend from `React.Component`.
```jsx
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}

export default Greeting;
```

### Props

Props are used to pass data from parent to child components.

#### Parent Component
```jsx
import React from 'react';
import Greeting from './Greeting';

const App = () => {
  return <Greeting name="Ayush" />;
};

export default App;
```

#### Child Component
```jsx
import React from 'react';

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default Greeting;
```

### Routing and Navigation

React Router is used to manage routing in a React application. `BrowserRouter` is commonly used for web applications.

#### Installing React Router
First, install React Router:
```bash
npm install react-router-dom
```

#### Setting Up Routes
Here's an example of setting up routes using `BrowserRouter`.

##### App.js
```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
```

#### Home.js
```jsx
import React from 'react';

const Home = () => {
  return <h1>Home Page</h1>;
};

export default Home;
```

#### About.js
```jsx
import React from 'react';

const About = () => {
  return <h1>About Page</h1>;
};

export default About;
```

#### Contact.js
```jsx
import React from 'react';

const Contact = () => {
  return <h1>Contact Page</h1>;
};

export default Contact;
```

### Explanation

- **Components**:
  - **Functional Component**: A functional component is a simple function that returns JSX. It's a stateless component, meaning it does not manage or track its own state.
  - **Class Component**: A class component is an ES6 class that extends `React.Component` and must include a `render()` method that returns JSX. It can manage its own state and lifecycle methods.

- **Props**:
  - **Props (Properties)**: Props are arguments passed into React components, similar to function parameters. They allow data to flow from parent to child components. In the parent component (`App`), `Greeting` is given a `name` prop with the value "Ayush". The child component (`Greeting`) receives this prop and displays it.

- **Routing and Navigation**:
  - **React Router**: React Router is a standard library for routing in React. It enables the navigation among views of various components, changing the browser URL and keeping the UI in sync with the URL.
  - **BrowserRouter**: `BrowserRouter` is a router implementation that uses the HTML5 history API to keep the UI in sync with the URL. It should be used at the root of your component hierarchy.
  - **Route**: The `Route` component is used to define a route and its associated component. When the URL matches the path prop of a `Route`, the specified component is rendered.
  - **Switch**: The `Switch` component is used to group `Route` components. It renders the first child `Route` that matches the URL, which prevents multiple routes from rendering simultaneously.
  - **Link**: The `Link` component is used to create navigable links that enable users to navigate to different routes without refreshing the page. The `to` prop specifies the target route.

This example demonstrates the core concepts of components, props, and routing in React, using `BrowserRouter` for client-side routing and navigation.


## Updated Example of Routing & Navigation

Updated example using the latest version of `react-router-dom` where `Switch` is replaced with `Routes` and `Route` has a slightly updated syntax.

### Installing React Router
First, install the latest version of React Router:
```bash
npm install react-router-dom
```

### Setting Up Routes
Here's an updated example using `BrowserRouter` with the latest React Router.

#### App.js
```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
```

#### Home.js
```jsx
import React from 'react';

const Home = () => {
  return <h1>Home Page</h1>;
};

export default Home;
```

#### About.js
```jsx
import React from 'react';

const About = () => {
  return <h1>About Page</h1>;
};

export default About;
```

#### Contact.js
```jsx
import React from 'react';

const Contact = () => {
  return <h1>Contact Page</h1>;
};

export default Contact;
```

### Explanation

- **BrowserRouter**: This component wraps the entire application to enable routing capabilities. It uses the HTML5 history API to keep the UI in sync with the URL.

- **Routes**: The `Routes` component replaces `Switch` and is used to group multiple `Route` components. It ensures only the first route that matches the URL renders.

- **Route**: The `Route` component is used to define a path and the element that should be rendered when the path matches the URL. The `path` prop defines the route URL, and the `element` prop specifies the component to render.

- **Link**: The `Link` component is used to create navigable links that enable users to navigate to different routes without refreshing the page. The `to` prop specifies the target route.

### Summary

1. **Components**: Functional and class components are used to define the UI in React. They can maintain their own state and lifecycle methods.

2. **Props**: Props are used to pass data from parent to child components, allowing for dynamic data rendering.

3. **Routing and Navigation**: React Router is used to manage routing in a React application. The `BrowserRouter` component wraps the app, `Routes` groups the `Route` components, and `Link` is used to create navigable links. The latest version of React Router uses `Routes` and `Route` for defining paths and their corresponding components.

This example demonstrates the core concepts of components, props, and routing in React, using the latest version of `react-router-dom` for client-side routing and navigation.


------