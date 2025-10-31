// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import TaskForm from "../components/TaskForm";
// import { useTasks } from "../context/TaskContext";

// export default function EditTask() {
//   const { id } = useParams();
//   const { tasks, updateTask } = useTasks();
//   const navigate = useNavigate();

//   const task = tasks.find((t) => t.id === id);
//   if (!task) return <div className="page"><h2>Task not found</h2></div>;

//   const handleSubmit = (data) => {
//     updateTask(id, data);
//     navigate("/");
//   };

//   return (
//     <div className="page">
//       <h2>Edit Task</h2>
//       <TaskForm initial={task} onSubmit={handleSubmit} submitLabel="Update Task" />
//     </div>
//   );
// }


import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { useTasks } from "../context/TaskContext";

export default function EditTask() {
  const { id } = useParams();
  const { tasks, updateTask } = useTasks();
  const navigate = useNavigate();

  const task = tasks.find((t) => String(t.id) === id);
  if (!task) return <div className="page"><h2>Task not found</h2></div>;

  const handleSubmit = (data) => {
    updateTask(task.id, data);
    navigate("/");
  };

  return (
    <div className="page">
      <h2>Edit Task</h2>
      <TaskForm initial={task} onSubmit={handleSubmit} submitLabel="Update Task" />
    </div>
  );
}
