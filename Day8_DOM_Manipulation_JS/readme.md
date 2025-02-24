# DOM Manipulation with JavaScript Understanding the Document Object Model (DOM)

### 1. What is the DOM?

- **Definition**: The Document Object Model (DOM) is a programming interface for HTML (and XML) documents. It represents the page so that programs can change the structure, style, and content of the document.
- **Hierarchy**: The DOM treats each element, attribute, and piece of text in the document as an object (a node).
- **Relationship**: You can think of the DOM as a tree where each node has children, siblings, and a parent, except for the root node which has no parent.

**Example** (visual representation):

```
<html>
  <head>
    <title>Sample Page</title>
  </head>
  <body>
    <h1>Hello, DOM!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

In the DOM tree:

- `document` is the root object.
- `document.documentElement` is the `<html>` element.
- `document.head` is the `<head>` element.
- `document.body` is the `<body>` element.

---

### 2. Selecting DOM Elements

#### 2.1 Using `document.getElementById()`

- **Description**: Selects a single element by its unique `id`.
- **Syntax**:
  ```javascript
  const element = document.getElementById("myElementId");
  ```
- **Example**:
  ```html
  <div id="container">Content here</div>
  <script>
    const containerDiv = document.getElementById("container");
    console.log(containerDiv); // <div id="container">Content here</div>
  </script>
  ```

#### 2.2 Using `document.getElementsByTagName()`

- **Description**: Selects all elements with a specific tag (returns an HTMLCollection).
- **Syntax**:
  ```javascript
  const paragraphs = document.getElementsByTagName("p");
  ```
- **Example**:
  ```html
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <script>
    const allParagraphs = document.getElementsByTagName("p");
    console.log(allParagraphs); // HTMLCollection of <p> elements
  </script>
  ```

#### 2.3 Using `document.getElementsByClassName()`

- **Description**: Selects all elements with a specific class (returns an HTMLCollection).
- **Syntax**:
  ```javascript
  const items = document.getElementsByClassName("myClass");
  ```
- **Example**:
  ```html
  <div class="myClass">Item 1</div>
  <div class="myClass">Item 2</div>
  <script>
    const divs = document.getElementsByClassName("myClass");
    console.log(divs); // HTMLCollection of <div> elements with class "myClass"
  </script>
  ```

#### 2.4 Using `document.querySelector()` and `document.querySelectorAll()`

- **Description**:
  - `querySelector()` selects the **first** element that matches a CSS selector.
  - `querySelectorAll()` selects **all** elements that match a CSS selector (returns a NodeList).
- **Syntax**:
  ```javascript
  const firstItem = document.querySelector(".myClass"); // first element
  const allItems = document.querySelectorAll(".myClass"); // all elements
  ```
- **Example**:

  ```html
  <div class="myClass">Item 1</div>
  <div class="myClass">Item 2</div>
  <script>
    const firstDiv = document.querySelector(".myClass");
    console.log(firstDiv); // The first div with class "myClass"

    const allDivs = document.querySelectorAll(".myClass");
    console.log(allDivs); // NodeList of all divs with class "myClass"
  </script>
  ```

---

### 3. Manipulating DOM Elements

#### 3.1 Changing Text Content

- **Property**: `textContent` or `innerText`
- **Syntax**:
  ```javascript
  const element = document.getElementById("myElement");
  element.textContent = "New text content!";
  ```
- **Example**:
  ```html
  <p id="paragraph">Original text</p>
  <script>
    const para = document.getElementById("paragraph");
    para.textContent = "This text has changed!";
  </script>
  ```

#### 3.2 Changing HTML Content

- **Property**: `innerHTML`
  ```javascript
  element.innerHTML = "<strong>Bold text!</strong>";
  ```
  - **Caution**: Using `innerHTML` can be risky if user input is involved (may lead to XSS vulnerabilities).

#### 3.3 Changing Styles

- **Syntax**:
  ```javascript
  element.style.propertyName = "value";
  ```
- **Example**:
  ```html
  <div id="box" style="width:100px; height:100px; background-color:lightblue;">
    Box
  </div>
  <script>
    const box = document.getElementById("box");
    box.style.backgroundColor = "lightgreen";
    box.style.border = "2px solid black";
  </script>
  ```

#### 3.4 Changing Attributes

- **Syntax**:
  ```javascript
  element.setAttribute("attributeName", "value");
  const attrValue = element.getAttribute("attributeName");
  ```
- **Example**:
  ```html
  <img id="myImage" src="oldImage.jpg" alt="Old Image" />
  <script>
    const image = document.getElementById("myImage");
    // Change image source
    image.setAttribute("src", "newImage.jpg");
  </script>
  ```

#### 3.5 Creating and Appending New Elements

- **Syntax**:
  ```javascript
  const newElement = document.createElement("tagName");
  parentElement.appendChild(newElement);
  ```
- **Example**:
  ```html
  <ul id="myList">
    <li>Existing Item</li>
  </ul>
  <script>
    const myList = document.getElementById("myList");
    const newListItem = document.createElement("li");
    newListItem.textContent = "New Item";
    myList.appendChild(newListItem);
  </script>
  ```

#### 3.6 Removing Elements

- **Syntax**:
  ```javascript
  parentElement.removeChild(childElement);
  // or directly
  childElement.remove();
  ```
- **Example**:
  ```html
  <ul id="myList">
    <li id="removeMe">Remove this item</li>
    <li>Another item</li>
  </ul>
  <script>
    const removeMe = document.getElementById("removeMe");
    removeMe.remove();
  </script>
  ```

---

### 4. Events and Event Listeners

#### 4.1 What are Events?

- **Definition**: Actions that happen in the browser such as clicks, typing in an input box, page load, mouse moves, etc.
- **Event Types**:
  - **Mouse Events**: `click`, `dblclick`, `mousemove`, `mouseover`, etc.
  - **Keyboard Events**: `keydown`, `keyup`, `keypress`
  - **Form Events**: `submit`, `change`, `input`
  - **Window Events**: `load`, `resize`, `scroll`

#### 4.2 Adding Event Listeners

- **Method**: `element.addEventListener(eventType, callbackFunction)`
- **Syntax**:
  ```javascript
  element.addEventListener("click", function () {
    // code to be executed on click
  });
  ```
- **Example**:
  ```html
  <button id="myButton">Click Me</button>
  <script>
    const myButton = document.getElementById("myButton");
    myButton.addEventListener("click", function () {
      alert("Button was clicked!");
    });
  </script>
  ```

#### 4.3 Handling Different Types of Events

1. **Click Event**
   ```javascript
   element.addEventListener("click", (event) => {
     console.log("Element clicked!", event);
   });
   ```
2. **Input Event**

   ```html
   <input type="text" id="textInput" />
   <script>
     const textInput = document.getElementById("textInput");
     textInput.addEventListener("input", (event) => {
       console.log("Input changed to: ", event.target.value);
     });
   </script>
   ```

3. **Submit Event**

   ```html
   <form id="myForm">
     <input type="text" name="username" placeholder="Enter username" />
     <button type="submit">Submit</button>
   </form>
   <script>
     const myForm = document.getElementById("myForm");
     myForm.addEventListener("submit", (event) => {
       event.preventDefault(); // prevent page from reloading
       console.log("Form Submitted!");
     });
   </script>
   ```

4. **Mouseover / Mouseout Events**
   ```javascript
   element.addEventListener("mouseover", (event) => {
     console.log("Mouse is over the element!");
   });
   element.addEventListener("mouseout", (event) => {
     console.log("Mouse left the element!");
   });
   ```

---

### 5. Event Phases and Event Object

- **Event Object**: When an event is triggered, an event object is created and passed to the event handler, containing details like:
  - `event.target`: The element that triggered the event.
  - `event.type`: The type of event (e.g., "click").
  - `event.preventDefault()`: Method to prevent the default action (like submitting a form).
  - `event.stopPropagation()`: Method to stop event bubbling further up the DOM tree.

**Example**:

```html
<div id="parent" style="padding: 20px; background: lightgray;">
  Parent
  <div id="child" style="padding: 20px; background: white;">Child</div>
