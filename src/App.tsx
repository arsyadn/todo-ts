import React from "react";
import "./App.css";
import InputTask from "./components/InputTask";

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <p>TASKS-KU</p>
      <InputTask />
    </div>
  );
};

export default App;
