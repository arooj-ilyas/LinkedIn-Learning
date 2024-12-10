/*
- Important thing to learn how to do with react = fetch data from external API
- In this exercise, we will use API - https://api.github.com/users/arooj-ilyas
*/

import "./App.css";
import { useState, useEffect } from "react"; // useState to handle data, useEffect to make that call for that external data

function App() {
  // Create container to store data
  const [data, setData] = useState(null);
  useEffect(() => {});

  return <h1>Data</h1>;
}

export default App;
