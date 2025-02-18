# Building a simple website using HTML, CSS and Javascript

## Recap from last session

Last time we were not able to create a personal page with semantic HTML tags and basic CSS styling

> Let's do it today

## Overview of Website Development

### Brief Overview of HTML, CSS, and JavaScript

#### HTML (HyperText Markup Language)

HTML is the standard markup language used to create and structure web pages. It defines the content of the web pages using various tags and elements.

- **Structure:** HTML provides the skeleton of the web page.
- **Elements:** Common elements include headings (`<h1>` to `<h6>`), paragraphs (`<p>`), links (`<a>`), images (`<img>`), and forms (`<form>`).
- **Attributes:** These provide additional information about elements, like `href` for links or `src` for images.

#### CSS (Cascading Style Sheets)

CSS is used to describe the presentation of a web page, including layout, colors, and fonts.

- **Styling:** CSS applies styles to HTML elements.
- **Selectors:** CSS selectors target HTML elements to apply styles (e.g., classes, IDs, or element types).
- **Box Model:** Understanding margin, border, padding, and content to control layout.
- **Responsive Design:** Media queries and flexible layouts for different devices.

#### JavaScript

JavaScript is a programming language that enables interactive and dynamic content on web pages.

- **Interactivity:** Adding events like clicks, hovers, and form submissions.
- **DOM Manipulation:** Changing HTML and CSS dynamically.
- **APIs:** Interacting with external services (e.g., REST APIs) and browser APIs (e.g., Geolocation, Local Storage).
- **Frameworks/Libraries:** Tools like React, Angular, and Vue.js simplify complex tasks.

### Role of Web Development in Shaping Modern Growth and the Internet

#### Digital Transformation

Web development is at the heart of the digital transformation across industries. Websites and web applications are essential for businesses to operate, market, and serve customers online.

#### E-Commerce

The rise of e-commerce platforms (like Amazon, Flipkart) has revolutionized shopping, making web development crucial for building and maintaining these platforms.

#### Information Access

Web development enables the creation of platforms for sharing knowledge, news, and information (like Wikipedia, news sites, and blogs), contributing to an informed society.

#### Social Interaction

Social media platforms (like Facebook, Instagram, Twitter) built using web technologies have changed how people interact, share, and communicate.

#### Innovation and Automation

Web applications facilitate automation in various sectors, from finance to healthcare, improving efficiency and innovation.

### Why Learn Web Development in 2025?

#### High Demand

The demand for web developers continues to grow as businesses increasingly rely on web presence and online services.

#### Versatile Skill Set

Web development skills are versatile and transferable across different industries, from tech startups to established corporations.

#### Freelancing and Entrepreneurship

Knowledge of web development opens opportunities for freelancing and creating your own online business or startup.

#### Future-Proof Career

With continuous advancements in technology, web development skills remain relevant and adaptable, ensuring long-term career prospects.

#### Community and Resources

A large community of developers and abundant resources make learning web development accessible and supported.

### Conclusion

Learning web development in 2025 is not just about coding websites. It's about being part of a transformative movement that's shaping the modern internet and our way of life. Whether you're looking to start a new career, enhance your current role, or innovate with new ideas, web development provides the skills and opportunities to make a significant impact.

## What is Flexbox in CSS ?

### Flexbox Guide

Flexbox, or the Flexible Box Layout, is a CSS layout module designed to provide a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic. Here's a breakdown of its components and usage with simple explanations and examples.

#### Flex Container

The flex container is the parent element that contains flex items. To create a flex container, set the `display` property to `flex` or `inline-flex`.

```css
.container {
  display: flex;
}
```

#### Flex Items

Flex items are the children of a flex container. By default, they are laid out in a row and stretch to fit the container.

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

### Main Flexbox Properties

#### 1. **flex-direction**

Determines the direction of the flex items.

- `row` (default): left to right
- `row-reverse`: right to left
- `column`: top to bottom
- `column-reverse`: bottom to top

