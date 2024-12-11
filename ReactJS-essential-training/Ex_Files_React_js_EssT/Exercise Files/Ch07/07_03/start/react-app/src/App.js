/*
- We want to be able to link to different components without manually typing endpoint into browser
*/

import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
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
