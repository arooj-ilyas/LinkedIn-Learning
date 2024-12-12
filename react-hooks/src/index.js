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

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");

  // handle submitting the form -> want to prevent page from reloading as soon as form is submitting ('ADD' is pressed)
  const submit = (e) => {
    e.preventDefault();
    const soundValue = sound.current.value; //.current.value is given to use by useRef fn
    const colorValue = color.current.value;
    alert(`${soundValue} sounds like ${colorValue}`);
    // once alert is made and user has hit ok, we want fields to clear
    sound.current.value = "";
    color.current.value = "";
  };

  return (
    <form onSubmit={submit}>
      {/* attach to form element using ref={name of ref}*/}
      <input ref={sound} type="text" placeholder="Sound..." />
      <input ref={color} type="color" />
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
