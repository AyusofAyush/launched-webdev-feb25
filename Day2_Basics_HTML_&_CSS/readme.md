# Basics HTML & CSS Fundamentals

## Basic HTML Structure
Sure! Here's a breakdown of the basic structure and syntax of an HTML document with explanations for each part:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>This is the home section of the website.</p>
        </section>
        <section id="about">
            <h2>About Section</h2>
            <p>This is the about section of the website.</p>
        </section>
        <section id="contact">
            <h2>Contact Section</h2>
            <p>This is the contact section of the website.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
    <script src="scripts.js"></script>
</body>
</html>
```

### Explanation:

1. **`<!DOCTYPE html>`**:
   - Declares the document type and version of HTML (HTML5 in this case).

2. **`<html lang="en">`**:
   - The root element of an HTML document.
   - The `lang` attribute specifies the language of the document (English here).

3. **`<head>`**:
   - Contains meta-information about the document, such as its title and links to external resources.

4. **`<meta charset="UTF-8">`**:
   - Specifies the character encoding for the document (UTF-8 is a standard encoding).

5. **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**:
   - Ensures the page is responsive by setting the viewport's width to the device's width.

6. **`<title>Document Title</title>`**:
   - Sets the title of the document, which appears in the browser's title bar or tab.

7. **`<link rel="stylesheet" href="styles.css">`**:
   - Links to an external CSS file for styling the document.

8. **`<body>`**:
   - Contains the content of the document that will be displayed in the browser.

9. **`<header>`**:
   - A section for introductory content or navigational links.

10. **`<h1>Welcome to My Website</h1>`**:
    - A heading element, with `h1` being the highest level.

11. **`<nav>`**:
    - A section for navigation links.

12. **`<ul>`**:
    - An unordered list.

13. **`<li><a href="#home">Home</a></li>`**:
    - A list item containing a hyperlink.

14. **`<main>`**:
    - The main content area of the document.

15. **`<section id="home">`**:
    - A section of content, with an `id` attribute for internal linking.

16. **`<h2>Home Section</h2>`**:
    - A subheading element.

17. **`<p>This is the home section of the website.</p>`**:
    - A paragraph of text.

18. **`<footer>`**:
    - A section for footer content, like copyright information.

19. **`<script src="scripts.js"></script>`**:
    - Links to an external JavaScript file for adding interactivity to the document.

This basic structure provides a foundation for any HTML document, ensuring that it is well-organized and easy to understand.

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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External CSS Example</title>
    <link rel="stylesheet" href="styles.css">
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

Sure! Here is a comprehensive list of HTML tags along with examples, including some advanced tags and attributes. 

### Basic HTML Tags

1. **`<!DOCTYPE html>`**
   ```html
   <!DOCTYPE html>
   ```

2. **`<html>`**
   ```html
   <html lang="en">
   </html>
   ```

3. **`<head>`**
   ```html
   <head>
       <meta charset="UTF-8">
   </head>
   ```

4. **`<title>`**
   ```html
   <title>Page Title</title>
   ```

5. **`<body>`**
   ```html
   <body>
   </body>
   ```

6. **`<h1>` to `<h6>`**
   ```html
   <h1>Heading 1</h1>
   <h6>Heading 6</h6>
   ```

7. **`<p>`**
   ```html
   <p>This is a paragraph.</p>
   ```

8. **`<br>`**
   ```html
   Line break<br>Another line
   ```

9. **`<hr>`**
   ```html
   <hr>
   ```

10. **`<a>`**
    ```html
    <a href="https://www.example.com">This is a link</a>
    ```

11. **`<img>`**
    ```html
    <img src="image.jpg" alt="Description">
    ```

12. **`<ul>`, `<ol>`, `<li>`**
    ```html
    <ul>
        <li>Unordered list item</li>
    </ul>
    <ol>
        <li>Ordered list item</li>
    </ol>
    ```

13. **`<table>`, `<tr>`, `<th>`, `<td>`**
    ```html
    <table>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </table>
    ```

14. **`<form>`, `<input>`, `<label>`, `<button>`**
    ```html
    <form action="/submit">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <button type="submit">Submit</button>
    </form>
    ```

15. **`<div>`**
    ```html
    <div>
        Content inside a div.
    </div>
    ```

16. **`<span>`**
    ```html
    <span>Inline element</span>
    ```

### Advanced HTML Tags

1. **`<section>`**
    ```html
    <section>
        <h2>Section Title</h2>
        <p>Section content</p>
    </section>
    ```

2. **`<article>`**
    ```html
    <article>
        <h2>Article Title</h2>
        <p>Article content</p>
    </article>
    ```

3. **`<aside>`**
    ```html
    <aside>
        <p>Sidebar content</p>
    </aside>
    ```

4. **`<nav>`**
    ```html
    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </nav>
    ```

5. **`<header>`**
    ```html
    <header>
        <h1>Website Header</h1>
    </header>
    ```

6. **`<footer>`**
    ```html
    <footer>
        <p>Footer content</p>
    </footer>
    ```

7. **`<figure>`, `<figcaption>`**
    ```html
    <figure>
        <img src="image.jpg" alt="Image description">
        <figcaption>Image caption</figcaption>
    </figure>
    ```

8. **`<main>`**
    ```html
    <main>
        <h1>Main Content</h1>
        <p>Main content goes here</p>
    </main>
    ```

9. **`<time>`**
    ```html
    <time datetime="2024-07-21">July 21, 2024</time>
    ```

10. **`<mark>`**
    ```html
    <p>This is <mark>highlighted</mark> text.</p>
    ```

11. **`<progress>`**
    ```html
    <progress value="70" max="100">70%</progress>
    ```

12. **`<meter>`**
    ```html
    <meter value="0.6">60%</meter>
    ```

13. **`<details>`, `<summary>`**
    ```html
    <details>
        <summary>More Info</summary>
        <p>Details go here</p>
    </details>
    ```

14. **`<dialog>`**
    ```html
    <dialog open>
        <p>Dialog content</p>
        <button>Close</button>
    </dialog>
    ```

15. **`<template>`**
    ```html
    <template id="my-template">
        <p>This is a template.</p>
    </template>
    ```

### Advanced Attributes

1. **Global Attributes**:
   - `id`, `class`, `style`, `title`, `data-*`
   ```html
   <div id="uniqueID" class="className" style="color: blue;" title="Tooltip" data-info="extra data">Content</div>
   ```

2. **`<input>` Attributes**:
   - `type`, `name`, `value`, `placeholder`, `required`, `readonly`, `disabled`
   ```html
   <input type="text" name="username" value="John Doe" placeholder="Enter your name" required>
   ```

3. **ARIA (Accessible Rich Internet Applications) Attributes**:
   - `aria-label`, `aria-hidden`, `aria-expanded`, `role`
   ```html
   <button aria-label="Close" aria-expanded="false" role="button">X</button>
   ```

4. **`<img>` Attributes**:
   - `src`, `alt`, `width`, `height`, `srcset`
   ```html
   <img src="image.jpg" alt="Description" width="200" height="100" srcset="image-2x.jpg 2x, image-3x.jpg 3x">
   ```

5. **`<a>` Attributes**:
   - `href`, `target`, `rel`, `download`
   ```html
   <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" download="example.pdf">Download Link</a>
   ```

6. **`<iframe>` Attributes**:
   - `src`, `width`, `height`, `sandbox`, `allow`
   ```html
   <iframe src="https://www.example.com" width="600" height="400" sandbox="allow-scripts" allow="autoplay"></iframe>
   ```

This list covers a wide range of HTML tags and attributes, from the basic to the more advanced, commonly used in web development.


## More HTML Tags


### Block & Inline Elements

[Read here](https://www.w3schools.com/html/html_blocks.asp)

Sure! Here's a comprehensive list of HTML tags with short explanations and examples:

### Basic Document Structure

1. **`<!DOCTYPE>`**
   - Defines the document type.
   ```html
   <!DOCTYPE html>
   ```

2. **`<html>`**
   - Root element of an HTML document.
   ```html
   <html lang="en"></html>
   ```

3. **`<head>`**
   - Contains meta-information about the document.
   ```html
   <head>
       <meta charset="UTF-8">
       <title>Page Title</title>
   </head>
   ```

4. **`<body>`**
   - Contains the content of the document.
   ```html
   <body></body>
   ```

### Metadata and Links

5. **`<title>`**
   - Sets the title of the document.
   ```html
   <title>Document Title</title>
   ```

6. **`<meta>`**
   - Provides metadata about the HTML document.
   ```html
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

