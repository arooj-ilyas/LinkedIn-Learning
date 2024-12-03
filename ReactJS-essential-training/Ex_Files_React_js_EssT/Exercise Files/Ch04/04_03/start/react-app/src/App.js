/* Notes:
- Important to understand destructuring, helps us get ready to deal with state in our application
*/

import "./App.css";

function App(props) {
  return (
    <div className="App">
      <h1>Hello from {props.library}</h1>
    </div>
  );
}

export default App;
