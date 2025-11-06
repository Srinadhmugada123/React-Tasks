import React from "react";

export default function CalculatorPad({ onNumberClick, onClear, onEqual }) {
  const buttons = [
    "7", "8", "9",
    "4", "5", "6",
    "1", "2", "3",
    "0", "C", "="
  ];

  return (
    <div className="num-pad">
      {buttons.map((btn) => (
        <button
          key={btn}
          className={`pad-btn ${btn === "=" ? "equal" : btn === "C" ? "clear" : ""}`}
          onClick={() => {
            if (btn === "C") onClear();
            else if (btn === "=") onEqual();
            else onNumberClick(btn);
          }}
        >
          {btn}
        </button>
      ))}
    </div>

    
  );
}
