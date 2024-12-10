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
function List({ data, renderItem, renderEmpty }) {
  // if there is nothing in the data, display renderEmpty otherwise return an unordered list where we map over the data
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Always try to think of all use cases; e.g. here we are passing along some JSX as fallback content to render if the data was empty
function App() {
  return (
    <List
      data={tahoe_peaks}
      renderEmpty={<p>This list is empty</p>}
      renderItem={(item) => (
        <>
          {item.name} - {item.elevation}ft
        </>
      )}
    />
  );
}

export default App;
