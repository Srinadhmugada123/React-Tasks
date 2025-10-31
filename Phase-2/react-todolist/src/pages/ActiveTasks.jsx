// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useTasks } from "../context/TaskContext";
// import TaskList from "../components/TaskList";

// export default function ActiveTasks() {
//   const { tasks, completeTask, softDeleteTask } = useTasks();
//   const navigate = useNavigate();

//   const active = tasks.filter((t) => !t.deleted);

//   return (
//     <div className="page">
//       <h2>Active Tasks</h2>
//       <TaskList
//         tasks={active}
//         onComplete={(id) => completeTask(id)}
//         onEdit={(id) => navigate(`/edit/${id}`)}
//         onDelete={(id) => softDeleteTask(id)}
//       />
//     </div>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import { useTasks } from "../context/TaskContext";

export default function ActiveTasks() {
  const { tasks, toggleComplete, deleteTask } = useTasks();
  const navigate = useNavigate();

  const active = tasks.filter((t) => !t.deleted);

  return (
    <div className="page">
      <h2>Active Tasks</h2>
      <TaskList
        tasks={active}
        onComplete={toggleComplete}
        onEdit={(id) => navigate(`/edit/${id}`)}
        onDelete={deleteTask}
      />
    </div>
  );
}
