/*
- On every website, important to have some kind of mechanism to be able to move from page to page
- In react, we're dealing with components, so we want to figure out how to move from component to component when dealing with a single page app
  - Solution: https://reactrouter.com/
  - Allows you to seamlessly move from page to page; displaying different components 

- In this exercise: create the skeleton components to be routed between
*/

import "./App.css";

function Home() {
  return (
    <div>
      <h1>My Website</h1>
    </div>
  );
}

function App() {
  return <Home />;
}

export default App;

// Next exercise: display components through react.router
