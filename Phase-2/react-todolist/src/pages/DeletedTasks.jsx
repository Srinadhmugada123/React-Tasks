// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useTasks } from "../context/TaskContext";
// // import TaskList from "../components/TaskList";

// // export default function DeletedTasks() {
// //   const { tasks, restoreTask, permanentlyDeleteTask } = useTasks();
// //   const navigate = useNavigate();

// //   const deleted = tasks.filter((t) => t.deleted);

// //   return (
// //     <div className="page">
// //       <h2>Deleted Tasks</h2>
// //       <TaskList
// //         tasks={deleted}
// //         onRestore={(id) => restoreTask(id)}
// //         onPermanentDelete={(id) => permanentlyDeleteTask(id)}
// //         onEdit={(id) => navigate(`/edit/${id}`)}
// //       />
// //     </div>
// //   );
// }


import React from "react";
import TaskList from "../components/TaskList";
import { useTasks } from "../context/TaskContext";

export default function DeletedTasks() {
  const { tasks, restoreTask, permanentDelete } = useTasks();
  const deleted = tasks.filter((t) => t.deleted);

  return (
    <div className="page">
      <h2>Deleted Tasks</h2>
      <TaskList tasks={deleted} onRestore={restoreTask} onPermanentDelete={permanentDelete} />
    </div>
  );
}
