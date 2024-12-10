// Always question: how are we going to handle form inputs?
// If we wanted to collect information, consider using the useRef hook
//  - a ref is a way for us to reach out to an individual element and check in to what it's value is
// input (type=color) collects some sort of color value
// e.g. in this case, when the user interacts with form, we want to be able to reach out to the form and grab name of color + hex code

// When using a form, we want to create a function which is a block of reusable code which, when invoked, submits the form values
// By default, a form when submitted (handler obSubmit) refreshes the page, in most casese we don't want that so use e.preventDefault()
// If you do prevent default, form values will stay persistent unless manually cleared -> reset values at end of function invoke

// Think of a useRef as being a hook that is going to reach out to some sort of UI element and get it's value
// The way we are handling this form in this element is an uncontrolled component - so we are creating a small container and assign the value
// Unlike useState, useRef does not rerender when a change occurs; we always have to reach out to the current dot value (element.current.value) to figure out what that value actually is

import "./App.css";
import { useRef } from "react";

function App() {
  // we want to define the references we will attach to the form inputs
  const txtTitle = useRef(); //object with key value of 'current' -> current = value of field at any given time
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type="input" placeholder="color title..." />
      <input ref={hexColor} type="color" />
      <button>ADD</button>
    </form>
  );
}

export default App;
