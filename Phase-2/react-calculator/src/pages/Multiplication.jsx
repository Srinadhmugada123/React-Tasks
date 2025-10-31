// import React from 'react'
// import CalculatorTemplate from './_CalculatorTemplate'

// export default function Multiplication() {
//   return <CalculatorTemplate opName="Multiplication" opSymbol="×" operate={(a, b) => a * b} />
// }


// import React, { useState } from "react";
// import NumberPad from "../components/NumberPad";

// export default function Multiplication() {
//   const [input, setInput] = useState("");
//   const [result, setResult] = useState(null);

//   const handleNumberClick = (num) => setInput((prev) => prev + num);
//   const handleClear = () => {
//     setInput("");
//     setResult(null);
//   };

//   const handleEqual = () => {
//     try {
//       const numbers = input.split("*").map(Number);
//       const product = numbers.reduce((a, b) => a * b);
//       setResult(product);
//     } catch {
//       setResult("Error");
//     }
//   };

//   return (
//     <div className="calc-page">
//       <h2>Multiplication</h2>
//       <div className="calc-display">{result !== null ? result : input || "0"}</div>
//       <button className="operator" onClick={() => setInput((prev) => prev + "*")}>
//         ×
//       </button>
//       <NumberPad onNumberClick={handleNumberClick} onClear={handleClear} onEqual={handleEqual} />
//     </div>
//   );
// }



import React, { useState } from "react";
import CalculatorPad from "../components/CalculatorPad";
import { useHistoryData } from "../context/HistoryContext";

export default function Multiplication() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const { addToHistory } = useHistoryData();

  const handleNumberClick = (num) => setInput((prev) => prev + num);
  const handleClear = () => { setInput(""); setResult(null); };

  const handleEqual = () => {
    try {
      const numbers = input.split("*").map(Number);
      const prod = numbers.reduce((a, b) => a * b);
      setResult(prod);
      addToHistory("Multiplication", input, prod);
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="calc-page">
      <h2>✖️ Multiplication</h2>
      <div className="calc-display">{result !== null ? result : input || "0"}</div>
      <div className="operators">
        <button onClick={() => setInput((prev) => prev + "*")}>×</button>
      </div>
      <CalculatorPad onNumberClick={handleNumberClick} onClear={handleClear} onEqual={handleEqual} />
    </div>
  );
}

