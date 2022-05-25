import React, { useState } from "react";
import './App.css';

const App = () => {
  const [number, setNumber] = useState(0);

  const Increment = () => {
    if(number === 10)
      return;

    const newNumber = number + 1;
    setNumber(newNumber);
  }

  const Decrement = () => {
    if(number === -10)
      return;
      
    const newNumber = number - 1;
    setNumber(newNumber);
  }

  return(
    <div className="App">
      <button onClick={ () => Increment() } className="counter">+</button>
      <button onClick={ () => Decrement() } className="counter">-</button>
      <h2>{ number }</h2>
    </div>
  )

}

export default App;