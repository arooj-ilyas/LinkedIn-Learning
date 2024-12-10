// You can also manage forms using state when the inputs are controlled
// Anytime useRef is being used, we are creating an uncontrolled component (manage form elements outside of state)
// When we use useState; we want to trigger some kind of onChange events for our inputs to set the values once form is submitted
// With states in forms, we want to set state back to default once function is performed as we have prevented default

import "./App.css";
import { useState } from "react";

function App() {
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
