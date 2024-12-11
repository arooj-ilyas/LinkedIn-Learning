/*
- We want to be able to link to different components without manually typing endpoint into browser
- Reason we are importing from react-router-dom is because we are using the DOM/brownser to create this web application
  - There are also react-router tools for React Native (mobile apps) -> each split into its on package
*/

import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
}

export function App() {
  return <Home />;
}
