/*
- We can also fetch data from a graphQL API -> a way of creating an API where you can specify what data you want by using its field 
- As well as passing data to the component, we need to pass the query
- We need to make the fetch request more robust to send along the body of the query so we are not just getting all the data from the api 
  - We need to send the query we want to get all the info we want back 
*/

import "./App.css";
import { useState, useEffect } from "react";

const query = `
query {
  allLifts{
    name,
    elevationGain,
    status
  }
}`;

// specify some options with methods, headers and body format to send query string when we send API request
const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query }),
};

function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {elevationGain} {status}
      </p>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://snowtooth.moonhighway.com/`, opts)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  // we want to iterate over the data in the api
  return (
    <div>
      {data.allLifts.map((lift) => (
        <Lift
          name={lift.name}
          elevationGain={lift.elevationGain}
          status={lift.status}
        />
      ))}
    </div>
  );
}

export default App;
