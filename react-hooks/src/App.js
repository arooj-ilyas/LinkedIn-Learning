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

/* Index.js file for this would look like:
// create this context (i.e. little container) that is going to contain some data that can be consumed by any of the components that are a part of the component tree
const TreesContext = createContext();

//^ we can transform this into a custom hook to make it even more reusable
export const useTrees = () => useContext(TreesContext);

// goal -> we want to make all of this data accessible to the entire app
const trees = [
  { id: "1", type: "Maple" },
  { id: "2", type: "Oak" },
  { id: "3", type: "Family" },
  { id: "4", type: "Component" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // we want to wrap the entire app in that TreesContext.Provider we created to provide the data to the App component and anything nested below it
  // we need to supply this context with a property called value, containing the data you want to provide so that component has access to that data
  // now the data will be accessible inside of the component
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>
);
*/
