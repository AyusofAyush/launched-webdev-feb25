# Basics HTML & CSS Fundamentals

## Basic CSS Syntax

CSS (Cascading Style Sheets) is used to style and layout web pages. Here's an overview of the basic syntax and how CSS is structured:

### Basic CSS Syntax

A CSS rule consists of a selector and a declaration block.

```css
selector {
  property: value;
  property: value;
}
```

### Example

```css
/* This is a comment */
body {
  background-color: #f0f0f0; /* Light gray background */
  font-family: Arial, sans-serif; /* Font family */
}

h1 {
  color: #333; /* Dark gray text color */
  text-align: center; /* Centered text */
}

p {
  line-height: 1.6; /* Line height */
  margin: 20px 0; /* Top and bottom margin */
}

a {
  color: #007bff; /* Link color */
  text-decoration: none; /* No underline */
}

a:hover {
  text-decoration: underline; /* Underline on hover */
}
```

### Explanation

1. **Comments**:

   - `/* This is a comment */`
   - Comments are used to explain the code and are ignored by the browser.

2. **Selectors**:

   - Define which HTML elements the CSS rules apply to.
   - Examples: `body`, `h1`, `p`, `a`.

3. **Properties and Values**:

   - Properties are the aspects of the elements you want to style (e.g., `color`, `background-color`, `font-family`).
   - Values are the settings for those properties (e.g., `#333`, `#f0f0f0`, `Arial`).

4. **Declaration Block**:
   - Contains one or more declarations separated by semicolons.
   - Each declaration includes a property and a value, separated by a colon.
   - Example: `color: #333; text-align: center;`

### CSS Selectors

1. **Element Selector**:

   - Selects all elements of a given type.
   - Example: `h1 { color: blue; }`

2. **Class Selector**:

   - Selects all elements with a given class.
   - Example: `.class-name { color: red; }`
   - HTML: `<div class="class-name">...</div>`

3. **ID Selector**:

   - Selects the element with a given ID.
   - Example: `#id-name { color: green; }`
   - HTML: `<div id="id-name">...</div>`

4. **Attribute Selector**:

   - Selects elements with a specific attribute.
   - Example: `[type="text"] { border: 1px solid #000; }`
   - HTML: `<input type="text">`

5. **Pseudo-classes**:

   - Selects elements based on their state.
   - Example: `a:hover { color: orange; }`

6. **Pseudo-elements**:
   - Selects parts of an element.
   - Example: `p::first-line { font-weight: bold; }`

### Combining Selectors

You can combine selectors to apply styles in a more specific way:

1. **Descendant Selector**:

   - Example: `div p { color: blue; }`
   - Selects all `<p>` elements inside `<div>` elements.

2. **Child Selector**:

   - Example: `div > p { color: blue; }`
   - Selects all `<p>` elements that are direct children of `<div>` elements.

3. **Adjacent Sibling Selector**:

   - Example: `h1 + p { margin-top: 0; }`
   - Selects the first `<p>` element immediately following an `<h1>` element.

4. **General Sibling Selector**:
   - Example: `h1 ~ p { color: red; }`
   - Selects all `<p>` elements that are siblings of an `<h1>` element.

This should give you a solid foundation for understanding and writing basic CSS.

### Specificity Hierarchy

Every CSS selector has its place in the specificity hierarchy.

There are four categories which define the specificity level of a selector:

1. Inline styles - Example: `<h1 style="color: pink;">`
2. IDs - Example: #navbar
3. Classes, pseudo-classes, attribute selectors - Example: .test, :hover, [ href ]
4. Elements and pseudo-elements - Example: h1, ::before

Note: Inline style gets a specificity value of 1000, and is always given the highest priority!

**Note 2: There is one exception to this rule: if you use the !important rule, it will even override inline styles!**

