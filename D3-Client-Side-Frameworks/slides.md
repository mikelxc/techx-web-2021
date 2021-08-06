---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://sitetoolset.com/wp-content/uploads/2020/03/frontend-client-side-programming-768x543.png
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# some information about the slides, markdown enabled
info: |
  ## Full Stack (Modern) Web Development
  Made by Mike Liu in 2021 for TechX Web
  Introduction to Web Development.
---

# Client-side Frameworks

---
layout: center
---

# JavaScript and libraries

## The web became not just a place to read things, but to do things. JavaScript’s popularity steadily increased. Developers who worked with JavaScript wrote tools to solve the problems they faced, and packaged them into reusable packages called libraries, so they could share their solutions with others. This shared ecosystem of libraries helped shape the growth of the web.

---

# Frameworks

## The advent of modern JavaScript frameworks has made it much easier to build highly dynamic, interactive applications. A framework is a library that offers opinions about how software gets built. These opinions allow for predictability and homogeneity in an application; predictability allows software to scale to an enormous size and still be maintainable; predictability and maintainability are essential for the health and longevity of software.

---
layout: image-left
image: https://live.staticflickr.com/3663/3404487851_022089d7df.jpg
---

# Standards

## The Web Standards Project
https://www.webstandards.org
### Founded in 1998, The Web Standards Project (WaSP) fights for standards that reduce the cost and complexity of development while increasing the accessibility and long-term viability of any site published on the Web. 

---

# CSS frameworks

### Around the mid-2000s, CSS libraries and frameworks began cropping up. These frameworks introduced a grid system to help web designers layout their content. 

- https://windicss.org
- https://purecss.io
- https://semantic-ui.com
- https://getuikit.com
- https://materializecss.com
- http://getskeleton.com
- https://bulma.io
- https://picnicss.com

---

# Layouts

- By 1996, the use of tables for layout took off. Tables were designed in the early specs for HTML to hold tabular data in rows and columns, but it soon became apparent that the individual cells of a table could be used to hold page elements together in a multi-dimensional layout.
- The World Wide Web Consortium released the first recommendation for CSS (CSS1) in 1996. An update, CSS Level 2, was published in 1998 and it provided new layout capabilities like fixed (position: fixed), absolute (position: absolute), and relative position: relative) positioning and z-index. 

- http://grid-layout.com/history.html
---
layout: image-left
image: https://miro.medium.com/max/3574/1*VLLkblHTlTuC-IXQaUYZDw.png
---

# Grid and Flex

CSS flexbox and grid are two different layout models optimized for user interface design. Flexbox (also known as flexible box layout) deals with one-dimensional layouts, where you can lay out and align elements horizontally or vertically. Grid (also known as grid layout) goes a step further and allows you to build two-dimensional layouts, where you can lay out and align elements horizontally and vertically.

The first working draft for Flexbox was published in 2009, but it underwent a number of changes and the working draft wasn't published until 2013.

- https://grid.malven.co Grid cheat-sheet

---

# Development of Template Engines

- Emmet
- Pug

---

# Why we need a framework

- Consider a common kind of application: A to-do list creator, which we'll look at implementing using a variety of frameworks in future chapters. This application should allow users to do things like render a list of tasks, add a new task, and delete a task; and it must do this while reliably tracking and updating the data underlying the application. In software development, this underlying data is known as state.

- Each of our goals is theoretically simple in isolation. We can iterate over the data to render it; we can add to an object to make a new task; we can use an identifier to find, edit, or delete a task. When we remember that the application has to let the user to do all of these things through the browser, however, some cracks start to show. The real problem is this: every time we change our application’s state, we need to update the UI to match.