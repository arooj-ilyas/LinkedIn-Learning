/*
- When fetching data from external API, our data can be in a few different states which can all be represented using useState hooks

1 = Loading state
- fetching data but hasn't yet come back

2 = Success state
- we have some data to display

3 = Error state
- what we want to display if something goes wrong
*/

import "./App.css";
import { useState, useEffect } from "react";

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name} />
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // we want to model the flow of data in our useEffect
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/arooj-ilyas`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
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
