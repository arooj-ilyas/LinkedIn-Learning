/*
- useState expects two items in its array
  1. name of state variable we want to keep track of
  2. function to change the state of the variable 
- use useState hook to keep track of value of checkbox
- more often than not, we are not working with a single component, so working with state in a component tree is an important concept to grasp

- useEffect side effects are typically console.logs or some kind of DOM api (e.g. history or window)
- typically to use useEffect, you need to set up a state variable
- useEffect takes in a function and by default runs after each render and each update, using [] makes it run only on first render

- there are also times when we want values to be available to the entire component tree
  - in these situations, we should place the data in the context, rather than sending it up and down the tree so that all of the child components wil lknow the values that are being passed down
*/

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useFetch } from "./useFetch";

// inside of this app component, we want to display some data from an api and handle the different states using the useFetch hook we built before
// login is going to be the prop we pass in here, so users can see the data for their own login dynamically
function App({ login }) {
  // our useFetch hook takes in the uri of the api we are working with
  // want to use our predefined useFetch hook to manage all potential states (loading, error, data) when we're making http request
  const { loading, error, data } = useFetch(
    `https://api.github.com/users/${login}`
  );
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> // good first step to return to get data visibility before trying to map; */}
      <img src={data.avatar_url} alt={data.login} />
      {/* display some personal info, not all users have .name prop so good to use && to check it exists first */}
      <div>
        <h1>{data.login}</h1>
        {/* want to prevent app from 'breaking' if some info we want to display does not exist */}
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App login="arooj-ilyas" />);
