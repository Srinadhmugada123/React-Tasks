// import React from 'react'
// import { Routes, Route, Link } from 'react-router-dom'
// import Home from './pages/Home'
// import Addition from './pages/Addition'
// import Subtraction from './pages/Subtraction'
// import Multiplication from './pages/Multiplication'
// import Division from './pages/Division'
// import History from './pages/History'

// export default function App() {
//   return (
//     <div className="app-container">
//       <header className="navbar">
//         <h1>🧮 React Calculator</h1>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/history">History</Link>
//         </nav>
//       </header>

//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/addition" element={<Addition />} />
//           <Route path="/subtraction" element={<Subtraction />} />
//           <Route path="/multiplication" element={<Multiplication />} />
//           <Route path="/division" element={<Division />} />
//           <Route path="/history" element={<History />} />
//         </Routes>
//       </main>
//     </div>
//   )
// }

// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import Addition from "./pages/Addition";
// import Subtraction from "./pages/Subtraction";
// import Multiplication from "./pages/Multiplication";
// import Division from "./pages/Division";
// import History from "./pages/History";

// export default function App() {
//   return (
//     <div>
//       <header className="header">
//         <h1>React Multi-Page Calculator</h1>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/history">History</Link>
//         </nav>
//       </header>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/addition" element={<Addition />} />
//         <Route path="/subtraction" element={<Subtraction />} />
//         <Route path="/multiplication" element={<Multiplication />} />
//         <Route path="/division" element={<Division />} />
//         <Route path="/history" element={<History />} />
//       </Routes>
//     </div>
//   );
// }


// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import Addition from "./pages/Addition";
// import Subtraction from "./pages/Subtraction";
// import Multiplication from "./pages/Multiplication";
// import Division from "./pages/Division";

// export default function App() {
//   return (
//     <div className="container">
//       <h1>React Calculator</h1>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/addition">Addition</Link>
//         <Link to="/subtraction">Subtraction</Link>
//         <Link to="/multiplication">Multiplication</Link>
//         <Link to="/division">Division</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/addition" element={<Addition />} />
//         <Route path="/subtraction" element={<Subtraction />} />
//         <Route path="/multiplication" element={<Multiplication />} />
//         <Route path="/division" element={<Division />} />
//       </Routes>
//     </div>
//   );
// }


import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Addition from "./pages/Addition";
import Subtraction from "./pages/Subtraction";
import Multiplication from "./pages/Multiplication";
import Division from "./pages/Division";
import History from "./pages/History";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addition" element={<Addition />} />
        <Route path="/subtraction" element={<Subtraction />} />
        <Route path="/multiplication" element={<Multiplication />} />
        <Route path="/division" element={<Division />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
}