```css
.container {
  display: flex;
  flex-direction: row; /* or column, row-reverse, column-reverse */
}
```

#### 2. **justify-content**

Aligns flex items along the main axis (horizontal by default).

- `flex-start` (default): items start from the beginning of the container
- `flex-end`: items end at the end of the container
- `center`: items are centered
- `space-between`: space between items
- `space-around`: space around items

```css
.container {
  display: flex;
  justify-content: center; /* or flex-start, flex-end, space-between, space-around */
}
```

#### 3. **align-items**

Aligns flex items along the cross axis (vertical by default).

- `stretch` (default): items stretch to fill the container
- `flex-start`: items start at the beginning of the container
- `flex-end`: items end at the end of the container
- `center`: items are centered
- `baseline`: items align at their baseline

```css
.container {
  display: flex;
  align-items: center; /* or flex-start, flex-end, stretch, baseline */
}
```

#### 4. **flex-wrap**

Allows flex items to wrap onto multiple lines.

- `nowrap` (default): items do not wrap
- `wrap`: items wrap onto multiple lines
- `wrap-reverse`: items wrap onto multiple lines in reverse order

```css
.container {
  display: flex;
  flex-wrap: wrap; /* or nowrap, wrap-reverse */
}
```

#### 5. **align-content**

Aligns flex lines when there is extra space in the cross axis. This property has no effect when there is only one line of flex items.

- `stretch` (default): lines stretch to fill the container
- `flex-start`: lines start at the beginning of the container
- `flex-end`: lines end at the end of the container
- `center`: lines are centered
- `space-between`: space between lines
- `space-around`: space around lines

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center; /* or flex-start, flex-end, stretch, space-between, space-around */
}
```

### Flex Item Properties

#### 1. **order**

Defines the order of flex items. Items are ordered by ascending order value.

```css
.item {
  order: 2; /* default is 0 */
}
```

#### 2. **flex-grow**

Defines the ability for a flex item to grow if necessary. Accepts a unitless value that serves as a proportion.

```css
.item {
  flex-grow: 1; /* default is 0 */
}
```

#### 3. **flex-shrink**

Defines the ability for a flex item to shrink if necessary. Accepts a unitless value that serves as a proportion.

```css
.item {
  flex-shrink: 1; /* default is 1 */
}
```

#### 4. **flex-basis**

Defines the initial size of a flex item before it is adjusted according to flex-grow and flex-shrink.

```css
.item {
  flex-basis: 100px; /* default is auto */
}
```

#### 5. **align-self**

Allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

- `auto` (default)
- `flex-start`
- `flex-end`
- `center`
- `baseline`
- `stretch`

```css
.item {
  align-self: center; /* or flex-start, flex-end, baseline, stretch */
}
```

### Examples

#### Basic Flexbox Layout

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 200px;
        border: 1px solid black;
      }
      .item {
        width: 100px;
        height: 100px;
        background-color: lightblue;
        text-align: center;
        line-height: 100px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="item">Item 1</div>
      <div class="item">Item 2</div>
      <div class="item">Item 3</div>
    </div>
  </body>
</html>
```

