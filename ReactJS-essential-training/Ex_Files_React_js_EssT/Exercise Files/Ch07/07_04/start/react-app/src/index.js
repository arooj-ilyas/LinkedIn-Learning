/*
- Nested route configurations are really powerful because it allows you to create page heirarchy's in your app
- Just note -> at some level we want to have our route configurations created, define all the paths and then we create the element propety to display the correct component at the correct time
- When we do nested routes, the path can omit the / (e.g. history vs /history) 
*/

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App, About, Contact, History } from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />}>
        <Route path="history" element={<History />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
