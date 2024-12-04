/* NOTES:
- Here we are going to create a checkbox that is going to manage states with useState
- Goal is that any time we change the status, it changes the output
  - The way to appraoch this is we want to call onChange which calls setChecked.
  - This will take a look at whatever the value of checked is (true or false) and return the opposite
  - We want to have out label reflect that change by checking if checked is true and displaying the corresponding msg (use ? and :)
*/

/* REFACTORING to utilize useReducer:
- We can extract this functionality -> setChecked((checked) => !checked) -> to be 'cleaner' into a separate function so we don't manage it within our onChange
- Swap out useState for a different hook, useReducer
- useReducer takes in two different arguments
  - First: function we are going to use to update the state
  - Second: our initial state
- Then we update the onChange to take in the name of the function we will use to update the state
*/

import "./App.css";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <input
        type="checkbox"
        value={checked}
        onChange={() => {
          setChecked((checked) => !checked);
        }}
      ></input>
      <label>{checked ? "Checked" : "Not Checked"}</label>
    </div>
  );
}

export default App;
