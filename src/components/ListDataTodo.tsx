import React from "react";
import "./listDataTodo.css";
import {
  AiFillEdit as EditIcon,
  AiFillCheckCircle as DoneIcon,
} from "react-icons/ai";
import { MdDelete as DeleteIcon } from "react-icons/md";
import { Data } from "../Modal";

interface DataProps {
  dataList: Data[];
}

const ListDataTodo: React.FC<DataProps> = ({ dataList }) => {
  return (
    <div className="card-wrapper">
      {dataList?.map((data) => {
        return (
          <div className="card">
            <p>{data.todo}</p>
            <div className="icon-wrapper">
              <EditIcon className="icon" />
              <DeleteIcon className="icon" />
              <DoneIcon className="icon" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListDataTodo;
