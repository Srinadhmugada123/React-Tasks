// import React from "react";
// import { useTasks } from "../context/TaskContext";

// export default function History() {
//   const { history, clearHistory } = useTasks();

//   return (
//     <div className="page">
//       <h2>History</h2>
//       <div className="history-controls">
//         <button className="btn" onClick={clearHistory}>Clear History</button>
//       </div>

//       {history.length === 0 ? (
//         <div className="empty">No history yet.</div>
//       ) : (
//         <div className="history-list">
//           {history.map((h) => (
//             <div key={h.id} className="history-entry">
//               <div className="history-top">
//                 <strong>{h.type}</strong>
//                 <span className="time">{new Date(h.time).toLocaleString()}</span>
//               </div>
//               <pre className="history-payload">{JSON.stringify(h.payload, null, 2)}</pre>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


import React from "react";
import { useTasks } from "../context/TaskContext";

export default function History() {
  const { tasks } = useTasks();
  const completed = tasks.filter((t) => t.completed && !t.deleted);

  return (
    <div className="page">
      <h2>Task History</h2>
      {completed.length === 0 ? (
        <p>No completed tasks yet.</p>
      ) : (
        <ul className="history-list">
          {completed.map((t) => (
            <li key={t.id}>
              ✅ <strong>{t.title}</strong> — completed at {t.completedAt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
