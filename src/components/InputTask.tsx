import React from "react";
import "./styles.css";

interface Props {
  list: string;
  setList: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent<EventTarget>) => void;
}
const InputTask: React.FC<Props> = ({ list, setList, handleAdd }) => {
  return (
    <div className="input-container">
      <form className="input-wrapper" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Enter a task"
          className="input-task"
          value={list}
          onChange={(e) => setList(e.target.value)}
        />
        <button className="btn-go" type="submit">
          GO
        </button>
      </form>
    </div>
  );
};

export default InputTask;
