import "./App.css";
import { useState } from "react";

function App() {
  // we want to get a better understanding of what useState is and what is expects
  const what = useState();
  console.log(what);
  // Output: (2) [undefined, ƒ]
  // First value: think of the undefined value as the state value when we run the app for the first time  (when we render the app component)
  // Second value: function we will use to update the state, changes state for the entire app
  // So -> how do we set an initial state for this app?

  // States can only update/respond to some kind of user input
  const [emotion, setEmotion] = useState("happy"); // Emotion is our state variable, setEmotion is the function we are going to use to update the state

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("excited")}>Excited</button>
    </div>
  );
}

export default App;
