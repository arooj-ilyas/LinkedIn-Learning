/*
- The most common place object destucturing is used is inside of the component 
  - we can make components dynamic using 'props' and passing in values when the component is being called 
  - props.name can be destructured to { name }
  - destructuring can also be used with arrays; and can be seen to be used quite often with react hooks
  - we can use array destucturing to assign values to positions in an array
    - const people = ["Ali", "Anna", "Alex"] -> const [first, second, third] = ["Ali", "Anna", "Alex"]
    - If we only care for position 3 -> const [, , third] = ["Ali", "Anna", "Alex"]
*/

// we want to take that data from context (in index.js) and make it accessible to this component
// now ANY component which is part of the app, we're going to be able to read the value of 'trees' simply by calling useContext and giving it TreesContext
import "./App.css";
// import { TreesContext } from ".";
// import { useContext } from "react";
import { useTrees } from ".";

function App() {
  // const { trees } = useContext(TreesContext);
  const { trees } = useTrees();

  return (
    <div>
      <h1>Tree's I have heard of:</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
