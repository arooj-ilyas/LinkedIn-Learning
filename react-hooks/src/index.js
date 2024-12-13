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

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// inside of this app component, we want to display some data from an api and handle the different states using the useFetch hook we built before
function App() {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
