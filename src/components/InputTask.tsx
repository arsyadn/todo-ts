import React from "react";
import "./styles.css";

const InputTask: React.FC = () => {
  return (
    <div className="input-container">
      <div className="input-wrapper">
        <input type="text" placeholder="Enter a task" className="input-task" />
        <button className="btn-go">GO</button>
      </div>
    </div>
  );
};

export default InputTask;