</div>

<script>
  const parentDiv = document.getElementById("parent");
  const childDiv = document.getElementById("child");

  parentDiv.addEventListener("click", (event) => {
    alert("Parent clicked!");
  });

  childDiv.addEventListener("click", (event) => {
    // event.stopPropagation(); // Uncomment to stop event from bubbling to parent
    alert("Child clicked!");
  });
</script>
```

- When you click on the child `div`, the child's click event fires first, and then the parent’s (bubbling phase). If `event.stopPropagation()` is called, the parent event won’t fire.

---

### 6. Practical Example: Todo List

#### HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Todo List Example</title>
  </head>
  <body>
    <h1>Todo List</h1>
    <form id="todoForm">
      <input type="text" id="todoInput" placeholder="Add a new todo" required />
      <button type="submit">Add Todo</button>
    </form>

    <ul id="todoList"></ul>

    <script src="app.js"></script>
  </body>
</html>
```

#### JavaScript (`app.js`)

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todoForm");
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");

  // Handle form submission
  todoForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page refresh

    const newTodoText = todoInput.value.trim();
    if (newTodoText !== "") {
      // Create new list item
      const li = document.createElement("li");
      li.textContent = newTodoText;

      // Create remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.style.marginLeft = "10px";

      // Attach event listener to remove button
      removeBtn.addEventListener("click", () => {
        todoList.removeChild(li);
      });

      // Append button to li, and li to the list
      li.appendChild(removeBtn);
      todoList.appendChild(li);

      // Clear input field
      todoInput.value = "";
    }
  });
});
```

- **Key Points**:
  - We used `DOMContentLoaded` to ensure the DOM is fully loaded before we add event listeners.
  - We selected the form, input, and list elements by their IDs.
  - We prevented the default form submission with `event.preventDefault()`.
  - We appended new items to the list dynamically.
  - We added a "Remove" button for each item with its own click event listener.

---

**Problem**:  
You want an expanded set of examples (at least 25) demonstrating DOM manipulation and event handling in JavaScript, along with an external file example (a minor project) to illustrate practical use of these concepts in a more comprehensive way.

---

### Examples of DOM Manipulation & Event Handling

#### 1. Select an Element by ID and Change Its Text

```html
<p id="example1">Hello World</p>
<script>
  const p = document.getElementById("example1");
  p.textContent = "Hello DOM!";
