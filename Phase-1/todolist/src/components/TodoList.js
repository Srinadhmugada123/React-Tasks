import React, { useState, useEffect } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("history");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [deletedTasks, setDeletedTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("history", JSON.stringify(history));
  }, [tasks, history]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);

    if (updatedTasks[index].completed) {
      setHistory([...history, `✅ Completed: ${updatedTasks[index].text}`]);
    } else {
      setHistory([...history, `↩️ Marked as Undone: ${updatedTasks[index].text}`]);
    }
  };

  const deleteTask = (index) => {
    const deleted = tasks[index];
    setDeletedTasks([...deletedTasks, deleted]);
    setTasks(tasks.filter((_, i) => i !== index));
    setHistory([...history, `❌ Deleted: ${deleted.text}`]);
  };

  const undoDelete = () => {
    if (deletedTasks.length === 0) return;
    const restoredTask = deletedTasks.pop();
    setTasks([...tasks, restoredTask]);
    setDeletedTasks([...deletedTasks]);
    setHistory([...history, `♻️ Restored: ${restoredTask.text}`]);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("history");
  };

  return (
    <div className="todo-container">
      <div className="input-section">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "done" : ""}>
            <span onClick={() => toggleTask(index)}>{task.text}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              🗑
            </button>
          </li>
        ))}
      </ul>

      <div className="action-buttons">
        <button onClick={undoDelete}>Undo Delete</button>
        <button onClick={clearHistory}>Clear History</button>
      </div>

      <h3>📜 History</h3>
      <ul className="history">
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
