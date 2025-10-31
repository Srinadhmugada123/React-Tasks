// import React from "react";
// import { NavLink } from "react-router-dom";

// export default function Header() {
//   return (
//     <header className="header">
//       <div className="container header-inner">
//         <h1 className="logo">Todo Multi-Page</h1>
//         <nav className="nav">
//           <NavLink to="/" end className={({isActive})=>isActive?"nav-link active":"nav-link"}>Active</NavLink>
//           <NavLink to="/add" className={({isActive})=>isActive?"nav-link active":"nav-link"}>Add Task</NavLink>
//           <NavLink to="/deleted" className={({isActive})=>isActive?"nav-link active":"nav-link"}>Deleted</NavLink>
//           <NavLink to="/history" className={({isActive})=>isActive?"nav-link active":"nav-link"}>History</NavLink>
//         </nav>
//       </div>
//     </header>
//   );
// }
// src/components/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/">🏠 Home</NavLink>
      <NavLink to="/add">➕ Add Task</NavLink>
      <NavLink to="/active">📋 Active Tasks</NavLink>
      <NavLink to="/deleted">🗑️ Deleted Tasks</NavLink>
      <NavLink to="/history">📜 History</NavLink>
    </header>
  );
}