</script>
```

- **Key Point**: Uses `getElementById` to select a single element and update its text content.

#### 2. Select Elements by Class and Change Style

```html
<div class="example2">Box 1</div>
<div class="example2">Box 2</div>
<script>
  const boxes = document.getElementsByClassName("example2");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "lightblue";
    boxes[i].style.margin = "5px";
  }
</script>
```

- **Key Point**: Uses `getElementsByClassName` to select multiple elements and apply styles.

#### 3. Select Elements by Tag Name and Console Log

```html
<ul>
  <li>Item A</li>
  <li>Item B</li>
  <li>Item C</li>
</ul>
<script>
  const listItems = document.getElementsByTagName("li");
  for (let i = 0; i < listItems.length; i++) {
    console.log(listItems[i].textContent);
  }
</script>
```

- **Key Point**: Uses `getElementsByTagName` to retrieve all `<li>` elements and log their text.

#### 4. Use Query Selector for Complex Selection

```html
<div class="parent">
  <p class="child">Paragraph 1</p>
  <p class="child">Paragraph 2</p>
</div>
<script>
  const firstChild = document.querySelector(".parent .child");
  console.log(firstChild.textContent); // "Paragraph 1"

  const allChildren = document.querySelectorAll(".parent .child");
  console.log(allChildren.length); // 2
</script>
```

- **Key Point**: `querySelector` returns the first match, `querySelectorAll` returns all matches as a NodeList.

#### 5. Change Inner HTML

```html
<div id="content">Original Text</div>
<script>
  const content = document.getElementById("content");
  content.innerHTML = "<strong>Replaced with bold text!</strong>";
</script>
```

- **Key Point**: Replaces entire HTML content of an element. Use cautiously to avoid XSS issues with user input.

#### 6. Create and Append a New Element

```html
<ul id="fruits">
  <li>Apple</li>
</ul>
<script>
  const fruitsList = document.getElementById("fruits");
  const newFruit = document.createElement("li");
  newFruit.textContent = "Banana";
  fruitsList.appendChild(newFruit); // adds "Banana" to list
</script>
```

- **Key Point**: Demonstrates how to dynamically create and append DOM nodes.

#### 7. Insert an Element Before Another

```html
<ul id="myList">
  <li id="item1">Item 1</li>
  <li id="item2">Item 2</li>
