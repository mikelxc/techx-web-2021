---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f04aa49b-019a-4d5d-8b2d-f26eb0f595bb/C2569598-B912-4CE3-A593-ACA0877B3CF9.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210801T161725Z&X-Amz-Expires=86400&X-Amz-Signature=daba21ce13e41e412714af116de15a9bee5bd52bd5ad39d10d55c703ad88e573&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22C2569598-B912-4CE3-A593-ACA0877B3CF9.jpeg%22
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

# Programming Language and JavaScript

---

# What can you do in 6 months?
## May to December 1995
That's how long it took to create JavaScript.

---
layout: image-right
image: https://qz.com/wp-content/uploads/2015/08/netscape.jpg
---

# Background

### Netscape Communications Corporation had a strong presence in the young web.

<br>

### Its browser, Netscape Communicator, was gaining traction as a competitor to NCSA Mosaic, the first popular web browser.

---

# A way to become more dynamic

<br>

Marc Andreessen, founder of Netscape had the vision that the web needed a way to become more dynamic.
Animations, interaction and other forms of small automation should be part of the web of the future.
So the web needed a small scripting language that could interact with the DOM

## Cater to a different type of audience :

# scripters, amateurs, designers

## Accessible to non-programmer

---
layout: image-left
image: https://duckduckgo.com/i/4ae4944e.jpg
---

## Brendan Eich, father of JavaScript, contracted by Netscape Communications to develop 

<br>

## a "Scheme for the browser". easy to grasp syntactically; dynamic, to reduce verbosity and speed up development; and powerful.

---
layout: center
---

# Why a new language?

- Freedom to pick the right set of features, 
- Lots of internal pressure to pick one language as soon as possible
- Lots of important decisions had to be made and very little time was available to make them

---
layout: center
---

# Mocha and livescript

- Mocha was to become a scripting language for the web. Simple, dynamic, and accessible to non-developers. Mocha was meant to be the scripting companion for Java
- In a matter of weeks a working prototype was functional, and so it was integrated into Netscape Communicator.
- The prototype of Mocha was integrated into Netscape Communicator in May 1995.

---
layout:quote
---
# "It was all within six months from May til December (1995) that it was Mocha and then LiveScript, and then in early December, Netscape and Sun did a license agreement and it became JavaScript. And the idea was to make it a complementary scripting language to go with Java, with the compiled language."
Brendan Eich

---
layout: image-left
image: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F69%2FNetscape_Navigator_2_Screenshot.png&f=1&nofb=1
---
## In December 1995, Netscape Communications and Sun closed the deal: Mocha/LiveScript would be renamed JavaScript, and it would be presented as a scripting language for small client-side tasks in the browser, while Java would be promoted as a bigger, professional tool to develop rich web components

---
layout: image-right
image: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.webdesignmuseum.org%2Fuploaded%2Fweb-design-history%2Fjscript-1-0.png&f=1&nofb=1
---

## JavaScript made such a considerable difference in user experience that competing browsers had no choice but to come up with a working solution, a working implementation of JavaScript.

<br>

## Microsoft couldn’t get a license from Sun so they called their implementation JScript. 

---

# Standardizations and improvements

## During the period of Internet Explorer dominance in the early 2000s, client-side scripting was stagnant. This started to change in 2004, when the successor of Netscape, Mozilla, released the Firefox browser. Firefox was well-received by many, taking significant market share from Internet Explorer.

---

# AJAX

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficrovett.files.wordpress.com%2F2010%2F08%2Fajax.jpg)

## In 2005, Jesse James Garrett released a white paper in which he coined the term Ajax and described a set of technologies, of which JavaScript was the backbone, to create web applications where data can be loaded in the background, avoiding the need for full page reloads. 

---
layout:quote
---

# "There was this big gulf between the browsers, and when people come to JavaScript to program the browser they want the same APIs and they don’t get them. Now what helps make this less painful are these JavaScript libraries, which are pure JavaScript code that makes this higher layer of code that masquerades and makes all the differences go away. And those are becoming quite popular. Those are the so-called AJAX libraries."
Eich

---

# Flash

- The company released FutureSplash Animator in May 1996. The software was adopted by a number of major websites, such as MSN and a Disney website, and in December of that year, Macromedia bought the company and rebranded the software as Macromedia Flash.

- Flash was the leading multimedia software for several years, and in 2000, ActionScript, an object-oriented programming language inspired by Apple’s HyperTalk, was added to the Flash platform. This allowed developers to script actions rather than animate them, enhancing the types of content available, to include web games and streaming media.

- In 2005, Adobe purchased Macromedia, and added Flash to its Creative Suite. This corresponded with the growth of video content on the web, and Flash was an easy way to embed video and play it back on web pages, since it depended on a simple plugin. Around that time, three former PayPal employees launched a startup called YouTube, and they adopted Flash as the technology for displaying videos on their website.

---

# jQuery

