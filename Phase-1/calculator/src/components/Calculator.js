import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./Calculator.css";


const Calculator = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("calcHistory");
    return saved ? JSON.parse(saved) : [];
  });
  const [showHistory, setShowHistory] = useState(true);

  const handleClick = (val) => setInput((prev) => prev + val);
  const handleClear = () => setInput("");

  const handleCalculate = () => {
    try {
      const result = evaluate(input);
      const record = `${input} = ${result}`;
      const newHistory = [record, ...history];
      setHistory(newHistory);
      setInput(result.toString());
      localStorage.setItem("calcHistory", JSON.stringify(newHistory));
    } catch {
      setInput("Error");
    }
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("calcHistory");
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","%","+"].map((b) => (
          <button key={b} onClick={() => handleClick(b)}>{b}</button>
        ))}
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
      </div>

      <div className="history">
        <div className="header">
          <h3>History</h3>
          <button onClick={() => setShowHistory(!showHistory)}>
            {showHistory ? "Hide" : "Show"}
          </button>
          <button onClick={clearHistory}>Clear</button>
        </div>

        {showHistory && (
          <ul>
            {history.length === 0
              ? <li>No history yet</li>
              : history.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Calculator;
