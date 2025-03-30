# How to Consume API in JS and React 

## Basics 

Before consuming an API in vanilla JavaScript, it's essential to understand the basics of frontend development. Here are the key concepts and skills you should be familiar with:

### Basics of Frontend Development

1. **HTML (HyperText Markup Language)**:
   - **Structure**: Understand the structure of an HTML document, including elements like `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`.
   - **Tags and Elements**: Learn about different HTML tags (e.g., `<div>`, `<p>`, `<a>`, `<img>`, etc.) and their attributes.

2. **CSS (Cascading Style Sheets)**:
   - **Styling**: Know how to apply styles to HTML elements using CSS.
   - **Selectors**: Understand how to select elements with classes, IDs, and other CSS selectors.
   - **Layout**: Learn about CSS layout techniques like Flexbox and Grid.

3. **JavaScript (JS)**:
   - **Syntax and Basics**: Familiarize yourself with JavaScript syntax, variables, data types, and basic operators.
   - **DOM Manipulation**: Learn how to interact with the Document Object Model (DOM) to update HTML content dynamically.
   - **Event Handling**: Understand how to handle user events (e.g., clicks, form submissions) using event listeners.

### Consuming APIs in Vanilla JS

1. **XMLHttpRequest**:
   - The traditional way of making HTTP requests in JavaScript.
   - Example:
     ```javascript
     const xhr = new XMLHttpRequest();
     xhr.open('GET', 'https://api.example.com/data', true);
     xhr.onload = function () {
       if (xhr.status === 200) {
         console.log(xhr.responseText);
       } else {
         console.error('Request failed');
       }
     };
     xhr.send();
     ```

2. **Fetch API**:
   - A modern and more powerful way to make HTTP requests.
   - Example:
     ```javascript
     fetch('https://api.example.com/data')
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.error('Error:', error));
     ```

### Packages for Making Calls to the Backend

While vanilla JS provides `XMLHttpRequest` and `fetch`, there are also several third-party packages that simplify making HTTP requests. Some popular ones include:

1. **Axios**:
   - A promise-based HTTP client for the browser and Node.js.
   - Supports older browsers, provides better error handling, and simplifies request configuration.
   - Example:
     ```javascript
     axios.get('https://api.example.com/data')
       .then(response => console.log(response.data))
       .catch(error => console.error('Error:', error));
     ```

2. **jQuery AJAX**:
   - jQuery provides an easy-to-use `$.ajax()` method for making HTTP requests.
   - Example:
     ```javascript
     $.ajax({
       url: 'https://api.example.com/data',
       method: 'GET',
       success: function(data) {
         console.log(data);
       },
       error: function(error) {
         console.error('Error:', error);
       }
     });
     ```

3. **SuperAgent**:
   - A small, progressive client-side HTTP request library.
   - Example:
     ```javascript
     superagent.get('https://api.example.com/data')
       .end((err, res) => {
         if (err) {
           console.error('Error:', err);
         } else {
           console.log(res.body);
         }
       });
     ```

4. **Fetch API Polyfill**:
   - If you need to support older browsers that do not have native fetch support, you can use a polyfill.
   - Example:
     ```javascript
     import 'whatwg-fetch';
     fetch('https://api.example.com/data')
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.error('Error:', error));
     ```

### Summary

Understanding the basics of HTML, CSS, and JavaScript is crucial before making API calls. In vanilla JavaScript, you can use `XMLHttpRequest` or the `fetch` API to interact with backend services. Additionally, third-party libraries like Axios, jQuery AJAX, and SuperAgent can simplify the process and offer more features.



## Summarize on weather APP about what we did ?

Let's summarize the process of creating a simple weather app using HTML, CSS, and JavaScript, and explain the key concepts in a beginner-friendly way.

### Summary of the Weather App Project

#### Project Overview

We created a basic weather app that fetches weather data from a third-party API and displays it on the webpage. Since our actual weather API key was taking time to activate, we simulated the API call using a dummy API (JSONPlaceholder). 

#### Step-by-Step Explanation

1. **HTML (HyperText Markup Language)**: The skeleton of our webpage, defining the structure and content.
2. **CSS (Cascading Style Sheets)**: Used to style our webpage, making it visually appealing.
3. **JavaScript**: Adds interactivity to our webpage, allowing us to fetch and display weather data.

### Detailed Steps

1. **HTML Setup**: Creating the basic structure of the app.
   - We made an `index.html` file which included a title, input field, button, and a div to display weather data.
   ```html
   <div class="container">
       <h1>Weather App</h1>
       <div class="search-box">
           <input type="text" id="city" placeholder="Enter city name">
           <button onclick="getWeather()">Get Weather</button>
       </div>
       <div id="weather-data" class="weather-data"></div>
   </div>
   ```

2. **CSS Styling**: Adding styles to make the app look nice.
   - We styled the HTML elements to center them on the page and make the input field and button look good.
   ```css
   body {
       display: flex;
       justify-content: center;
       align-items: center;
       height: 100vh;
       background-color: #f0f0f0;
   }

   .container {
       background-color: #fff;
       padding: 20px;
       border-radius: 8px;
       box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
       text-align: center;
   }
   ```

3. **JavaScript for Interactivity**: Fetching and displaying weather data.
   - We wrote a function `getWeather()` to fetch data from a dummy API and display it on the webpage.
   ```javascript
   async function getWeather() {
       const city = document.getElementById('city').value;
       const url = `https://jsonplaceholder.typicode.com/posts/${city}`;
       try {
           const response = await fetch(url);
           const data = await response.json();
           const weatherData = {
               name: city,
               sys: { country: "Country" },
               main: { temp: 25, humidity: 60 },
               weather: [{ description: "clear sky" }],
               wind: { speed: 3 }
           };
           displayWeather(weatherData);
       } catch (error) {
           alert('Failed to fetch weather data');
       }
   }

   function displayWeather(data) {
       const weatherDataDiv = document.getElementById('weather-data');
       weatherDataDiv.innerHTML = `
           <h2>${data.name}, ${data.sys.country}</h2>
           <p>Temperature: ${data.main.temp} °C</p>
           <p>Weather: ${data.weather[0].description}</p>
           <p>Humidity: ${data.main.humidity} %</p>
           <p>Wind Speed: ${data.wind.speed} m/s</p>
       `;
   }
   ```

### Key Concepts Explained

1. **HTML (HyperText Markup Language)**: The standard language for creating web pages.
2. **CSS (Cascading Style Sheets)**: A style sheet language used for describing the presentation of a document written in HTML.
3. **JavaScript**: A programming language that allows you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.
4. **API (Application Programming Interface)**: A set of rules and tools that allow different software applications to communicate with each other.
5. **fetch()**: A JavaScript function used to make network requests to retrieve resources from a server.
6. **async/await**: JavaScript keywords that allow you to write asynchronous code in a synchronous manner, making it easier to read and write.
7. **JSON (JavaScript Object Notation)**: A lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.

### Final Thoughts

By following these steps, we've created a simple weather app that can be enhanced and expanded as needed. This project introduced you to the basics of web development, including HTML structure, CSS styling, and JavaScript interactivity, along with making and handling API calls.


