// src/pages/Home.jsx
import React from "react";
import TaskCard from "../components/TaskCard";

export default function Home() {
  return (
    <div className="home-page">
      <h1>📝 Task Manager Dashboard</h1>
      <div className="card-container">
        <TaskCard title="Add Task" color="#4CAF50" path="/add" icon="➕" />
        <TaskCard title="Active Tasks" color="#2196F3" path="/" icon="📋" />
        <TaskCard title="Deleted Tasks" color="#f44336" path="/deleted" icon="🗑️" />
        <TaskCard title="History" color="#FF9800" path="/history" icon="📜" />
      </div>
    </div>
  );
}
