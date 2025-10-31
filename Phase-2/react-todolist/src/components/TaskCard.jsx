// src/components/TaskCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function TaskCard({ title, color, path, icon }) {
  const navigate = useNavigate();

  return (
    <div
      className="task-card"
      style={{ backgroundColor: color }}
      onClick={() => navigate(path)}
    >
      <div className="task-card-icon">{icon}</div>
      <h3>{title}</h3>
    </div>
  );
}
