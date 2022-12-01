import React from "react";
import "./styles.css";

interface Props {
  list: string;
  setList: React.Dispatch<React.SetStateAction<string>>;
}
const InputTask: React.FC<Props> = ({ list, setList }) => {
  return (
    <div className="input-container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter a task"
          className="input-task"
          value={list}
          onChange={(e) => setList(e.target.value)}
        />
        <button className="btn-go">GO</button>
      </div>
    </div>
  );
};

export default InputTask;
