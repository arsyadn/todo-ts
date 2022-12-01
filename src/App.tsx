import React, { useState } from "react";
import "./App.css";
import InputTask from "./components/InputTask";
import { Data } from "./Modal";
import ListDataTodo from "./components/ListDataTodo";

const App: React.FC = () => {
  const [list, setList] = useState<string>("");
  const [dataList, setDataList] = useState<Data[]>([]);
  console.log(list);

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if (list) {
      setDataList([...dataList, { id: Date.now(), todo: list, isDone: false }]);
      setList("");
    }
  };

  return (
    <div>
      <div className="app-wrapper">
        <p>TASKS-KU</p>
        <InputTask list={list} setList={setList} handleAdd={handleAdd} />
      </div>
      <ListDataTodo dataList={dataList} />
    </div>
  );
};

export default App;