7. **`<link>`**
   - Links to external resources like stylesheets.
   ```html
   <link rel="stylesheet" href="styles.css">
   ```

8. **`<style>`**
   - Embeds CSS styles.
   ```html
   <style>
       body { background-color: #f0f0f0; }
   </style>
   ```

9. **`<script>`**
   - Embeds or references JavaScript.
   ```html
   <script src="script.js"></script>
   ```

### Text Content

10. **`<h1>` to `<h6>`**
    - Headings, `<h1>` is the highest and `<h6>` the lowest level.
    ```html
    <h1>Main Heading</h1>
    <h2>Sub Heading</h2>
    ```

11. **`<p>`**
    - Paragraph.
    ```html
    <p>This is a paragraph.</p>
    ```

12. **`<br>`**
    - Line break.
    ```html
    Line break<br>New line
    ```

13. **`<hr>`**
    - Horizontal rule.
    ```html
    <hr>
    ```

14. **`<blockquote>`**
    - Block quotation.
    ```html
    <blockquote>Quote</blockquote>
    ```

15. **`<pre>`**
    - Preformatted text.
    ```html
    <pre>
    Preformatted
    Text
    </pre>
    ```

16. **`<b>`**
    - Bold text.
    ```html
    <b>Bold text</b>
    ```

