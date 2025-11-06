
// start 1 //
// import React, { useState } from "react";
// import CalculatorPad from "../components/CalculatorPad";
// import { useHistoryData } from "../context/HistoryContext";

// export default function Addition() {
//   const [input, setInput] = useState("");
//   const [result, setResult] = useState(null);
//   const { addToHistory } = useHistoryData();

//   const handleNumberClick = (num) => setInput((prev) => prev + num);
//   const handleClear = () => { setInput(""); setResult(null); };

//   const handleEqual = () => {
//     try {
//       const numbers = input.split("+").map(Number);
//       const sum = numbers.reduce((a, b) => a + b, 0);
//       setResult(sum);
//       addToHistory("Addition", input, sum);
//     } catch {
//       setResult("Error");
//     }
//   };

//   return (
//     <div className="calc-page">
//       <h2>➕ Addition</h2>
//       <div className="calc-display">{result !== null ? result : input || "0"}</div>
//       <div className="operators">
//         <button onClick={() => setInput((prev) => prev + "+")}>+</button>
//       </div>
//       <CalculatorPad onNumberClick={handleNumberClick} onClear={handleClear} onEqual={handleEqual} />
//     </div>
//   );
// }


////// Method 2 is Navigation opeartions //
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CalculatorPad from "../components/CalculatorPad";
import { useHistoryData } from "../context/HistoryContext";

export default function Addition() {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToHistory } = useHistoryData();

  // Get input from previous page (if any)
  const [input, setInput] = useState(location.state?.input || "");
  const [result, setResult] = useState(null);

  // Update input if user navigates back with new state
  useEffect(() => {
    if (location.state?.input) {
      setInput(location.state.input);
    }
  }, [location.state]);

  const handleNumberClick = (num) => setInput((prev) => prev + num);

  const handleClear = () => {
    setInput("");
    setResult(null);
  };
// 
const handleEqual = () => {
  try {
    // Split numbers and operators using regex
    const tokens = input.match(/(\d+\.?\d*|[+\-*/])/g);
    if (!tokens) {
      setResult("Error");
      return;
    }

    let total = parseFloat(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
      const op = tokens[i];
      const nextNum = parseFloat(tokens[i + 1]);
      switch (op) {
        case "+": total = total + nextNum; break;
        case "-": total = total - nextNum; break;
        case "*": total = total * nextNum; break;
        case "/": total = total / nextNum; break;
        default: break;
      }
    }

    setResult(total);
    addToHistory("Calculation", input, total);
  } catch {
    setResult("Error");
  }
};


  // Navigate to another operation page, preserving current input
  const goToOperation = (operation) => {
    navigate(`/${operation}`, { state: { input } });
  };

  return (
    <div className="calc-page">
      <h2>➕ Addition</h2>
      <div className="calc-display">
        {result !== null ? result : input || "0"}
      </div>

      <div className="calc-body">
        {/* Number pad section */}
        <div className="pad-section">
          <div className="operators">
            <button onClick={() => setInput((prev) => prev + "+")}>+</button>
          </div>

          <CalculatorPad
            onNumberClick={handleNumberClick}
            onClear={handleClear}
            onEqual={handleEqual}
          />
        </div>

        {/* Side buttons to navigate */}
        <div className="side-buttons">
          <button onClick={() => goToOperation("subtraction")}>➖</button>
          <button onClick={() => goToOperation("multiplication")}>✖️</button>
          <button onClick={() => goToOperation("division")}>➗</button>
        </div>
      </div>
    </div>
  );
}

