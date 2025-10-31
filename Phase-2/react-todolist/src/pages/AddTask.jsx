// import React from "react";
// import { useNavigate } from "react-router-dom";
// import TaskForm from "../components/TaskForm";
// import { useTasks } from "../context/TaskContext";

// export default function AddTask() {
//   const { addTask } = useTasks();
//   const navigate = useNavigate();

//   const handleSubmit = (data) => {
//     addTask(data);
//     navigate("/"); // go to active tasks
//   };

//   return (
//     <div className="page">
//       <h2>Add Task</h2>
//       <TaskForm onSubmit={handleSubmit} submitLabel="Add Task" />
//     </div>
//   );
// }


import React from "react";
import TaskForm from "../components/TaskForm";
import { useTasks } from "../context/TaskContext";

export default function AddTask() {
  const { addTask } = useTasks();
  return (
    <div className="page">
      <h2>Add New Task</h2>
      <TaskForm onSubmit={addTask} submitLabel="Add Task" />
    </div>
  );
}