![](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FjQuery_logo.png&f=1&nofb=1)
## DOM manipulation library (jQuery) released in August 2006. It helped developers write JavaScript code without the worry of browser compatibility. It contained tons of useful functions that made it easy to make any website interactive

---

# iPhone and Mobile Safari

- 2007 release of the iPhone marked the inflection point for Flash. Since the iPhone didn’t support Flash, YouTube developed technology to display its videos, in an app, without Flash.

- With Flash unable to be on the soon-to-be-dominant mobile device, there was no future for the software. since it was intended to be a "write once, run anywhere" platform, and it wouldn’t run on the device that more and more people were using to consume media, it was left behind.

---

# Chrome

![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/V8_JavaScript_engine_logo_2.svg/440px-V8_JavaScript_engine_logo_2.svg.png)
## Google debuted its Chrome browser in 2008, with the V8 JavaScript engine that was faster than its competition. The key innovation was just-in-time compilation (JIT), compiles JavaScript directly to native machine code before executing it. The compiled code is additionally optimized (and re-optimized) dynamically at runtime.
## In July 2008, these disparate parties came together for a conference in Oslo. This led to the eventual agreement in early 2009 to combine all relevant work and drive the language forward. The result was the ECMAScript 5 standard, released in December 2009.

---

# Maturity

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcms-assets.tutsplus.com%2Fuploads%2Fusers%2F16%2Fposts%2F25139%2Fpreview_image%2Fes6-1.png&f=1&nofb=1)

## Ambitious work on the language continued for several years, culminating in an extensive collection of additions and refinements being formalized with the publication of ECMAScript 6 in 2015.

---

# Future

- TypeScript, ESModules
- Electron, Ionic/React Native, Flutter
- Deno, WEB-Container


---

Programming is the act of constructing a program

A set of precise instructions telling a computer what to do

A programming language is an artificially constructed language used to instruct computers

JE is built into every modern web browser and is this available on almost every device

Each line of the previous program contains a single instruction

---
The power of language is that they take care of unnecessary details for us

A good programming language helps the programmer by allowing them to talk acorn the actions that the computer has to perform on a higher level

It helps omit details provides convenient building blocks, allows you to define your own building blocks, and makes those blocks easy to compose

There are those who will say terrible things about JavaScript and many of these things are true.

Code is the text that makes up programs

---
# Values, Types, and Operations

Only data, read, modify, create data that are stored as long sequences of bits

Bits, two valued things, 0 and 1

Separate into chunks that represent pieces of information. Chunks are called values. Every value has a type that determines its role

To create, merely invoke its name

---

# Numbers

 numeric values. 64 bits to represent each number. 2^64 different numbers. No need to worry about memory and overflow, like double/single in VB.

9 quadrillion (15 zeros)

Add a dot to represent fractional, use scientific notation by adding e followed by the exponent of the number.

---

# Arithmetic

Take two number values and produce a new number from them.

Operators, + - * / %

Infinity, -Infinity, NaN(not a number)

---

# Strings

Used to represent text, enclosing their content in quotes.

‘ “ backticks

Whenever a backslash \ is find it indicates that the character after it has a special meaning. Escaping the character

Only + works as concatenation

Backtick quoted, template literals

${} result will be computed, converted to string and included at that position

---

# Unary/binary operators

Takes one or two values

E.g. 

```
typeof

Boolean

true, false

<> 
// less greater than

==, ≠ (! =)

&&, ||

! //Not

//Ternary operator: 

true/false ? : //picks which of the other two will come

Empty

null and undefined

Type coercion 

Convert the type to automatically do the job for you

=== strictly equal to, without type coercion  
```

---

# Program structure

A fragment of code that produces a value is called an *expression* (sub-sentences)

*Statement* corresponds to a full sentence 

A program is a list of statements

A ; at the end of a statement, sometimes you can omit it but you have to be careful and it’s complicated 

---

# **Bindings**

Catch and hold values, binding or variable:

`let` (keyword) I dictates that this sentence is going to define a binding, followed by the name of the binding, may define multiple bindings separated by commas

`=` Operator and an expression gives it a value

The variable name is used to grab a hold of the result of the expression

After a binding is defined, it can be used as an expression, the value of that expression is the value the binding currently holds

the = operator can be used at any time on existing bindings to disconnect them from their current value and have them point to a new one

They are tentacles, do not contain, just grasp them

`var` (variable) the way binding were declared in pre-2015 JS

`const` (constant) defines a constant binding, which points at the same value at the same value for as long as it lives

---

# Binding names

must not start with a digit, may include $ and/or _

keywords (words with special meanings) cannot be used as binding names

```jsx
break case catch class const continue debugger defau extends delete do else enum export extends false finally for function if implements import interface in instanceof let new package private protected public return static super switch this throw true try typeof var void while with yield
```

---

# **Environment**

the collection of bindings and their values that exist at a given time is called the environment

it always contains bindings that are part of the language standard. 

bindings that provide ways to interact with the surrounding system

e.g. browser: current website, mouse/keyboard/touch input

---

# **Functions**

