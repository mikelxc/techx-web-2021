---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f04aa49b-019a-4d5d-8b2d-f26eb0f595bb/C2569598-B912-4CE3-A593-ACA0877B3CF9.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210801T161725Z&X-Amz-Expires=86400&X-Amz-Signature=daba21ce13e41e412714af116de15a9bee5bd52bd5ad39d10d55c703ad88e573&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22C2569598-B912-4CE3-A593-ACA0877B3CF9.jpeg%22
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# some information about the slides, markdown enabled
info: |
  ## Full Stack (Modern) Web Development
  Made by Mike Liu in 2021 for TechX Web
  Introduction to Web Development.
---

# Model–view–controller

---

# 创造“接口”

---
layout:image-left
image:https://en.wikipedia.org/wiki/File:MVC-Process.svg
---

# MVC

---

## Model

The central component of the pattern. It is the application's dynamic data structure, independent of the user interface. It directly manages the data, logic and rules of the application.

## View

Any representation of information such as a chart, diagram or table. Multiple views of the same information are possible, such as a bar chart for management and a tabular view for accountants.

## Controller

Accepts input and converts it to commands for the model or view.
In addition to dividing the application into these components, the model–view–controller design defines the interactions between them.

The model is responsible for managing the data of the application. It receives user input from the controller.
The view renders presentation of the model in a particular format.
The controller responds to the user input and performs interactions on the data model objects. The controller receives the input, optionally validates it and then passes the input to the model.
As with other software patterns, MVC expresses the "core of the solution" to a problem while allowing it to be adapted for each system.Particular MVC designs can vary significantly from the traditional description here.
