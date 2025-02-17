# CSS, CSS Layouts & Responsive Design

## CSS Layouts

CSS layouts are a fundamental part of web design and development, used to structure and arrange content on a web page. Understanding the basics of CSS layouts will help you create more responsive and organized designs. Here are some common layout techniques and their basics:

### 1. **Normal Flow (Default Layout)**

By default, HTML elements are positioned according to the normal flow. Block elements (like `<div>`, `<h1>`, `<p>`) stack vertically, while inline elements (like `<span>`, `<a>`) stack horizontally.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Normal Flow Layout</title>
    <style>
        .container {
            border: 1px solid #000;
            padding: 10px;
        }
        .box {
            border: 1px solid #f00;
            padding: 10px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
    </div>
</body>
</html>
```

### 2. **Flexbox**

Flexbox (Flexible Box Layout) is a one-dimensional layout model that helps align and distribute space among items in a container. It can be used for both horizontal and vertical alignment.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Layout</title>
    <style>
        .container {
            display: flex;
            justify-content: space-around; /* Aligns items horizontally */
            border: 1px solid #000;
            padding: 10px;
        }
        .box {
            border: 1px solid #f00;
            padding: 10px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
    </div>
</body>
</html>
```

### 3. **Grid Layout**

CSS Grid Layout is a two-dimensional layout model that allows you to create complex layouts using rows and columns. It provides more control over positioning and spacing.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid Layout</title>
    <style>
        .container {
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* Creates 3 equal columns */
            gap: 10px;
            border: 1px solid #000;
            padding: 10px;
        }
        .box {
            border: 1px solid #f00;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
    </div>
</body>
</html>
```

### 4. **Positioning**

CSS positioning allows you to control the exact location of an element. The common values are `static`, `relative`, `absolute`, `fixed`, and `sticky`.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Positioning Layout</title>
    <style>
        .container {
            position: relative;
            border: 1px solid #000;
            padding: 10px;
            height: 200px;
        }
        .box {
            position: absolute;
            top: 20px;
            left: 20px;
            border: 1px solid #f00;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Box 1</div>
    </div>
</body>
</html>
```

### Summary

- **Normal Flow:** Default positioning of elements; block elements stack vertically, inline elements horizontally.
- **Flexbox:** One-dimensional layout model for alignment and distribution of space.
- **Grid Layout:** Two-dimensional layout model for complex designs with rows and columns.
- **Positioning:** Allows precise control over an element’s position.

These layout techniques can be used individually or together to create responsive and well-structured web pages.


## Box Model in CSS

Got it! Let’s dive deeper into the CSS Box Model and Box Sizing, along with examples.

### CSS Box Model

The CSS Box Model describes how the content of an element is surrounded by padding, borders, and margins. It’s crucial for understanding how the layout of a webpage is affected by these properties.

**Components of the Box Model:**

1. **Content:** The actual content of the box, like text or images.
2. **Padding:** Space between the content and the border.
3. **Border:** Surrounds the padding (if any) and the content.
4. **Margin:** Space outside the border, separating the element from other elements.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box Model Example</title>
    <style>
        .box {
            width: 200px; /* Width of the content area */
            height: 100px; /* Height of the content area */
            padding: 20px; /* Space between content and border */
            border: 5px solid #333; /* Border around the padding */
            margin: 15px; /* Space outside the border */
            background-color: #f0f0f0; /* Background color of the content area */
        }
    </style>
</head>
<body>
    <div class="box">This is a box model example.</div>
</body>
</html>
```

In this example:
- **Content:** `200px` width and `100px` height.
- **Padding:** `20px` around the content.
- **Border:** `5px` solid border.
- **Margin:** `15px` space outside the border.

### Box Sizing

The `box-sizing` property in CSS determines how the width and height of an element are calculated. It can be set to either `content-box` (default) or `border-box`.

1. **`content-box`:** The default value. The width and height you set apply only to the content area, not including padding or border.

2. **`border-box`:** The width and height include padding and border, but not the margin. This makes it easier to control the overall size of an element.

**Example with `content-box` (default):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box Sizing Example</title>
    <style>
        .content-box {
            box-sizing: content-box;
            width: 200px;
            padding: 20px;
            border: 5px solid #333;
            margin: 15px;
            background-color: #f0f0f0;
        }
    </style>
</head>
<body>
    <div class="content-box">Content-box example</div>
</body>
</html>
```

In this example, the `width` of `200px` is only for the content area. Padding and border are added to this width, making the total width of the element larger than `200px`.

**Example with `border-box`:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box Sizing Example</title>
    <style>
        .border-box {
            box-sizing: border-box;
            width: 200px; /* Includes padding and border */
            padding: 20px;
            border: 5px solid #333;
            margin: 15px;
            background-color: #f0f0f0;
        }
    </style>
</head>
<body>
    <div class="border-box">Border-box example</div>
</body>
</html>
```

In this example, the `width` of `200px` includes padding and border. The content area will adjust to fit within this width, making it easier to manage element dimensions and layout.

### Summary

- **CSS Box Model:** Includes the content, padding, border, and margin. Understanding this helps in designing layouts and controlling spacing and alignment.
- **Box Sizing:** `content-box` calculates width and height excluding padding and border, while `border-box` includes padding and border in the width and height calculations.

Using `border-box` is often preferred because it simplifies the management of element dimensions and layouts.


## Responsive Design & media queries

**Responsive Design** in CSS refers to creating web layouts that adapt to different screen sizes and orientations, ensuring a good user experience on all devices—from desktops to smartphones. This involves using flexible grids, images, and media queries.

### **Key Concepts of Responsive Design**

1. **Fluid Grid Layouts:** Use relative units like percentages instead of fixed units like pixels for widths, allowing elements to resize fluidly.

2. **Flexible Images:** Images and other media should scale with the size of their containers.

3. **Media Queries:** CSS techniques that apply styles based on device characteristics, such as screen width, height, orientation, etc.

### **Using Media Queries**

Media queries are a crucial tool for responsive design. They allow you to apply different styles depending on the device's characteristics.

**Example of Responsive Design Using Media Queries**

Here’s a simple example that demonstrates how to create a responsive layout with media queries:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Design Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            background-color: #f4f4f4;
            padding: 20px;
        }
        .box {
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }

        /* Default styles for larger screens */
        @media (min-width: 1024px) {
            .box {
                font-size: 24px;
            }
        }

        /* Styles for tablets and small laptops */
        @media (max-width: 1024px) {
            .container {
                width: 90%;
            }
            .box {
                font-size: 20px;
            }
        }

        /* Styles for mobile devices */
        @media (max-width: 600px) {
            .container {
                width: 100%;
                padding: 10px;
            }
            .box {
                font-size: 16px;
                margin: 5px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Responsive Box 1</div>
        <div class="box">Responsive Box 2</div>
        <div class="box">Responsive Box 3</div>
    </div>
</body>
</html>
```

### **Explanation**

1. **Default Styles:** These apply to larger screens, such as desktops.
   - `.box` has a font size of `24px`.

2. **Tablet and Small Laptops (Width ≤ 1024px):**
   - `.container` width changes to `90%` of the viewport.
   - `.box` font size reduces to `20px`.

3. **Mobile Devices (Width ≤ 600px):**
   - `.container` takes `100%` width with `10px` padding.
   - `.box` font size is `16px`, and margins are reduced to `5px`.

### **Summary**

- **Responsive Design:** Ensures web content adjusts gracefully to different screen sizes and orientations.
- **Media Queries:** Used to apply different styles based on device characteristics, helping to create a responsive design.

By using media queries effectively, you can design flexible layouts that look good on all devices.


## What are media Queries ?

Certainly! Media queries are a powerful tool in CSS for creating responsive designs. They allow you to apply styles based on the characteristics of the device or viewport, such as its width, height, orientation, and resolution.

### **Media Queries Basics**

A media query consists of a media type and one or more expressions that check for specific conditions. Here’s the general syntax:

```css
@media media-type and (condition) {
    /* CSS rules */
}
```

- **`media-type`:** The type of device or media, such as `screen`, `print`, etc. If omitted, the styles apply to all media types.
- **`condition`:** The condition that must be met for the styles to apply. Common conditions include `min-width`, `max-width`, `min-height`, `max-height`, `orientation`, and `resolution`.

### **Common Media Query Conditions**

1. **Width and Height:**
   - `min-width`: Applies styles if the viewport width is at least a certain value.
   - `max-width`: Applies styles if the viewport width is at most a certain value.
   - `min-height`: Applies styles if the viewport height is at least a certain value.
   - `max-height`: Applies styles if the viewport height is at most a certain value.

2. **Orientation:**
   - `orientation: portrait`: Applies styles if the device is in portrait mode.
   - `orientation: landscape`: Applies styles if the device is in landscape mode.

3. **Resolution:**
   - `resolution: 300dpi`: Applies styles for high-resolution screens.

### **Examples of Media Queries**

**1. Basic Media Queries**

```css
/* Styles for devices with a minimum width of 768px (tablets and larger) */
@media (min-width: 768px) {
    .container {
        width: 750px;
        margin: 0 auto;
    }
}

/* Styles for devices with a maximum width of 767px (mobile devices) */
@media (max-width: 767px) {
    .container {
        width: 100%;
        padding: 10px;
    }
}
```

**2. Responsive Layout with Breakpoints**

Breakpoints are specific viewport widths where the layout changes. Here’s an example of a responsive grid that adapts to different screen sizes:

```css
/* Default styles (for desktops) */
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.item {
    background-color: #ddd;
    padding: 20px;
}

/* Styles for tablets and smaller screens */
@media (max-width: 768px) {
    .container {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Styles for mobile devices */
@media (max-width: 480px) {
    .container {
        grid-template-columns: 1fr;
    }
}
```

**3. Orientation-Based Media Queries**

```css
/* Portrait Mode Styles */
@media (orientation: portrait) {
    .container {
        padding: 10px;
    }
}

/* Landscape Mode Styles */
@media (orientation: landscape) {
    .container {
        padding: 20px;
    }
}
```

**4. High-Resolution Screens**

```css
/* Styles for high-resolution screens (e.g., Retina displays) */
@media (min-resolution: 2dppx) {
    .image {
        background-image: url('high-resolution-image.png');
    }
}
```

### **Advanced Tips for Using Media Queries**

1. **Mobile-First Approach:** Start by designing for the smallest screens first and then use media queries to enhance styles for larger screens. This approach can lead to more efficient and faster-loading designs.

   ```css
   /* Mobile-first styles */
   .container {
       padding: 10px;
   }

   /* Tablet and larger screens */
   @media (min-width: 768px) {
       .container {
           padding: 20px;
       }
   }
   ```

2. **Combine Multiple Conditions:** You can combine multiple conditions using logical operators like `and`, `or`, and `not`.

   ```css
   /* Applies styles for screens between 600px and 1024px width */
   @media (min-width: 600px) and (max-width: 1024px) {
       .box {
           width: 80%;
       }
   }
   ```

3. **Feature Queries:** Use `@supports` to apply styles based on whether a browser supports a particular CSS feature.

   ```css
   /* Apply styles if the browser supports CSS Grid */
   @supports (display: grid) {
       .grid-container {
           display: grid;
           grid-template-columns: repeat(3, 1fr);
       }
   }
   ```

4. **Use Media Query Ranges:** For smoother transitions, you can use ranges instead of specific breakpoints.

   ```css
   /* Between 600px and 900px */
   @media (min-width: 600px) and (max-width: 900px) {
       .container {
           font-size: 18px;
       }
   }
   ```

5. **Testing and Debugging:** Always test your responsive designs on multiple devices and screen sizes. Use browser developer tools to simulate different screen sizes and orientations.

### **Summary**

- **Media Queries:** Allow you to apply styles based on various device characteristics.
- **Common Conditions:** Include width, height, orientation, and resolution.
- **Best Practices:** Use mobile-first design, combine conditions, and test across devices.

By understanding and utilizing media queries effectively, you can create designs that adapt seamlessly to various devices and screen sizes, enhancing user experience.


## Minor Project 

> Let's make a profile page using the skills we just learned
