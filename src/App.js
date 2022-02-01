import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [number, setNumber] = useState(2);
  return (
    <div className='App'>
      <div>{number}</div>
      <button
        onClick={() => setNumber(number-1)}
      >-</button>
      <button
        onClick={() => setNumber(number+1)}
      >+</button>
    </div>
  )
}

export default App;
