/*
- useState expects two items in its array
  1. name of state variable we want to keep track of
  2. function to change the state of the variable 
*/

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// for the sake of keeping things simple for this app, we won't import the app, we will just create it here; want to add state to our app component
function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        value={checked}
        onChange={() => {
          setChecked((checked) => !checked);
        }}
      />
      <label>{checked ? "checked" : "not checked"}</label>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
