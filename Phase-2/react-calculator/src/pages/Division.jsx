// import React from 'react'
// import CalculatorTemplate from './_CalculatorTemplate'

// export default function Division() {
//   return (
//     <CalculatorTemplate
//       opName="Division"
//       opSymbol="÷"
//       operate={(a, b) => (b === 0 ? 'Cannot divide by 0' : a / b)}
//     />
//   )
// }


// import React, { useState } from "react";
// import NumberPad from "../components/NumberPad";

// export default function Division() {
//   const [input, setInput] = useState("");
//   const [result, setResult] = useState(null);

//   const handleNumberClick = (num) => setInput((prev) => prev + num);
//   const handleClear = () => {
//     setInput("");
//     setResult(null);
//   };

//   const handleEqual = () => {
//     try {
//       const numbers = input.split("/").map(Number);
//       const quotient = numbers.reduce((a, b) => a / b);
//       setResult(quotient);
//     } catch {
//       setResult("Error");
//     }
//   };

//   return (
//     <div className="calc-page">
//       <h2>Division</h2>
//       <div className="calc-display">{result !== null ? result : input || "0"}</div>
//       <button className="operator" onClick={() => setInput((prev) => prev + "/")}>
//         ÷
//       </button>
//       <NumberPad onNumberClick={handleNumberClick} onClear={handleClear} onEqual={handleEqual} />
//     </div>
//   );
// }


import React, { useState } from "react";
import CalculatorPad from "../components/CalculatorPad";
import { useHistoryData } from "../context/HistoryContext";

export default function Division() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const { addToHistory } = useHistoryData();

  const handleNumberClick = (num) => setInput((prev) => prev + num);
  const handleClear = () => { setInput(""); setResult(null); };

  const handleEqual = () => {
    try {
      const numbers = input.split("/").map(Number);
      const div = numbers.reduce((a, b) => a / b);
      setResult(div);
      addToHistory("Division", input, div);
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="calc-page">
      <h2>➗ Division</h2>
      <div className="calc-display">{result !== null ? result : input || "0"}</div>
      <div className="operators">
        <button onClick={() => setInput((prev) => prev + "/")}>÷</button>
      </div>
      <CalculatorPad onNumberClick={handleNumberClick} onClear={handleClear} onEqual={handleEqual} />
    </div>
  );
}

