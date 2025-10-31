// import React from 'react'
// import CalculatorBox from '../components/CalculatorBox'

// export default function Home() {
//   return (
//     <div className="home">
//       <h2>Select an Operation</h2>
//       <div className="grid">
//         <CalculatorBox title="Addition" symbol="➕" path="/addition" />
//         <CalculatorBox title="Subtraction" symbol="➖" path="/subtraction" />
//         <CalculatorBox title="Multiplication" symbol="✖️" path="/multiplication" />
//         <CalculatorBox title="Division" symbol="➗" path="/division" />
//         <CalculatorBox title="History" symbol="📜" path="/history" />
//       </div>
//     </div>
//   )
// }


// import React from "react";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="home">
//       <h2>Select Operation</h2>
//       <div className="buttons">
//         <Link to="/addition">Addition</Link>
//         <Link to="/subtraction">Subtraction</Link>
//         <Link to="/multiplication">Multiplication</Link>
//         <Link to="/division">Division</Link>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const operations = [
    { name: "Addition", path: "/addition", color: "#0078ff" },
    { name: "Subtraction", path: "/subtraction", color: "#ff3b30" },
    { name: "Multiplication", path: "/multiplication", color: "#34c759" },
    { name: "Division", path: "/division", color: "#ff9500" },
    { name: "History", path: "/history", color: "#8e8e93" },
  ];

  return (
    <div className="home-container">
      <h2>Select Operation</h2>
      <div className="grid-box">
        {operations.map((op) => (
          <Link key={op.name} to={op.path} className="calc-card" style={{ backgroundColor: op.color }}>
            {op.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
