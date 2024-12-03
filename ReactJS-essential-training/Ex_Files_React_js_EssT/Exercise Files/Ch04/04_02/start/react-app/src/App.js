// Typically components are kept inside of their own files
// General format -> create a function, export function as default (one function per component)
// Now we can make changes which hot reload, refresh browser

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello from React</h1>
    </div>
  );
}

export default App;
