/*
- useState expects two items in its array
  1. name of state variable we want to keep track of
  2. function to change the state of the variable 
- use useState hook to keep track of value of checkbox
- more often than not, we are not working with a single component, so working with state in a component tree is an important concept to grasp

- useEffect side effects are typically console.logs or some kind of DOM api (e.g. history or window)
- typically to use useEffect, you need to set up a state variable
- useEffect takes in a function and by default runs after each render and each update, using [] makes it run only on first render
*/

// for the sake of keeping things simple for this app, we won't import the app, we will just create it here; want to add state to our app component

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useInput } from "./useInput";

function App() {
  // now instead of using useState, we can use our custom hook
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetColor();
    resetTitle();
  };

  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="Sound..." />
      <input {...colorProps} type="color" />
      <button>ADD</button>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
