// import React from "react";
// import TaskItem from "./TaskItem";

// export default function TaskList({ tasks, onComplete, onEdit, onDelete, onRestore, onPermanentDelete }) {
//   if (!tasks || tasks.length === 0) {
//     return <div className="empty">No tasks here.</div>;
//   }

//   return (
//     <div className="task-list">
//       {tasks.map((t) => (
//         <TaskItem
//           key={t.id}
//           task={t}
//           onComplete={onComplete}
//           onEdit={onEdit}
//           onDelete={onDelete}
//           onRestore={onRestore}
//           onPermanentDelete={onPermanentDelete}
//         />
//       ))}
//     </div>
//   );
// }


import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onComplete, onEdit, onDelete, onRestore, onPermanentDelete }) {
  if (!tasks || tasks.length === 0) return <div className="empty">No tasks here.</div>;

  return (
    <div className="task-list">
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} onComplete={onComplete} onEdit={onEdit} onDelete={onDelete} onRestore={onRestore} onPermanentDelete={onPermanentDelete} />
      ))}
    </div>
  );
}