type function, a piece of program wrapped in a value

applied in order to run the wrapped program

Executing a function is called invoking, calling, applying it

Call a function by putting parentheses ()after an expression that produces a function value

Arguments (the values between the parentheses) are given to the program inside the function

console.log function, writes out its arguments to some text output device

an expression that retrieves the log property from the value held by the console binding

---
# **Return values**

when a function produces a value, it is said to return that value

anything that produces a value is an expression in JS

functions can be used within larger expressions

**Control flow**

statements are executed as if they are a story, from top to bottom

```jsx
let theNumber = Number(prompt("Pick a number"));
console.log("your number is the square root of " + theNumber * theNumber);
//the function NUmber converts a value to a number
//the result of prompt is a string value
```

---

# **Conditional Execution**

create a branching road, the program takes the proper branch based on the situation at hand

if keyword， else keyword, two separate, alternative execution pathers


---

# **While and do loops**

run a piece of code multiple times

go back to some point in the program where we were before and repeat it with our current program state

`while` keyword, followed by an expression in parentheses and then a statement, keeps entering that statement as long as the expression produces a value that gives true when converted to Boolean

do loop always executes its body at least once, and it starts testing whether it should stop only after the first execution. The test appears after the body of the loop

---

# For loops

(initializes the loop, usually by defining a binding; expression that checks whether the loop continues; updates the state of the loop after every iteration)

Breaking out of a loop

a special statement called break to immediately jumping out of the enclosing loop

continue, jumps out of the body and continues with the loop's next iteration

```
+= 1, ++, -+ 1, - -
```

---

# **Switch**

switch, case, default

continue executing even across other labels, until reaches a break statement

**Indenting**

unlike python, JS do not require spaces. even line breaks are optional. minified js

make the structure of the code stand out

eslint, prettier, to help with indentation

**Capitalization**

camelCase, capitalize every word except the first

**Comments**

part of the program but is completely ignored by the computer

single-line comment, //

/*Text between will be ignored entirely */  

---

# Functions

wrapping a piece of program in a value

defining new vocabulary

**Define a function**

regular binding where the value of the binding is a function

```jsx
const square = funciton (x) {
	return x * x;
};
console.log(square(12));
// -> 144
```

---

created with an expression that starts with the keyword function

a set of parameters (multiple or none) and a body, contains the statements that are to be executed when the function is called, must be wrapped in braces

ignores extra arguments, and missing parameters get assigned undefined (or what's after =)

a return statement determines the value the function returns, without expression ⇒ undefined

---

# **Binding and scopes**

each binding has a scope, the part of the program in which the binding is visible

global, outside any function or block, the whole program

inside a function/block only be referenced in that local scope, local bindings

let const are local to the block, var are visible throughout the function or globally

scope can look out into the scope around it, when have the same name, can only see the innermost one

**Declaration notation**

use keyword function at the start of a statement

function declarations are not part of the regular top-to-bottom flow of control, "moved" to the top, and can be used by all the code in that scope

```jsx
console.log(square(12));
funciton square(x) {
	return x * x;
}//no ; needed
```

---

# **Arrow function**

use an arrow ⇒ (= >) after the list of parameters and followed by the functions body

```jsx
const plus = (x, y) => {
	return x + y;
};
const square = x => x * x;
```

do almost the same, but less verbose

---

# **Call Stack**

the place where the computer stores context

calls→the current context is stored on top of this stack, and returns→removes the top context from the stack and uses that context to continue execution

**Closure**

[How do JavaScript closures work?](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work)

reference a specific instance of a local binding in an enclosing scope

e.g. return another function

```jsx
function multiplier(factor) {
	return number => number * factor;
}

let twice = multiplier(2);
//let twice = number => number * 2;
console.log(twice(5));
//->10
```

---

# **Recursion**

a function call itself, recursive

```jsx
function power(base, exponent) {
	if (exponent == 0) {
		return 1;
	} else {
		return base * power(base, exponent - 1);
	}
}
```

### Objects and Arrays

group values to build more complex structures

---

# **Array**

[ , , ], list of values between square brackets, separated by commas

getting the elements inside an array use square brackets and index, start with 0

```jsx
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[0]);
//->2
```

---

# **Properties**

expressions access a property of some value

almost all values except null and undefined have properties

array.length, array["length"]

**Methods**

hold function values, e.g. toUpperCase()

---

# **Objects**

arbitrary collections of properties

using braces, a list of properties separated by commas, name followed by a colon and a value

reading a property that doesn't exist will give value undefined

assign a value to a property expression with the = operator

delete to cut off tentacles

Object.keys() to show all the properties

Object .assign(), copies all properties from one object into another

---

# **Mutability**

object has properties that can be changed

have the same properties ≠ they are same

if assigned to another object, it will change when that object changes

**JSON**

store in the computer's memory as sequences of bits holding the addresses of their contents

serialize the data, convert into a flat description

JSON, JavaScript Object Notation

names have to be surrounded by double quotes

JSON.stringify

JSON.parse