// import React, { useState, useEffect } from "react";

// export default function TaskForm({ initial = {}, onSubmit, submitLabel = "Save" }) {
//   const [title, setTitle] = useState(initial.title || "");
//   const [description, setDescription] = useState(initial.description || "");
//   const [dueDate, setDueDate] = useState(initial.dueDate ? initial.dueDate.slice(0,10) : "");

//   useEffect(() => {
//     setTitle(initial.title || "");
//     setDescription(initial.description || "");
//     setDueDate(initial.dueDate ? initial.dueDate.slice(0,10) : "");
//   }, [initial]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title.trim()) return alert("Please enter a title");
//     onSubmit({ title: title.trim(), description: description.trim(), dueDate: dueDate || null });
//     setTitle(""); setDescription(""); setDueDate("");
//   };

//   return (
//     <form className="task-form" onSubmit={handleSubmit}>
//       <label>
//         Title
//         <input value={title} onChange={(e) => setTitle(e.target.value)} />
//       </label>
//       <label>
//         Description
//         <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
//       </label>
//       <label>
//         Due Date
//         <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
//       </label>
//       <div className="form-actions">
//         <button type="submit" className="btn primary">{submitLabel}</button>
//       </div>
//     </form>
//   );
// }


import React, { useState } from "react";

export default function TaskForm({ initial = {}, onSubmit, submitLabel }) {
  const [title, setTitle] = useState(initial.title || "");
  const [description, setDescription] = useState(initial.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Please enter a title");
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task description" />
      <button type="submit">{submitLabel}</button>
    </form>
  );
}
