import React from "react";
import { ITask } from "../Interfaces";
import "../App.css";

interface Props {
  task: ITask;
}
const TodoTask = ({ task }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default TodoTask;
