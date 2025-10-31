import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar">
      <h1 className="logo">🧮 Smart Calculator</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/addition">Addition</Link>
        <Link to="/subtraction">Subtraction</Link>
        <Link to="/multiplication">Multiplication</Link>
        <Link to="/division">Division</Link>
        <Link to="/history">History</Link>
      </div>
    </nav>
  );
}
