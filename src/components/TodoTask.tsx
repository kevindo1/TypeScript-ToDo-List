import React from "react";
import { ITask } from "../Interfaces";
import "../App.css";

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
}
const TodoTask = ({ task, deleteTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          deleteTask(task.taskName);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoTask;
