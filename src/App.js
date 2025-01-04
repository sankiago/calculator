import "./App.css";
import { useState, useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);
  const inputValue = () => inputRef.current.value;
  const inputNum = () => Number(inputRef.current.value);

  function plus(e) {
    e.preventDefault();
    if (inputValue() === "") return result;
    setResult(result + inputNum());
    inputRef.current.focus();
  }

  function minus(e) {
    e.preventDefault();
    if (inputValue() === "") return result;
    setResult(result - inputNum());
    inputRef.current.focus();
  }

  function times(e) {
    e.preventDefault();
    if (inputValue() === "") return result;
    setResult(result * inputNum());
    inputRef.current.focus();
  }

  function over(e) {
    e.preventDefault();
    if (inputValue() === "") return result;
    if (inputNum() !== 0) {
      setResult(result / inputValue());
    } else {
      alert("ERROR: you're trying to divide by 0!!!");
    }
    inputRef.current.focus();
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    inputRef.current.focus();
  }

  return (
    <div className="indexWrap">
      <h1>Calculadora</h1>
      <p>Result: {result}</p>
      <input type="Number" ref={inputRef}></input>
      <div className="controlWrapper">
        <button className="operation" onClick={plus}>
          +
        </button>
        <button className="operation" onClick={minus}>
          -
        </button>
        <button className="operation" onClick={times}>
          ×
        </button>
        <button className="operation" onClick={over}>
          ÷
        </button>
        <button className="clear" onClick={resetInput}>
          CLEAR INPUT
        </button>
        <button className="clear" onClick={resetResult}>
          CLEAR RESULT
        </button>
      </div>
    </div>
  );
}

export default App;
