/* Notes:
- Important to understand destructuring, helps us get ready to deal with state in our application
- We can use destructuring to grab properties from the props object by their key
- In this example, think of the object as having a key called library, a value called React
- We can select the Library key and now we don't have to access it via props.library, we can grab directly from the object (i.e. reaching into the object and grabbing its key)
*/

import "./App.css";

// You can also destructure arrays
// Unlike when destructuring objects, we can't reach into the array and assign a property name based on a key
// const cities = ["Tokyo", "Tahoe City", "Bend"];

// We need to do array destructuring
// In this, we assign a variable name based on the position within the array
const [firstCity, secondCity, thirdCity] = ["Tokyo", "Tahoe City", "Bend"];
console.log(firstCity);
console.log(secondCity);
console.log(thirdCity);

function App({ library }) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
