import React from 'react';
import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [color, setColor] = useState("blue");
  const [choice, setChoice] = useState("");
  const [result, setResult] = useState("");

  const _colors = ["red", "blue", "yellow", "green"]

  const handleKeyDown = (e) => {
    switch (e.key) {
      case " ":
        shuffleColors()
        break;
      case "1":
        setChoice(_colors[0])
        break;
      case "2":
        setChoice(_colors[1])
        break;
      case "3":
        setChoice(_colors[2])
        break;
      case "4":
        setChoice(_colors[3])
        break;
      default:
        console.log('Default')
    }
  }

  const shuffleColors = () => {
    let rngIdx = Math.floor(Math.random() * _colors.length)
    setColor(_colors[rngIdx])
  }

  const answerButtons = () => {
    return _colors.map((color, idx) => <div key={color}>{idx + 1}. {color}</div>)
  }

  const checkAnswer = () => {
    if (choice === color) {
      setResult("Correct")
    } else {
      setResult("Incorrect")
    }
  }

  //useEffects
  useEffect(()=>{
    checkAnswer()
  }, [choice])

  return (
    <div className="App" onKeyDown={handleKeyDown} tabIndex="1">
      <div>Color: {color}</div>
      <br />
      <div>CHOICES
        {answerButtons()}
      </div>
      <br />
      <div>CHOICE
        <div>{choice}</div>
      </div>
      <div>RESULT
        <div>{result}</div>
      </div>
    </div>
  );
}

export default App;
