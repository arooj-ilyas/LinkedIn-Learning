// WRAP UP
/*
- We've seen how react hooks can add additional functionality to our applications
- useState hook -> to manage state of form fields
- useRef hook -> to reach out to inputs and figure out their vaues ref 
- useEffect -> to perform side effects

-> MOST exciting thing about hooks = can create own custom hooks to be used within app! 
- A custom hook is a function that always starts with the keyword 'use'
- NOTE: want to use spread operator {...} sparingly, only when not pushing in too many elements
*/

import "./App.css";
import { useState } from "react";

function App() {
  function useInput(initialValue) {
    const [value, setValue] = useState(initialValue); // any input is going to take in a value and use setValue to upadate that value
    return [
      {
        value,
        onChange: (e) => setValue(e.target.value),
      }, // first item in the array is the state value, as well as an onChange which takes in whatever the input is and calls setValue with the target.value
      () => setValue(initialValue), // second item we are going to pass is the cleanup function where we setValue to whatever the initialValue was
    ];
  }

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("#000000");
  };
  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="color title..."
      />
      <input
        value={color}
        type="color"
        onChange={(event) => setColor(event.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

export default App;
