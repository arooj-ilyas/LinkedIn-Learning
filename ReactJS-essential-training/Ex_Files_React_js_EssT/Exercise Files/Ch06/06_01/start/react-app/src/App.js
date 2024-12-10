/*
- Important thing to learn how to do with react = fetch data from external API
- In this exercise, we will use API - https://api.github.com/users/arooj-ilyas
*/

import "./App.css";
import { useState, useEffect } from "react"; // useState to handle data, useEffect to make that call for that external data

function App() {
  // Create container to store data
  const [data, setData] = useState(null);
  useEffect(() => {
    // fetch is built into the browser; its a way of making a HTTPS call to get some data from some sort of source
    fetch(`https://api.github.com/users/arooj-ilyas`)
      // once we get that data back, we are going to take that response and call .json to turn response into jason
      .then((response) => response.json())
      // then we are going to chain on another dot function which will setData to the response in the correct format
      .then(setData);
  }, []); // only fetch that data once, when application first renders to avoid making too many API requests
  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return <h1>Data</h1>;
}

export default App;

// Next exercise: make use of actual data and create a component with it