</ul>
<script>
  const myList = document.getElementById("myList");
  const item1 = document.getElementById("item1");

  const newItem = document.createElement("li");
  newItem.textContent = "New Item";

  myList.insertBefore(newItem, item1);
</script>
```

- **Key Point**: `insertBefore` lets you control placement relative to existing elements.

#### 8. Remove an Element

```html
<div id="removeMe">Delete This!</div>
<script>
  const removeMeDiv = document.getElementById("removeMe");
  removeMeDiv.remove();
</script>
```

- **Key Point**: The `.remove()` method removes an element from the DOM.

#### 9. Toggle a CSS Class

```html
<button id="btnToggle">Toggle Highlight</button>
<p id="text9" class="highlight">Hover to highlight me!</p>

<style>
  .highlight {
    background-color: yellow;
  }
</style>

<script>
  const btnToggle = document.getElementById("btnToggle");
  const text9 = document.getElementById("text9");

  btnToggle.addEventListener("click", () => {
    text9.classList.toggle("highlight");
  });
</script>
```

- **Key Point**: `classList.toggle()` adds the class if it’s missing or removes it if it exists.

#### 10. Update Element Attributes

```html
<img id="img10" src="old.jpg" alt="Old Image" />
<button id="changeSrc">Change Image</button>
<script>
  const changeSrcBtn = document.getElementById("changeSrc");
  const myImage = document.getElementById("img10");

  changeSrcBtn.addEventListener("click", () => {
    myImage.setAttribute("src", "new.jpg");
    myImage.setAttribute("alt", "New Image");
  });
</script>
```

- **Key Point**: Use `setAttribute` to modify element attributes dynamically.

#### 11. Listen for a Click Event

```html
<button id="btn11">Click Me</button>
<script>
  const btn11 = document.getElementById("btn11");
  btn11.addEventListener("click", () => {
    alert("Button Clicked!");
  });
</script>
```

- **Key Point**: Simple event listener that triggers an alert on click.

#### 12. Listen for Mouse Over / Mouse Out

```html
<div id="hoverBox" style="width:100px; height:100px; background:lightgray;">
  Hover over me
</div>
<script>
  const hoverBox = document.getElementById("hoverBox");
  hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.background = "lightgreen";
  });
  hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.background = "lightgray";
  });
</script>
```

- **Key Point**: Changes background color on mouseover and mouseout.

#### 13. Capture Text Input in Real-time

```html
<input type="text" id="input13" placeholder="Type something..." />
<p id="display13"></p>
<script>
  const input13 = document.getElementById("input13");
  const display13 = document.getElementById("display13");

  input13.addEventListener("input", (e) => {
    display13.textContent = e.target.value;
  });
</script>
```

- **Key Point**: The `input` event fires on every keystroke, showing real-time updates.

#### 14. Handle Form Submission

```html
<form id="form14">
  <input type="text" id="name14" placeholder="Enter name" required />
  <button type="submit">Submit</button>
</form>
<script>
  const form14 = document.getElementById("form14");

  form14.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page reload
    alert("Form Submitted!");
  });
</script>
```

- **Key Point**: Prevent default behavior to handle form data in JavaScript.

#### 15. Keydown Event (Detecting Key Press)

```html
<input type="text" id="input15" placeholder="Type something..." />
<script>
  const input15 = document.getElementById("input15");
  input15.addEventListener("keydown", (e) => {
    console.log("Key pressed:", e.key);
  });
</script>
```

- **Key Point**: Logs which key was pressed while typing.

#### 16. Event Bubbling Example

```html
<div id="parent16" style="padding:10px; background: lightblue;">
  Parent Div
  <div id="child16" style="margin:10px; background: white;">Child Div</div>
</div>
<script>
  const parent16 = document.getElementById("parent16");
  const child16 = document.getElementById("child16");

  parent16.addEventListener("click", () => {
    alert("Parent Clicked!");
  });

  child16.addEventListener("click", (e) => {
    // e.stopPropagation(); // uncomment to stop event bubbling
    alert("Child Clicked!");
  });
</script>
```

- **Key Point**: Demonstrates how clicking on the child also triggers the parent’s click event (bubbling phase).

#### 17. Event Delegation

```html
<ul id="list17">
  <li>Item A</li>
  <li>Item B</li>
  <li>Item C</li>
