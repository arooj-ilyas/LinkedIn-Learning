import React, { useRef, useState } from "react";

function App() {
  // we want to track whatever the user inputs into the text field; in this case we wanna catalogue a sound the user inputs, and whatever we think the closest color to that sound may be
  // we want to be able to 'reach out' to the form element and grab whatever the user types in, and access this somewhere
  // this allows us to check in with the values of the form elements (something you might be able to pass to db or external process) and capture user input
  const sound = useRef();
  const color = useRef();

  // handle submitting the form -> want to prevent page from reloading as soon as form is submitting ('ADD' is pressed)
  const submit = (e) => {
    e.preventDefault();
    const soundValue = sound.current.value; //.current.value is given to use by useRef fn
    const colorValue = color.current.value;
    alert(`${soundValue} sounds like ${colorValue}`);
    // once alert is made and user has hit ok, we want fields to clear
    sound.current.value = "";
    color.current.value = "";
  };

  return (
    <form onSubmit={submit}>
      {/* attach to form element using ref={name of ref}*/}
      <input ref={sound} type="text" placeholder="Sound..." />
      <input ref={color} type="color" />
      <button>ADD</button>
    </form>
  );
}

// another way to inputs in a form is via controlled components with useState
// means you handle form inputs values by assigning them to state variables

function AppTwo() {
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");

  // handle submitting the form -> want to prevent page from reloading as soon as form is submitting ('ADD' is pressed)
  const submit = (e) => {
    e.preventDefault();
    alert(`${sound} sounds like ${color}`);
    // once alert is made and user has hit ok, we want fields to clear
    setSound("");
    setColor("#000000");
  };

  return (
    <form onSubmit={submit}>
      {/* instead of ref={name}, we will attach to form element using value={name*/}
      {/* now our inputs are in charge of changing the state, not the useRef */}
      <input
        value={sound}
        type="text"
        placeholder="Sound..."
        onChange={(e) => setSound(e.target.value)}
      />
      <input
        value={color}
        type="color"
        onChange={(e) => setColor(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

// we can go even further and extract this functionality into a seperate function using 'custom hooks'
