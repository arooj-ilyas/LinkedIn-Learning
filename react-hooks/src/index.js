import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// for the sake of keeping things simple for this app, we won't import the app, we will just create it here
// we want to add state to our app component
function App() {
  return (
    <div>
      <h1>This package is:</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
