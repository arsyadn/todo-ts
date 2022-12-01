import React, { useState } from "react";
import "./App.css";
import InputTask from "./components/InputTask";

const App: React.FC = () => {
  const [list, setList] = useState<string>("");
  console.log(list);

  return (
    <div className="app-wrapper">
      <p>TASKS-KU</p>
      <InputTask list={list} setList={setList} />
    </div>
  );
};

export default App;
