/*
- useState expects two items in its array
  1. name of state variable we want to keep track of
  2. function to change the state of the variable 
- use useState hook to keep track of value of checkbox
- more often than not, we are not working with a single component, so working with state in a component tree is an important concept to grasp

- useEffect side effects are typically console.logs or some kind of DOM api (e.g. history or window)
- typically to use useEffect, you need to set up a state variable
- useEffect takes in a function and by default runs after each render and each update, using [] makes it run only on first render

- there are also times when we want values to be available to the entire component tree
  - in these situations, we should place the data in the context, rather than sending it up and down the tree so that all of the child components wil lknow the values that are being passed down
*/

import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// create this context (i.e. little container) that is going to contain some data that can be consumed by any of the components that are a part of the component tree
export const TreesContext = createContext();

// goal -> we want to make all of this data accessible to the entire app
const trees = [
  { id: "1", type: "Maple" },
  { id: "2", type: "Oak" },
  { id: "3", type: "Family" },
  { id: "4", type: "Component" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // we want to wrap the entire app in that TreesContext.Provider we created to provide the data to the App component and anything nested below it
  // we need to supply this context with a property called value, containing the data you want to provide so that component has access to that data
  // now the data will be accessible inside of the component
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>
);
