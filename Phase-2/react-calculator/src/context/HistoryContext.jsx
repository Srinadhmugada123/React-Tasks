import React, { createContext, useState, useContext } from "react";

const HistoryContext = createContext();

export const useHistoryData = () => useContext(HistoryContext);

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addToHistory = (operation, expression, result) => {
    const newEntry = {
      id: Date.now(),
      operation,
      expression,
      result,
      time: new Date().toLocaleString(),
    };
    setHistory((prev) => [newEntry, ...prev]);
  };

  const clearHistory = () => setHistory([]);

  return (
    <HistoryContext.Provider value={{ history, addToHistory, clearHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};