17. **`<strong>`**
    - Important text.
    ```html
    <strong>Strong text</strong>
    ```

18. **`<i>`**
    - Italic text.
    ```html
    <i>Italic text</i>
    ```

19. **`<em>`**
    - Emphasized text.
    ```html
    <em>Emphasized text</em>
    ```

20. **`<mark>`**
    - Marked (highlighted) text.
    ```html
    <mark>Marked text</mark>
    ```

21. **`<small>`**
    - Smaller text.
    ```html
    <small>Small text</small>
    ```

22. **`<del>`**
    - Deleted (strikethrough) text.
    ```html
    <del>Deleted text</del>
    ```

23. **`<ins>`**
    - Inserted text.
    ```html
    <ins>Inserted text</ins>
    ```

24. **`<sub>`**
    - Subscript text.
    ```html
    <sub>Subscript text</sub>
    ```

25. **`<sup>`**
    - Superscript text.
    ```html
    <sup>Superscript text</sup>
    ```

### Links and Images

26. **`<a>`**
    - Hyperlink.
    ```html
    <a href="https://example.com">Link</a>
    ```

27. **`<img>`**
    - Image.
    ```html
    <img src="image.jpg" alt="Description">
    ```

### Lists

28. **`<ul>`**
    - Unordered list.
    ```html
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    ```

29. **`<ol>`**
    - Ordered list.
    ```html
    <ol>
        <li>First item</li>
        <li>Second item</li>
    </ol>
    ```

30. **`<li>`**
    - List item.
    ```html
    <li>List item</li>
    ```

31. **`<dl>`**
    - Definition list.
    ```html
    <dl>
        <dt>Term</dt>
        <dd>Definition</dd>
    </dl>
    ```

32. **`<dt>`**
    - Definition term.
    ```html
    <dt>Term</dt>
    ```

33. **`<dd>`**
    - Definition description.
    ```html
    <dd>Description</dd>
    ```

### Tables

34. **`<table>`**
    - Table.
    ```html
    <table>
        <tr>
            <th>Header</th>
            <th>Header</th>
        </tr>
        <tr>
            <td>Data</td>
            <td>Data</td>
        </tr>
    </table>
    ```

35. **`<tr>`**
    - Table row.
    ```html
    <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
    </tr>
    ```

36. **`<th>`**
    - Table header cell.
    ```html
    <th>Header</th>
    ```

37. **`<td>`**
    - Table data cell.
    ```html
    <td>Data</td>
    ```

