/*
- First step when configuring our router is to do it at the index level of the app
- We want to import BrowserRouter and wrap it around the app -> allows app and child components information about routing and where you are currently
*/

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App, About, Contact } from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    {/* Within this <Routes></Routes> is where we set up and configure all the routes we want to display */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// Next exercise: Create links so user doesn't have to manually type in endpoint to reach desired component
