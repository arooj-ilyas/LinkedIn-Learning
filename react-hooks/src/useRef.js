import React, { useRef } from "react";

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