</ul>
<script>
  const list17 = document.getElementById("list17");

  list17.addEventListener("click", (e) => {
    if (e.target && e.target.nodeName === "LI") {
      alert(`You clicked on ${e.target.textContent}`);
    }
  });
</script>
```

- **Key Point**: Instead of adding click events to each `<li>`, one listener on the parent `<ul>` handles them all.

#### 18. Dynamically Generate a Table

```html
<div id="tableContainer"></div>
<script>
  const data = [
    ["Name", "Age", "City"],
    ["John", 25, "New York"],
    ["Alice", 30, "London"],
    ["Bob", 28, "Paris"],
  ];
  const container = document.getElementById("tableContainer");
  const table = document.createElement("table");

  data.forEach((rowData) => {
    const row = document.createElement("tr");
    rowData.forEach((cellData) => {
      const cell = document.createElement("td");
      cell.textContent = cellData;
      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  container.appendChild(table);
</script>
```

- **Key Point**: Shows how to build a table with multiple rows and columns dynamically.

#### 19. Click to Hide / Show an Element

```html
<button id="hideShow19">Hide/Show</button>
<p id="paragraph19">Toggle me!</p>
<script>
  const btn19 = document.getElementById("hideShow19");
  const para19 = document.getElementById("paragraph19");

  btn19.addEventListener("click", () => {
    if (para19.style.display === "none") {
      para19.style.display = "block";
    } else {
      para19.style.display = "none";
    }
  });
</script>
```

- **Key Point**: A simple toggle using inline `style.display`.

#### 20. Live Character Counter

```html
<textarea id="message20" maxlength="100"></textarea>
<p id="counter20">0 / 100</p>
<script>
  const message20 = document.getElementById("message20");
  const counter20 = document.getElementById("counter20");

  message20.addEventListener("input", () => {
    const currentLength = message20.value.length;
    counter20.textContent = `${currentLength} / 100`;
  });
</script>
```

- **Key Point**: Dynamically updates a counter as the user types in a textarea.

#### 21. Changing Theme (Day/Night Mode Toggle)

```html
<button id="themeBtn">Switch Theme</button>
<style>
  body.day-mode {
    background-color: #ffffff;
    color: #000000;
  }
  body.night-mode {
    background-color: #000000;
    color: #ffffff;
  }
</style>
<script>
  const themeBtn = document.getElementById("themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("day-mode");
    document.body.classList.toggle("night-mode");
  });
</script>
```

- **Key Point**: A quick way to switch themes by toggling classes on the `body`.

#### 22. Simple Image Slider

```html
<img id="sliderImg" src="image1.jpg" style="width:300px;" />
<button id="prevBtn">Previous</button>
<button id="nextBtn">Next</button>
<script>
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
  let index = 0;
  const sliderImg = document.getElementById("sliderImg");

  document.getElementById("prevBtn").addEventListener("click", () => {
    index = index === 0 ? images.length - 1 : index - 1;
    sliderImg.src = images[index];
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    index = index === images.length - 1 ? 0 : index + 1;
    sliderImg.src = images[index];
  });
</script>
```

- **Key Point**: Cycle through an array of image sources with a next/previous button.

#### 23. Animate an Element’s Position

```html
<div
  id="box23"
  style="width:50px; height:50px; background:red; position:absolute;"
></div>
<button id="moveBtn23">Move Right</button>
<script>
  const box23 = document.getElementById("box23");
  const moveBtn23 = document.getElementById("moveBtn23");
  let position = 0;

  moveBtn23.addEventListener("click", () => {
    position += 10;
    box23.style.left = position + "px";
  });
</script>
```

- **Key Point**: Shows how to change an element’s position in response to an event.

#### 24. Simple Progress Bar Simulation

```html
<div style="width:300px; background:#ccc; height:20px;">
  <div id="progress24" style="width:0; background:green; height:100%"></div>
</div>
<button id="incrementBtn">Increment</button>
<script>
  const progress24 = document.getElementById("progress24");
  let progressValue = 0;

  document.getElementById("incrementBtn").addEventListener("click", () => {
    if (progressValue < 100) {
      progressValue += 10;
      progress24.style.width = progressValue + "%";
    }
  });
</script>
```

- **Key Point**: Dynamically increase the width of a progress bar.

#### 25. Countdown Timer

```html
<p id="countdown25">10</p>
<button id="startTimer25">Start Countdown</button>
<script>
  const countdown25 = document.getElementById("countdown25");
  const startTimer25 = document.getElementById("startTimer25");

  startTimer25.addEventListener("click", () => {
    let timeLeft = 10;
    countdown25.textContent = timeLeft;

    const timer = setInterval(() => {
      timeLeft--;
      countdown25.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        countdown25.textContent = "Time's up!";
      }
    }, 1000);
  });
</script>
```

- **Key Point**: Uses `setInterval` to decrement a counter every second and update the DOM.

---

## **Minor Project**: KBC Quiz App

Below is a two-file project: `index.html` and `script.js`. This project demonstrates form submission, dynamic element creation, removing elements, and more.

> Note: This is not the actual implementation (see KBC Quiz folder)

### **File 1: `index.html`**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Simple Quiz</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 20px;
      }
      #quiz-container {
        max-width: 600px;
        margin: 0 auto;
      }
      .question {
        margin-bottom: 15px;
      }
      .hidden {
        display: none;
      }
      #result.correct {
        color: green;
      }
      #result.incorrect {
        color: red;
      }
    </style>
  </head>
  <body>
    <div id="quiz-container">
      <h1>Simple Quiz</h1>
      <p id="instructions">Answer the questions below and submit!</p>

      <form id="quizForm">
        <div class="question">
          <label>1) What is the capital of France?</label><br />
          <input type="radio" name="q1" value="London" /> London<br />
          <input type="radio" name="q1" value="Paris" /> Paris<br />
          <input type="radio" name="q1" value="Rome" /> Rome
        </div>

        <div class="question">
          <label
            >2) Which language is used for web development (Front-end)?</label
          ><br />
          <input type="checkbox" name="q2" value="JS" /> JavaScript<br />
          <input type="checkbox" name="q2" value="Python" /> Python<br />
          <input type="checkbox" name="q2" value="C++" /> C++
        </div>

        <button type="submit">Submit Quiz</button>
      </form>

      <p id="result" class="hidden"></p>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

### **File 2: `script.js`**

```javascript
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.getElementById("quizForm");
  const resultParagraph = document.getElementById("result");

  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Gather answers
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelectorAll('input[name="q2"]:checked');

    // Basic check if user selected at least one option for each question
    if (!q1 || q2.length === 0) {
      resultParagraph.textContent = "Please answer all questions!";
      resultParagraph.classList.remove("hidden", "correct", "incorrect");
      resultParagraph.classList.add("incorrect");
      return;
    }

    // Evaluate answers
    let score = 0;
    // Q1 correct answer = "Paris"
    if (q1.value === "Paris") {
      score++;
    }

    // Q2 correct answer = "JS" only
    if (q2.length === 1 && q2[0].value === "JS") {
      score++;
    }

    // Show result
    if (score === 2) {
      resultParagraph.textContent = `Perfect! You scored ${score} out of 2.`;
      resultParagraph.classList.remove("hidden", "incorrect");
      resultParagraph.classList.add("correct");
    } else {
      resultParagraph.textContent = `You scored ${score} out of 2. Try again!`;
      resultParagraph.classList.remove("hidden", "correct");
      resultParagraph.classList.add("incorrect");
    }
  });
});
```

**How it works**:

1. When the user clicks "Submit Quiz," we prevent the form from reloading the page (`event.preventDefault()`).
2. We collect user answers using `document.querySelector()` and `document.querySelectorAll()`.
3. We perform a simple score calculation based on the answers.
4. Finally, we display feedback in the `#result` paragraph, toggling CSS classes to show a success or error color.

You can expand this quiz to include more questions, add timers, or store user scores locally.

---

## **Advice**

1. **Practice**: The best way to master DOM manipulation is by building small projects like a Todo list, a calculator, or a simple game.
2. **Performance**: If you’re manipulating the DOM frequently, consider techniques like using `documentFragment` or batching DOM updates to avoid performance issues.
3. **Readability**: Keep your code organized by grouping event listeners and DOM manipulations in functions.
4. **Security**: Always be cautious with user inputs when using `innerHTML` to avoid XSS (Cross-Site Scripting) attacks.

---

## **Sources**

- [MDN Web Docs on DOM Manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN Web Docs on Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [W3Schools on JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
