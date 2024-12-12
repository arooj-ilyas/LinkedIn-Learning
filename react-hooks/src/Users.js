import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) {
    return (
      <div>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
        <button
          onClick={() => {
            setData([]);
          }}
        >
          Remove Users
        </button>
      </div>
    );
  }

  return <p>No Users</p>;
}
