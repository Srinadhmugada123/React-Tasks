// import React, { useState } from "react";
// import CalculatorPad from "../components/CalculatorPad";
// import { useHistoryData } from "../context/HistoryContext";

// export default function Subtraction() {
//   const [input, setInput] = useState("");
//   const [result, setResult] = useState(null);
//   const { addToHistory } = useHistoryData();

//   const handleNumberClick = (num) => setInput((prev) => prev + num);
//   const handleClear = () => { setInput(""); setResult(null); };

//   const handleEqual = () => {
//     try {
//       const numbers = input.split("-").map(Number);
//       const diff = numbers.reduce((a, b) => a - b);
//       setResult(diff);
//       addToHistory("Subtraction", input, diff);
//     } catch {
//       setResult("Error");
//     }
//   };

//   return (
//     <div className="calc-page">
//       <h2>➖ Subtraction</h2>
//       <div className="calc-display">{result !== null ? result : input || "0"}</div>
//       <div className="operators">
//         <button onClick={() => setInput((prev) => prev + "-")}>-</button>
//       </div>
//       <CalculatorPad onNumberClick={handleNumberClick} onClear={handleClear} onEqual={handleEqual} />
//     </div>
//   );
// }


// import React, { useState } from "react";
// import CalculatorPad from "../components/CalculatorPad";
// import { useHistoryData } from "../context/HistoryContext";

// export default function Subtraction() {
//   const [input, setInput] = useState("");
//   const [result, setResult] = useState(null);
//   const { addToHistory } = useHistoryData();

//   const handleNumberClick = (num) => {
//     // Allow only up to 3 numbers
//     const parts = input.split(/[\+\-\*\/]/).filter(Boolean);
//     if (parts.length >= 3 && !["+", "-", "*", "/"].includes(num)) return;
//     setInput((prev) => prev + num);
//   };

//   const handleOperatorClick = (op) => {
//     if (input === "") return; // avoid starting with an operator
//     if (/[+\-*/]$/.test(input)) return; // avoid consecutive operators
//     setInput((prev) => prev + op);
//   };

//   const handleClear = () => {
//     setInput("");
//     setResult(null);
//   };

//   const handleEqual = () => {
//     try {
//       const expression = input;
//       const parts = expression.split(/[\+\-\*\/]/).filter(Boolean);

//       if (parts.length !== 3) {
//         setResult("⚠ Enter exactly 3 numbers");
//         return;
//       }

//       // Safe evaluation
//       const total = new Function(`return ${expression}`)();
//       setResult(total);
//       addToHistory("3-Input Subtraction", input, total);
//     } catch (error) {
//       setResult("Error");
//     }
//   };

//   return (
//     <div className="calc-page">
//       <h2>➖ Subtraction</h2>

//       <div className="calc-display">
//         {result !== null ? result : input || "0"}
//       </div>

//       <div className="operators">
//         <button onClick={() => handleOperatorClick("+")}>+</button>
//         <button onClick={() => handleOperatorClick("-")}>−</button>
//         <button onClick={() => handleOperatorClick("*")}>×</button>
//         <button onClick={() => handleOperatorClick("/")}>÷</button>
//       </div>

//       <CalculatorPad
//         onNumberClick={handleNumberClick}
//         onClear={handleClear}
//         onEqual={handleEqual}
//       />
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import CalculatorPad from "../components/CalculatorPad";
// import { useHistoryData } from "../context/HistoryContext";

// export default function Subtraction() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [input, setInput] = useState("");
//   const [result, setResult] = useState(null);
//   const { addToHistory } = useHistoryData();

//   // Get previous input from Addition if passed
//   useEffect(() => {
//     if (location.state?.input) {
//       setInput(location.state.input);
//     }
//   }, [location.state]);

//   const handleNumberClick = (num) => setInput((prev) => prev + num);
//   const handleClear = () => {
//     setInput("");
//     setResult(null);
//   };

//   const handleEqual = () => {
//     try {
//       const total = new Function(`return ${input}`)();
//       setResult(total);
//       addToHistory("Subtraction", input, total);
//     } catch {
//       setResult("Error");
//     }
//   };

//   // Navigate to another operation & pass current input
//   const goToOperation = (operation) => {
//     navigate(`/${operation.toLowerCase()}`, { state: { input } });
//   };

//   return (
//     <div className="calc-page">
//       <h2>➖ Subtraction</h2>

//       <div className="calc-display">
//         {result !== null ? result : input || "0"}
//       </div>

//       <div className="operators">
//         <button onClick={() => setInput((prev) => prev + "-")}>−</button>
//       </div>
//       {/* numpad + right-side operation buttons */}
//             <div className="calc-main">
//               <div className="left-section">
//                 <CalculatorPad
//                   onNumberClick={handleNumberClick}
//                   onClear={handleClear}
//                   onEqual={handleEqual}
//                 />
//               </div>
      
//               <div className="right-section">
//                 <div className="operation-buttons">
//                   <button onClick={() => goToOperation("addition")}>+ Addition</button>
//                   <button onClick={() => goToOperation("multiplication")}>× Multiplication</button>
//                   <button onClick={() => goToOperation("division")}>÷ Division</button>
//                 </div>
//               </div>
//             </div>

//     </div>
    
//   );
// }




///// Method 2

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CalculatorPad from "../components/CalculatorPad";
import { useHistoryData } from "../context/HistoryContext";

export default function Subtraction() {
  const location = useLocation();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const { addToHistory } = useHistoryData();

  // Get previous input from Addition if passed
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



  // Navigate to another operation & pass current input
  const goToOperation = (operation) => {
    navigate(`/${operation.toLowerCase()}`, { state: { input } });
  };

  return (
    <div className="calc-page">
      <h2>➖ Subtraction</h2>
      <div className="calc-display">
        {result !== null ? result : input || "0"}
      </div>

      <div className="calc-body">
        {/* Number pad section */}
        <div className="pad-section">
          <div className="operators">
            <button onClick={() => setInput((prev) => prev + "-")}>-</button>
          </div>

          <CalculatorPad
            onNumberClick={handleNumberClick}
            onClear={handleClear}
            onEqual={handleEqual}
          />
        </div>

        {/* Side buttons to navigate */}
        <div className="side-buttons">
          <button onClick={() => goToOperation("addition")}>➕</button>
          <button onClick={() => goToOperation("multiplication")}>✖️</button>
          <button onClick={() => goToOperation("division")}>➗</button>
        </div>
      </div>
    </div>
  );
}
