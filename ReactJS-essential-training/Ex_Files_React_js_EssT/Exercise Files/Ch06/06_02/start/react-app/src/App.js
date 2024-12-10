/*
In this lesson:
- going to actually display data in our component
*/

import "./App.css";
import { useState, useEffect } from "react";

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{location}</h1>
      <img src={avatar} height={150} alt={name} />
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/arooj-ilyas`)
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data)
    return (
      <GithubUser
        name={data.name}
        location={data.location}
        avatar={data.avatar_url}
      />
    );
  return <h1>Data</h1>;
}

export default App;
