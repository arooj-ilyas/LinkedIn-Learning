/*
we want to handle one of three states:
1 - if the data isn't available yet but is loading
2 - if we get the data  
3 - if there is an error
*/

import { useState, useEffect } from "react";

// this hook will take in the URI of some sort of API that we want to fetch from
export function useFetch(uri) {
  // first step = create state variables for each of the states we want to handle
  const [data, setData] = useState(); //initial state will be null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  // next step = call the useEffect, this is going to help us fetch the data
  useEffect(() => {
    if (!uri) return; // fallback catch case for if uri doesn't work
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false)) // we want to change loading state to be false once data is fetched
      .catch(setError); // place a catch incase something goes wrong to set the error state
  }, []); // only want useEffect to be called when theres a new uri or page first renders

  return { data, loading, error };
}
