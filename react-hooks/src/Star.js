import React, { useState } from "react";
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
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => {
            setSelectedStars(i + 1); //using this to change the state attached to each individual star in the array
          }}
        />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </>
  );
}

function App() {
  return <StarRating totalStars={10} />;
}
