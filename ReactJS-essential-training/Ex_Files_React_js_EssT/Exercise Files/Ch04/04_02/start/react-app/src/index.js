// Think of this as the entry point to the application; the main js file we can use to render our app to the DOM
// Think of React.StrictMode as a tool for highlighting any pontetial problems, just a package that activates some additional checks to let you know if any code is written incorrectly (only runs in dev, not production)

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") //referencing the root element inside public folder (index.html) where you can inject all your react code
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