#### Responsive Flexbox Layout

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px; /* space between items */
      }
      .item {
        flex: 1 1 200px; /* grow, shrink, basis */
        background-color: lightcoral;
        text-align: center;
        padding: 20px;
        margin: 5px;
        box-sizing: border-box;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="item">Item 1</div>
      <div class="item">Item 2</div>
      <div class="item">Item 3</div>
      <div class="item">Item 4</div>
      <div class="item">Item 5</div>
    </div>
  </body>
</html>
```

In the responsive example, items will wrap and adjust their size based on the available space, making it flexible for different screen sizes.

Flexbox is a powerful layout module that simplifies the process of designing flexible and responsive layouts. Understanding its properties and usage can significantly enhance your web development skills.

> Good Guide for flexbox [refer](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Building a Website using html, css and js

Design [link](https://freewebsitetemplates.com/preview/zerotype/index.html)

**Agenda**: `Design a product landing page that adjusts its layout based on screen size using media queries and Flexbox.`

> Let's Do it..

### Useful Guide:

### Key Things to Know for New Web Developers

#### HTML (HyperText Markup Language)

- **Structure:** Understand the basic structure of an HTML document: `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, and `<body>`.
- **Elements and Tags:** Learn commonly used tags like `<div>`, `<span>`, `<p>`, `<a>`, `<img>`, `<h1>` to `<h6>`, and form elements (`<input>`, `<button>`, etc.).
- **Attributes:** Know how to use attributes such as `id`, `class`, `src`, `href`, `alt`, and `title`.

#### CSS (Cascading Style Sheets)

- **Selectors:** Understand how to use different selectors (element, class, ID, descendant, etc.).
- **Box Model:** Learn the box model concept (content, padding, border, margin) and how to use it effectively.
- **Flexbox and Grid:** Get familiar with Flexbox and CSS Grid for layout design.
- **Responsive Design:** Use media queries to make your site responsive to different screen sizes.
- **Styling:** Practice basic styling properties like color, background, font, border, and spacing.

#### JavaScript

- **Basics:** Learn basic syntax, data types, variables, operators, and control structures (loops, conditionals).
- **DOM Manipulation:** Understand how to select and manipulate HTML elements using JavaScript.
- **Event Handling:** Learn how to handle events like clicks, form submissions, and mouse movements.
- **Functions:** Practice writing and using functions, including understanding scope and closures.
- **AJAX and APIs:** Get a basic understanding of making asynchronous requests and working with APIs.

### Making Your Landing Page Responsive

#### Use a Responsive Meta Tag

Add the following meta tag in the `<head>` section of your HTML document to ensure proper scaling on mobile devices:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

#### Flexbox for Layout

Use Flexbox to create a flexible layout that adjusts based on the screen size.

```css
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item {
  flex: 1 1 200px;
  margin: 10px;
}
```

#### Media Queries

Use media queries to apply different styles based on the screen size.

```css
/* Default styles for mobile */
body {
  font-size: 16px;
}
.container {
  flex-direction: column;
}

/* Styles for tablets */
@media (min-width: 600px) {
  .container {
    flex-direction: row;
  }
}

/* Styles for desktops */
@media (min-width: 1024px) {
  body {
    font-size: 18px;
  }
  .item {
    flex: 1 1 300px;
  }
}
```

### Motivation for Making Your Website Responsive

1. **Better User Experience:** A responsive website ensures that users have a positive experience regardless of the device they use, leading to higher engagement and satisfaction.
2. **Increased Reach:** With more people accessing the internet via mobile devices, a responsive design helps you reach a larger audience.
3. **Improved SEO:** Search engines like Google prefer responsive websites, which can improve your site's search engine ranking.
4. **Future-Proofing:** Responsive design makes your website adaptable to new devices and screen sizes, ensuring its longevity.
5. **Professionalism:** A responsive site looks more professional and trustworthy, which can enhance your brand's credibility.

### Example Code for a Responsive Landing Page

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Responsive Landing Page</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 20px;
      }
      .item {
        flex: 1 1 200px;
        margin: 10px;
        padding: 20px;
        background-color: #f0f0f0;
        text-align: center;
      }
      @media (min-width: 600px) {
        .container {
          justify-content: space-between;
        }
      }
      @media (min-width: 1024px) {
        .item {
          flex: 1 1 300px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="item">Item 1</div>
      <div class="item">Item 2</div>
      <div class="item">Item 3</div>
      <div class="item">Item 4</div>
    </div>
  </body>
</html>
```

By learning these fundamental concepts and applying them to your project, you'll be well on your way to creating a professional and responsive website. Keep experimenting and improving your skills, and soon you'll see great results!

---
