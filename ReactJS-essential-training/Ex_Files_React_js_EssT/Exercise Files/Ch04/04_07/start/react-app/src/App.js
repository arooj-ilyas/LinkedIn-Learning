/* NOTES:
- Here we are going to create a checkbox that is going to manage states with useState
- Goal is that any time we change the status, it changes the output
  - The way to appraoch this is we want to call onChange which calls setChecked.
  - This will take a look at whatever the value of checked is (true or false) and return the opposite
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
      <label>Checked</label>
    </div>
  );
}

export default App;
