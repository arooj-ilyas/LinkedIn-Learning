/*
- useState expects two items in its array
  1. name of state variable we want to keep track of
  2. function to change the state of the variable 

- use useState hook to keep track of value of checkbox

- more often than not, we are not working with a single component, so working with state in a component tree is an important concept to grasp
*/

// for the sake of keeping things simple for this app, we won't import the app, we will just create it here; want to add state to our app component

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { FaStar } from "react-icons/fa";

// in order to create an array of stars which are to be displayed based on rating, we need to create a helper function
// this function will take in the length (i.e. how many stars we want to create) and return an array with that number of items
const createArray = (length) => [...Array(length)];

// this component is what makes up all of the star rating components
function Star({ selected = false, onSelect }) {
  return (
    <FaStar color={selected ? "red" : "gray"} onClick={onSelect} size={30} />
  );
}

// this component is going to return a certain number of stars based on the rating, and use that createArray function to display the stars
function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0); //we need to supply this state variable to each one of the stars
  return createArray(totalStars).map((n, i) => (
    <Star
      key={i}
      selected={selectedStars > i}
      onSelect={() => {
        setSelectedStars(i + 1);
      }}
    />
  ));
}

function App() {
  return <StarRating totalStars={10} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
