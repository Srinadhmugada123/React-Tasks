// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import ActiveTasks from "./pages/ActiveTasks";
import EditTask from "./pages/EditTask";
import DeletedTasks from "./pages/DeletedTasks";
import History from "./pages/History";

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/active" element={<ActiveTasks />} />
          <Route path="/edit/:id" element={<EditTask />} />
          <Route path="/deleted" element={<DeletedTasks />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>
    </>
  );
}
