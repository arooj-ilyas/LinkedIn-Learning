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

import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const initialState = {
  message: "hi",
};

// this reducer function takes in the previous state and an action, and returns a new state
// the real benefit of having access to that prev state is so that we can use it (ESPECIALLY if our new state relies on our old state)
// this feature is especially useful in calculation logic and/or checking against previous values to make sure you are returning the new thing that's correct
// use a switch statement to determine which state is returned
function reducer(state, action) {
  // take a look at whatever the action type is, and define a list of possible actions to dispatch based on that type
  switch (action.type) {
    case "yell":
      return {
        message: `HEY! I JUST SAID ${state.message}`,
      };
    case "whisper":
      return {
        message: `excuse me, I just said ${state.message}`,
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState); // define reducer and initialState outside of these parenthesis

  return (
    <>
      <p>Message: {state.message}</p>
      {/* once reducer is defined, we have message displaying with initial state but we want to try to dispatch some actions by adding some UI elements to trigger changes and dispatch actions */}
      <button onClick={() => dispatch({ type: "yell" })}>YELL</button>
      <button onClick={() => dispatch({ type: "whisper" })}>whisper</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
