/* NOTES:
- Here we are going to create a checkbox that is going to manage states with useState
*/

import "./App.css";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <input type="checkbox"></input>
      <label>Checked</label>
    </div>
  );
}

export default App;
