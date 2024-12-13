# LinkedIn-Learning

Series of LinkedIn courses and affiliated exercise files worked on to add to skillsets
GOAL = refactor each 'start' file within the chapter to look like the 'finish' file

## React.js Essential Training

https://www.linkedin.com/learning/react-js-essential-training-14836121/adding-react-to-your-project?autoSkip=true&resume=false

Deployed app - https://extraordinary-paprenjak-1ed81f.netlify.app/

### Lessons learnt:

- A solid foundation for starting to work on react projects
- What is react?
- Intro to React Elements
- React Components
- React State in the Component Tree
- Handling Forms in React
- Fetching Data (3rd Party API) Asynchronously
- React Router
- React Testing Library and Jest
- Deployment

## React Hooks

https://www.linkedin.com/learning/react-hooks

_Note: At the time of this course React v18 was being used, this course has been adjusted on my end to utilize v19 to keep up to date with latest version releases whilst still learning basic React fundamentals._

### Lessons learnt:

- Hooks allow you to add state to function components and abstract logic into seperate functions
- Any hook from react has to start with prefix 'use' (e.g. useState, useReducer, useEffect)
- Good practice to use functions rather than classes when creating components (classes could be removed in later React versions)
- Array descturturing -> const [first, second, third] = ["Ali", "Anna", "Alex"]
- How to build a checkbox using useState
- Working with state in a component tree
- useEffect allows you to perform 'side effects' in function components
- Dependancy arrays in useEffects and what to put inside of them based on when you want the side effect to occur
- Fetching data with useEffect
- Any `<li>` always needs a unuqiue key attribute
- useReducer takes in two arguments (not just an initial state like useState) -> first is a fn that returns a new state, second is initial state
- How to refactor useState to useReducer and dispatch actions
- How to manage form inputs with useRef -> allows use to reach out to a component and determine its value
- How to create controlled components using useState
- How to use custom hooks; reusing form logic with custom hooks, data fetching with a fetch hook
- Placing and retrieving data using useContext
- How to build a fetch component
- Passing data down to child and nested components via the provider -> placing data in context
- Reading from context using a hook
