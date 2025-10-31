// import React, { useEffect, useState } from 'react'
// import { loadHistory, clearHistory } from '../utils/history'

// export default function History() {
//   const [items, setItems] = useState([])

//   useEffect(() => {
//     setItems(loadHistory())
//   }, [])

//   return (
//     <div className="history">
//       <h2>🕓 Calculation History</h2>
//       <button onClick={() => { clearHistory(); setItems([]) }}>Clear</button>
//       {items.length === 0 ? (
//         <p>No history available</p>
//       ) : (
//         <ul>
//           {items.map((i, index) => (
//             <li key={index}>
//               <span>{i.expression}</span>
//               <small>{new Date(i.ts).toLocaleString()}</small>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }


import React from "react";
import { useHistoryData } from "../context/HistoryContext";

export default function History() {
  const { history, clearHistory } = useHistoryData();

  return (
    <div className="calc-page">
      <h2>📜 Calculation History</h2>
      {history.length === 0 ? (
        <p>No calculations yet.</p>
      ) : (
        <>
          <button className="clear-history" onClick={clearHistory}>
            Clear All History
          </button>
          <div className="history-list">
            {history.map((item) => (
              <div key={item.id} className="history-item">
                <strong>{item.operation}</strong> → {item.expression} ={" "}
                <span className="result">{item.result}</span>
                <div className="time">{item.time}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

