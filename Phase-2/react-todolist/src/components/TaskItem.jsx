// import React from "react";

// export default function TaskItem({ task, onComplete, onEdit, onDelete, onRestore, onPermanentDelete }) {
//   return (
//     <div className={`task-item ${task.completed ? "completed":""} ${task.deleted ? "deleted":""}`}>
//       <div className="task-main">
//         <div className="task-title">{task.title}</div>
//         <div className="task-meta">
//           {task.dueDate && <span className="due">Due: {new Date(task.dueDate).toLocaleDateString()}</span>}
//           <small className="muted">Created: {new Date(task.createdAt).toLocaleString()}</small>
//         </div>
//         {task.description && <div className="task-desc">{task.description}</div>}
//       </div>

//       <div className="task-actions">
//         {!task.deleted && !task.completed && (
//           <button className="btn" onClick={() => onComplete(task.id)}>Complete</button>
//         )}

//         {!task.deleted && (
//           <>
//             <button className="btn" onClick={() => onEdit(task.id)}>Edit</button>
//             <button className="btn danger" onClick={() => onDelete(task.id)}>Delete</button>
//           </>
//         )}

//         {task.deleted && (
//           <>
//             <button className="btn" onClick={() => onRestore(task.id)}>Restore</button>
//             <button className="btn danger" onClick={() => onPermanentDelete(task.id)}>Delete Forever</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function TaskItem({ task, onComplete, onEdit, onDelete, onRestore, onPermanentDelete }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-content">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <small>Created: {task.createdAt}</small>
        {task.updatedAt && <small>Updated: {task.updatedAt}</small>}
      </div>

      <div className="task-actions">
        {!task.deleted && (
          <>
            <button onClick={() => onComplete(task.id)}>✅</button>
            <button onClick={() => onEdit(task.id)}>✏️</button>
            <button onClick={() => onDelete(task.id)}>🗑️</button>
          </>
        )}
        {task.deleted && (
          <>
            <button onClick={() => onRestore(task.id)}>♻️</button>
            <button onClick={() => onPermanentDelete(task.id)}>❌</button>
          </>
        )}
      </div>
    </div>
  );
}

