/*
- Important thing to learn how to do with react = fetch data from external API
- In this exercise, we will use API - https://api.github.com/users/arooj-ilyas
*/

import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useState("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);
    resetTitle();
    resetColor();
  };
  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="color title..." />
      <input {...colorProps} type="color" />
      <button>ADD</button>
    </form>
  );
}

export default App;
