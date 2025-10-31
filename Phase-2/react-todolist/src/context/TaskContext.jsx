import React, { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now().toString(), ...task, completed: false, deleted: false, createdAt: new Date().toLocaleString() },
    ]);
  };

  const updateTask = (id, updatedData) => {
    setTasks((prev) =>
      prev.map((t) =>
        String(t.id) === String(id) ? { ...t, ...updatedData, updatedAt: new Date().toLocaleString() } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (String(t.id) === String(id) ? { ...t, deleted: true } : t))
    );
  };

  const restoreTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (String(t.id) === String(id) ? { ...t, deleted: false } : t))
    );
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        String(t.id) === String(id)
          ? { ...t, completed: !t.completed, completedAt: new Date().toLocaleString() }
          : t
      )
    );
  };

  const permanentDelete = (id) => {
    setTasks((prev) => prev.filter((t) => String(t.id) !== String(id)));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, restoreTask, toggleComplete, permanentDelete }}>
      {children}
    </TaskContext.Provider>
  );
};
