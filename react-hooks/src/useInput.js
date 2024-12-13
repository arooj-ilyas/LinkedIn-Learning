// if you find you are writting a lot of the same code in your component, you can extract the logic into a custom hook
// e.g. in the previous form input elements (in useRef.js) we are just getting and resetting the values

/*
- think about what we want our hook to do and break it down...
    - we want to create a custom hook that takes something in, we grab it and send it somewhere and then reset it
- we want this hook to be a function that takes in an initial value as a prop
- we want to delclare the state variable and function to change the state using useState and initialize it with the initial value prop sent through
- our custom hook has to return something
    - the first thing to return an object that has the value and an onChange (the onchange is going to set the value)
    - the second thing to return is a function that is going to do the cleanup
*/

// you can always use react hooks inside of custom hooks
import { useState } from "react";

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    () => setValue(initialValue),
  ];
}

function App() {
  // now instead of using useState, we can use our custom hook
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetColor();
    resetTitle();
  };

  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="Sound..." />
      <input {...colorProps} type="color" />
      <button>ADD</button>
    </form>
  );
}
