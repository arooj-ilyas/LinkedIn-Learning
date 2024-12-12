//refactoring useState to useReducer

// function App() {
//   const [checked, setChecked] = useState(false);

//   return (
//     <>
//       <input
//         type="checkbox"
//         value={checked}
//         onChange={() => {
//           setChecked((checked) => !checked);
//         }}
//       />
//       {checked ? "checked" : "not checked"}
//     </>
//   );
// }

// function App() {
//     const [checked, toggle] = useReducer((checked) => !checked, false);

//     return (
//       <>
//         <input type="checkbox" value={checked} onChange={toggle} />
//         {checked ? "checked" : "not checked"}
//       </>
//     );
//   }
