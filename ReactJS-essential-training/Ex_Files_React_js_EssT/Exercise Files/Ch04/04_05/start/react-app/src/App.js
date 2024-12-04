/* NOTES:
UseEffect
- Another hook built into React, typically used to manage side effects that aren't related to a components render (i.e. console messages, loading data, animations)
- UseEffects is sideEffect because -> not something which are affected by the render, but more so something that happens alongside it
- Rather than making it equal to some array like useState, we pass in am empty function to this
*/

import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");

  /*
    useEffects take in two arguments...
    1: empty function -> define what effect we want to happen
    2: dependency array -> when the effect is actually being called
    ---> Pass in an empty array [], it means it will only happen on mount (e.g. when app is first rendered once and not going to be called again)
    ---> OR: Pass in a property/state value to listen to any changes in the array
  */
  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, []);

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("excited")}>Excited</button>
    </div>
  );
}

export default App;
