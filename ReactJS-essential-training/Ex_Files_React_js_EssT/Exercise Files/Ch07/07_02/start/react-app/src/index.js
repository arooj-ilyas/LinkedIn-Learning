/*
- First step when configuring our router is to do it at the index level of the app
- We want to import BrowserRouter and wrap it around the app -> allows app and child components information about routing and where you are currently
*/

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <App />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
