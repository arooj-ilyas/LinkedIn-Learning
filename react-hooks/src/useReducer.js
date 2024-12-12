import { useReducer } from "react";

function App() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
}

const initialState = {
  message: "hi",
};
function reducer(state, action) {
  // take a look at whatever the action type is, and define a list of possible actions to dispatch based on that type
  switch (action.type) {
    case "yell":
      return {
        message: `HEY! I JUST SAID ${state.message}`,
      };
    case "whisper":
      return {
        message: `excuse me, I just said ${state.message}`,
      };
  }
}

function AppTwo() {
  const [state, dispatch] = useReducer(reducer, initialState); // define reducer and initialState outside of these parenthesis

  return (
    <>
      <p>Message: {state.message}</p>
      {/* once reducer is defined, we have message displaying with initial state but we want to try to dispatch some actions by adding some UI elements to trigger changes and dispatch actions */}
      <button onClick={() => dispatch({ type: "yell" })}>YELL</button>
      <button onClick={() => dispatch({ type: "whisper" })}>whisper</button>
    </>
  );
}
