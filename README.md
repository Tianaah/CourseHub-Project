## NPM

Node Package Manager is a library or store for code that other developers have already written, which you can use in your projects. Instead of writting codes from scratch, you can borrow tools, functions, or an entire framework from npm.

## package.json

A package.json file is like an instructional manual of node.js project, it tells the node(npm) what the project needs and how it works. It keeps track of dependencies, stores project info, holds script, and manages versions.

## Vite

Vite is a modern tool that helps build and run development server for websites or web apps. It makes modern development lightning fast and simple.

# react

What is React?
React is a JavaScript library that is used to build interactive websites. It helps make
webpages respond quickly when users click buttons, type into input fields, or interact
with different parts of the page. Instead of refreshing the whole page every time
something changes, React updates only the part that needs to change.
React applications are built using components, which are small parts of the webpage.
Using components makes the code easier to understand and manage.
React also uses JSX, which looks like HTML but is written inside JavaScript. JSX
makes it easier to design the layout of a webpage.

# Components

Components are the main building blocks of a React application. Each component
represents a part of the user interface, such as a button, form, or navigation bar.

# Types of Components

1. Function Components: These are written using normal JavaScript functions.
   They are simple to use and are the most common type used today.
2. Class Components: These are written using JavaScript classes. This method is
   older and is not used as much anymore.

# Why Components Are Useful

They allow developers to reuse code
They make code easier to read and understand
They help organize large applications

# React Hooks

React Hooks allow function components to use features like state and effects without
writing class components.
Commonly Used Hooks

1. useState: Used to store data that can change, such as user input or counters.
2. useEffect: Used to run code after the page loads or updates, such as getting
   data from an API.
3. useRef: Used to access HTML elements directly without causing the page to re
   render.
   Hooks make React code simpler and easier to manage.

# User Events

User events are actions performed by users on a website. Examples include clicking a
button, typing into an input field, or submitting a form.
React allows developers to listen for these events and respond to them by running
functions. This helps the webpage update automatically based on user actions.

# JavaScript DOM

The DOM (Document Object Model) represents a webpage as a structure that
JavaScript can work with.
JavaScript can use the DOM to: - Select elements on a webpage - Change text and
styles - Respond to user interactions
Example:

# document.getElementById("myDiv");

This code selects an element with the ID myDiv.

# How React Works with the DOM

Directly changing the DOM using JavaScript can sometimes be slow and hard to
manage. React improves this by handling DOM updates automatically.
Instead of manually changing elements, developers describe what the webpage should
look like, and React updates the DOM efficiently. This makes React applications faster
and easier to maintain.

# Conclusion

React makes web development easier by using components, JSX, and Hooks to
manage user interactions and update webpages. Understanding how the DOM works
helps explain how React is able to control and update the webpage efficiently.
