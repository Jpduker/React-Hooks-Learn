import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {
  const [state, setState] = useState({count:4 , theme:'blue'});

  const count = state.count
  const theme = state.theme

  function decrementCount() {
    setState(prevState =>{ return {
      ...prevState, count: prevState.count -1
    }});
  }

  function incrementCount() {
    setCount(prevCount => prevCount +1);
  }
  return (
    <>
      <button onClick={incrementCount}>+</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={decrementCount}>-</button>
    </>
  );
}

export default App;
