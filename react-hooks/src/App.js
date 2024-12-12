/*
- The most common place object destucturing is used is inside of the component 
  - we can make components dynamic using 'props' and passing in values when the component is being called 
  - props.name can be destructured to { name }
  - destructuring can also be used with arrays; and can be seen to be used quite often with react hooks
  - we can use array destucturing to assign values to positions in an array
    - const people = ["Ali", "Anna", "Alex"] -> const [first, second, third] = ["Ali", "Anna", "Alex"]
    - If we only care for position 3 -> const [, , third] = ["Ali", "Anna", "Alex"]
*/

import "./App.css";

function App({ name }) {
  return (
    <div className="App">
      <h1>Hello {name}!</h1>
    </div>
  );
}

export default App;
