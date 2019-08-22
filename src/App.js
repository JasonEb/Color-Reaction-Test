import React from 'react';
import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [color, setColor] = useState("blue");
  const [choice, setChoice] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === " "){
      shuffleColors()
    } 
  }

  const shuffleColors = () => {
    let colors = ["red", "blue", "yellow", "green"]
    let rngIdx = Math.floor(Math.random() * colors.length)
    setColor(colors[rngIdx])
  }

  const answerButtons = () => {
    let colors = ["red", "blue", "yellow", "green"]
    return colors.map((color, idx) => <div key={color}>{idx + 1}. {color}</div>)
  }

  return (
    <div className="App" onKeyDown={handleKeyDown} tabIndex="1">
      <div>Color: {color}</div>
      <br />
      <div>CHOICES
        {answerButtons()}
      </div>
    </div>
  );
}

export default App;
