/*
- Final pattern with data loading is how we use functions to display the right data at the right time
*/

import "./App.css";

const tahoe_peaks = [
  { name: "Freel", elevation: 10891 },
  { name: "Monument", elevation: 10067 },
  { name: "Pyramid", elevation: 9983 },
  { name: "Tallac", elevation: 9735 },
];

// renderItem will be used to render an individual list item
// renderList will be what we display if we don't have anything in this list
function List({ data, renderItem, renderEmpty }) {}

function App() {
  return <h1>Hello</h1>;
}

export default App;