38. **`<caption>`**
    - Table caption.
    ```html
    <table>
        <caption>Table Caption</caption>
    </table>
    ```

39. **`<thead>`**
    - Table head.
    ```html
    <thead>
        <tr>
            <th>Header</th>
        </tr>
    </thead>
    ```

40. **`<tbody>`**
    - Table body.
    ```html
    <tbody>
        <tr>
            <td>Data</td>
        </tr>
    </tbody>
    ```

41. **`<tfoot>`**
    - Table footer.
    ```html
    <tfoot>
        <tr>
            <td>Footer</td>
        </tr>
    </tfoot>
    ```

### Forms

42. **`<form>`**
    - Form.
    ```html
    <form action="/submit" method="post">
        <input type="text" name="name">
        <button type="submit">Submit</button>
    </form>
    ```

43. **`<input>`**
    - Input field.
    ```html
    <input type="text" name="name">
    ```

44. **`<label>`**
    - Label for an input.
    ```html
    <label for="name">Name:</label>
    <input id="name" type="text">
    ```

45. **`<button>`**
    - Button.
    ```html
    <button type="submit">Submit</button>
    ```

46. **`<select>`**
    - Drop-down list.
    ```html
    <select name="options">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
    </select>
    ```

47. **`<option>`**
    - Option in a drop-down list.
    ```html
    <option value="1">Option 1</option>
    ```

48. **`<textarea>`**
    - Multi-line text input.
    ```html
    <textarea name="message"></textarea>
    ```

49. **`<fieldset>`**
    - Group related elements in a form.
    ```html
    <fieldset>
        <legend>Group Name</legend>
        <label for="name">Name:</label>
        <input id="name" type="text">
    </fieldset>
    ```

50. **`<legend>`**
    - Caption for a `<fieldset>`.
    ```html
    <legend>Group Name</legend>
    ```

### Semantic HTML

51. **`<header>`**
    - Header section of a document.
    ```html
    <header>
        <h1>Website Header</h1>
    </header>
    ```

52. **`<nav>`**
    - Navigation links.
    ```html
    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
    </nav>
    ```

53. **`<main>`**
    - Main content of the document.
    ```html
    <main>


        <h1>Main Content</h1>
        <p>Main content goes here.</p>
    </main>
    ```

54. **`<section>`**
    - Section of a document.
    ```html
    <section>
        <h2>Section Title</h2>
        <p>Section content.</p>
    </section>
    ```

55. **`<article>`**
    - Self-contained content.
    ```html
    <article>
        <h2>Article Title</h2>
        <p>Article content.</p>
    </article>
    ```

56. **`<aside>`**
    - Content aside from the main content.
    ```html
    <aside>
        <p>Sidebar content.</p>
    </aside>
    ```

57. **`<footer>`**
    - Footer section of a document.
    ```html
    <footer>
        <p>Footer content.</p>
    </footer>
    ```

58. **`<address>`**
    - Contact information.
    ```html
    <address>
        Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br>
        Visit us at:<br>
        Example.com<br>
        Box 564, Disneyland<br>
        USA
    </address>
    ```

59. **`<figure>`**
    - Self-contained content, like illustrations.
    ```html
    <figure>
        <img src="image.jpg" alt="Description">
        <figcaption>Image caption.</figcaption>
    </figure>
    ```

60. **`<figcaption>`**
    - Caption for a `<figure>`.
    ```html
    <figcaption>Image caption.</figcaption>
    ```

61. **`<details>`**
    - Disclosure widget.
    ```html
    <details>
        <summary>More info</summary>
        <p>Details here.</p>
    </details>
    ```

62. **`<summary>`**
    - Summary of `<details>`.
    ```html
    <summary>More info</summary>
    ```

63. **`<dialog>`**
    - Dialog box.
    ```html
    <dialog open>
        <p>Dialog content.</p>
        <button>Close</button>
    </dialog>
    ```

64. **`<time>`**
    - Time and date.
    ```html
    <time datetime="2024-07-21">July 21, 2024</time>
    ```

### Multimedia

65. **`<audio>`**
    - Audio content.
    ```html
    <audio controls>
        <source src="audio.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    ```