[Refer here](https://www.w3schools.com/css/css_specificity.asp)

## Ways of using CSS in HTML

There are three main ways to use CSS in an HTML document: inline CSS, internal CSS, and external CSS. Each method has its own use cases, advantages, and disadvantages.

### 1. Inline CSS

Inline CSS is used to apply a unique style to a single HTML element directly within the HTML tag using the `style` attribute.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Inline CSS Example</title>
  </head>
  <body>
    <h1 style="color: blue; text-align: center;">This is a heading</h1>
    <p style="color: red; font-size: 20px;">This is a paragraph.</p>
  </body>
</html>
```

**Advantages:**

- Quick and easy for applying styles to a single element.
- Useful for testing and small changes.

**Disadvantages:**

- Not efficient for large projects or multiple elements.
- Makes the HTML code less readable and harder to maintain.
- Does not promote separation of content and style.

### 2. Internal CSS

Internal CSS is used to define styles for a single HTML document. It is included within the `<head>` section of the HTML document using the `<style>` tag.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Internal CSS Example</title>
    <style>
      body {
        background-color: #f0f0f0;
        font-family: Arial, sans-serif;
      }
      h1 {
        color: blue;
        text-align: center;
      }
      p {
        color: red;
        font-size: 20px;
      }
    </style>
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

**Advantages:**

- Useful for styling a single page or document.
- Keeps styles centralized within the document.
- Easier to maintain compared to inline styles.

**Disadvantages:**

- Styles are not reusable across multiple documents.
- Still mixes content and presentation within the same file.

### 3. External CSS

External CSS involves linking an external `.css` file to the HTML document using the `<link>` tag in the `<head>` section. This method is ideal for applying styles to multiple HTML documents.

**Example:**

**HTML File (index.html):**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>External CSS Example</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

**CSS File (styles.css):**

```css
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

h1 {
  color: blue;
  text-align: center;
}

p {
  color: red;
  font-size: 20px;
}
```

**Advantages:**

- Promotes separation of content and style.
- Styles can be reused across multiple HTML documents.
- Makes the HTML code cleaner and easier to read.
- Easier to maintain and update styles.

**Disadvantages:**

- Requires an additional HTTP request to load the CSS file.
- Not as immediate as inline or internal CSS for small changes.

### Conclusion

- **Inline CSS**: Best for quick, unique styles or small changes.
- **Internal CSS**: Useful for single-page applications or documents.
- **External CSS**: Ideal for large projects with multiple pages, promoting reusability and maintainability.

Each method has its own use cases, and often a combination of these methods is used in real-world projects to achieve the desired styling efficiently.

## HTML Tags & attributes

### Advanced Attributes

1. **Global Attributes**:

   - `id`, `class`, `style`, `title`, `data-*`

   ```html
   <div
     id="uniqueID"
     class="className"
     style="color: blue;"
     title="Tooltip"
     data-info="extra data"
   >
     Content
   </div>
   ```

2. **`<input>` Attributes**:

   - `type`, `name`, `value`, `placeholder`, `required`, `readonly`, `disabled`

   ```html
   <input
     type="text"
     name="username"
     value="John Doe"
     placeholder="Enter your name"
     required
   />
   ```

3. **ARIA (Accessible Rich Internet Applications) Attributes**:

   - `aria-label`, `aria-hidden`, `aria-expanded`, `role`

   ```html
   <button aria-label="Close" aria-expanded="false" role="button">X</button>
   ```

4. **`<img>` Attributes**:

   - `src`, `alt`, `width`, `height`, `srcset`

   ```html
   <img
     src="image.jpg"
     alt="Description"
     width="200"
     height="100"
     srcset="image-2x.jpg 2x, image-3x.jpg 3x"
   />
   ```

5. **`<a>` Attributes**:

   - `href`, `target`, `rel`, `download`

   ```html
   <a
     href="https://www.example.com"
     target="_blank"
     rel="noopener noreferrer"
     download="example.pdf"
     >Download Link</a
   >
   ```

6. **`<iframe>` Attributes**:
   - `src`, `width`, `height`, `sandbox`, `allow`
   ```html
   <iframe
     src="https://www.example.com"
     width="600"
     height="400"
     sandbox="allow-scripts"
     allow="autoplay"
   ></iframe>
   ```

This list covers a wide range of HTML tags and attributes, from the basic to the more advanced, commonly used in web development.

## More HTML Tags

### Block & Inline Elements

[Read here](https://www.w3schools.com/html/html_blocks.asp)

## Semantic HTML

Semantic HTML refers to the use of HTML tags that provide meaning to the content they enclose, rather than just presenting it visually. These tags clearly describe the role and structure of the content, which enhances the readability and accessibility of the web page for both users and machines, such as search engines and screen readers.

### Benefits of Semantic HTML

1. **Improved Accessibility**: Screen readers and other assistive technologies can better interpret and navigate the content.
2. **Better SEO**: Search engines can more accurately understand the content, which can improve search rankings.
3. **Easier Maintenance**: Code is more readable and understandable for developers, making it easier to maintain and update.
4. **Consistent Styling**: Helps in applying consistent styling and layout through CSS.

### Common Semantic HTML Tags

Here are some commonly used semantic HTML tags:

1. **`<header>`**: Defines a header for a document or section.

   ```html
   <header>
     <h1>Website Title</h1>
     <nav>
       <a href="#home">Home</a>
       <a href="#about">About</a>
       <a href="#contact">Contact</a>
     </nav>
   </header>
   ```

2. **`<nav>`**: Defines a set of navigation links.

   ```html
   <nav>
     <a href="#home">Home</a>
     <a href="#about">About</a>
     <a href="#contact">Contact</a>
   </nav>
   ```

3. **`<main>`**: Specifies the main content of the document.

   ```html
   <main>
     <article>
       <h2>Article Title</h2>
       <p>Article content goes here.</p>
     </article>
   </main>
   ```

4. **`<section>`**: Defines a section of content, typically with a heading.

   ```html
   <section>
     <h2>Section Title</h2>
     <p>Section content goes here.</p>
   </section>
   ```

5. **`<article>`**: Represents a self-contained piece of content that can be independently distributed.

   ```html
   <article>
     <h2>Article Title</h2>
     <p>Article content goes here.</p>
   </article>
   ```

6. **`<aside>`**: Defines content that is tangentially related to the content around it (like a sidebar).

   ```html
   <aside>
     <h2>Related Links</h2>
     <p>Links to related articles.</p>
   </aside>
   ```

7. **`<footer>`**: Represents the footer of a document or section.

   ```html
   <footer>
     <p>&copy; 2024 Your Company</p>
   </footer>
   ```

8. **`<figure>`**: Contains media content along with a caption.

   ```html
   <figure>
     <img src="image.jpg" alt="Description" />
     <figcaption>Image caption goes here.</figcaption>
   </figure>
   ```

9. **`<figcaption>`**: Defines a caption for a `<figure>`.

   ```html
   <figure>
     <img src="image.jpg" alt="Description" />
     <figcaption>Image caption goes here.</figcaption>
   </figure>
   ```

10. **`<mark>`**: Highlights text that has relevance in the context.
    ```html
    <p>This is a <mark>highlighted</mark> text.</p>
    ```

### Example of Semantic HTML

Here’s an example of how semantic HTML elements can be used together:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Semantic HTML Example</title>
  </head>
  <body>
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <article>
        <header>
          <h2>Article Title</h2>
          <p>By <a href="#author">Author Name</a></p>
        </header>
        <p>
          Article content goes here. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </article>

      <section>
        <h2>About Us</h2>
        <p>Information about the company.</p>
      </section>
    </main>

    <aside>
      <h2>Related Links</h2>
      <ul>
        <li><a href="#link1">Related Link 1</a></li>
        <li><a href="#link2">Related Link 2</a></li>
      </ul>
    </aside>

    <footer>
      <p>&copy; 2024 My Website</p>
    </footer>
  </body>
</html>
```

In this example, the semantic HTML elements help define the different parts of the page, making it clear and meaningful for both developers and search engines.

Here are some **CSS Syntax Examples** along with some **Advanced CSS Styles** to help you understand most of them.

---

### **Basic CSS Syntax**
CSS follows the rule:
```css
selector {
    property: value;
}
```
Example:
```css
p {
    color: blue;
    font-size: 16px;
}
```
This applies blue text color and a font size of 16px to all `<p>` elements.

---

## **Basic CSS Styling Examples**
### 1️⃣ **Selectors**
#### Example: Selecting all `<p>` elements
```css
p {
    color: red;
}
```

### 2️⃣ **Class Selector**
#### Example: Selecting elements with `.classname`
```css
.text-blue {
    color: blue;
}
```
```html
<p class="text-blue">This is blue text</p>
```

### 3️⃣ **ID Selector**
#### Example: Selecting an element with `#idname`
```css
#unique {
    font-size: 20px;
    font-weight: bold;
}
```
```html
<p id="unique">This is unique</p>
```

### 4️⃣ **Grouping Selectors**
#### Example: Applying styles to multiple elements
```css
h1, h2, p {
    font-family: Arial, sans-serif;
}
```

### 5️⃣ **Descendant Selector**
#### Example: Selecting `<span>` inside `<div>`
```css
div span {
    color: green;
}
```
```html
<div>
    <span>This will be green</span>
</div>
```

### 6️⃣ **Child Selector (`>` )**
#### Example: Direct child selection
```css
div > p {
    color: orange;
}
```

---

## **Advanced CSS Styles**
### 7️⃣ **Flexbox**
#### Example: Center content using Flexbox
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

### 8️⃣ **Grid Layout**
#### Example: Creating a simple grid
```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
```

### 9️⃣ **Pseudo-Classes**
#### Example: Styling `:hover`
```css
button:hover {
    background-color: yellow;
}
```

### 🔟 **Pseudo-Elements**
#### Example: Using `::before`
```css
p::before {
    content: "🔥 ";
}
```

### 1️⃣1️⃣ **Animations**
#### Example: A simple animation
```css
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.fade {
    animation: fadeIn 2s ease-in;
}
```

### 1️⃣2️⃣ **Transitions**
#### Example: Smooth color change
```css
button {
    transition: background-color 0.3s ease-in-out;
}

button:hover {
    background-color: red;
}
```

### 1️⃣3️⃣ **CSS Variables**
#### Example: Defining and using variables
```css
:root {
    --primary-color: blue;
}

h1 {
    color: var(--primary-color);
}
```

### 1️⃣4️⃣ **Glassmorphism**
#### Example: Frosted glass effect
```css
.glass {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 10px;
}
```

### 1️⃣5️⃣ **Parallax Scrolling**
#### Example: Background moves slower than content
```css
.parallax {
    background: url('image.jpg') no-repeat center;
    background-attachment: fixed;
    background-size: cover;
}
```

---