66. **`<video>`**
    - Video content.
    ```html
    <video controls width="600">
        <source src="video.mp4" type="video/mp4">
        Your browser does not support the video element.
    </video>
    ```

67. **`<source>`**
    - Media source.
    ```html
    <source src="media.mp4" type="video/mp4">
    ```

68. **`<track>`**
    - Text tracks for media elements.
    ```html
    <video controls>
        <source src="video.mp4" type="video/mp4">
        <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">
    </video>
    ```

69. **`<embed>`**
    - Embedded content.
    ```html
    <embed src="file.pdf" width="500" height="375">
    ```

70. **`<object>`**
    - Container for external resources.
    ```html
    <object data="file.pdf" type="application/pdf" width="600" height="400">
        <p>Fallback text for older browsers.</p>
    </object>
    ```

71. **`<param>`**
    - Parameters for `<object>`.
    ```html
    <object data="movie.swf" type="application/x-shockwave-flash">
        <param name="autoplay" value="true">
    </object>
    ```

72. **`<iframe>`**
    - Inline frame.
    ```html
    <iframe src="https://www.example.com" width="600" height="400"></iframe>
    ```

### Interactive Elements

73. **`<canvas>`**
    - Graphics container.
    ```html
    <canvas id="myCanvas" width="200" height="100"></canvas>
    ```

74. **`<svg>`**
    - Scalable Vector Graphics.
    ```html
    <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    </svg>
    ```

75. **`<math>`**
    - Mathematical expressions.
    ```html
    <math xmlns="http://www.w3.org/1998/Math/MathML">
        <msup>
            <mi>x</mi>
            <mn>2</mn>
        </msup>
    </math>
    ```

76. **`<template>`**
    - Template for client-side content.
    ```html
    <template id="my-template">
        <p>This is a template.</p>
    </template>
    ```

77. **`<slot>`**
    - Placeholder inside a web component.
    ```html
    <slot name="content"></slot>
    ```

78. **`<shadow>`**
    - Shadow DOM.
    ```html
    <shadow>
        <p>Shadow DOM content.</p>
    </shadow>
    ```

### Deprecated and Obsolete Tags (for reference)

79. **`<acronym>`**
    - Obsolete. Use `<abbr>` instead.
    ```html
    <acronym title="As Soon As Possible">ASAP</acronym>
    ```

80. **`<applet>`**
    - Deprecated. Use `<embed>` or `<object>` instead.
    ```html
    <applet code="Applet.class" width="300" height="300"></applet>
    ```

81. **`<basefont>`**
    - Deprecated. Use CSS instead.
    ```html
    <basefont size="3" color="red">
    ```

82. **`<big>`**
    - Deprecated. Use CSS instead.
    ```html
    <big>Big text</big>
    ```

83. **`<center>`**
    - Deprecated. Use CSS instead.
    ```html
    <center>Centered text</center>
    ```

84. **`<font>`**
    - Deprecated. Use CSS instead.
    ```html
    <font color="red" size="4">Colored text</font>
    ```

85. **`<frame>`**
    - Deprecated. Use `<iframe>` instead.
    ```html
    <frame src="page.html"></frame>
    ```

86. **`<frameset>`**
    - Deprecated. Use `<iframe>` instead.
    ```html
    <frameset cols="25%,75%">
        <frame src="menu.html">
        <frame src="content.html">
    </frameset>
    ```

87. **`<noframes>`**
    - Deprecated. Use `<iframe>` instead.
    ```html
    <noframes>
        <p>Your browser does not support frames.</p>
    </noframes>
    ```

88. **`<isindex>`**
    - Obsolete. Use `<input>` instead.
    ```html
    <isindex action="search.html">
    ```

This list includes a broad range of HTML tags, from basic to advanced, and covers their usage with examples.


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
       <img src="image.jpg" alt="Description">
       <figcaption>Image caption goes here.</figcaption>
   </figure>
   ```

9. **`<figcaption>`**: Defines a caption for a `<figure>`.
   ```html
   <figure>
       <img src="image.jpg" alt="Description">
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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
            <p>Article content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

