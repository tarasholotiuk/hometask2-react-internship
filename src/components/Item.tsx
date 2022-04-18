import React, { useState, FC} from "react";
import { ITask } from "../types/types";


const Item: FC<ITask> = (task) => {
console.log(task)

  // const Item = (task: ITask, { changeIsArchived }) => {
  return (
    <div className="item">
    {/* <div className="item" id={task.id}> */}
      <div className="name">
        <div className="icon-task-name-blok">
          <img
            className="icon-task invert"
            src={"./images/icon/" + task.iconTask}
            alt="error"
          />
        </div>
        <span>{task.name}</span>
      </div>
      <div className="created">
        <span>{task.created}</span>
      </div>
      <div className="category">
        <span>{task.category}</span>
      </div>
      <div className="content">
        <span>{task.content}</span>
      </div>
      <div className="dates">
        <span>{task.dates}</span>
      </div>
      <div className="icon-task-blok">
        <img
          className="icon-edit"
          src="./images/icon/edit2.png"
          alt="error"
          onClick={(e) => console.log(e)}
        />
        <img
          className="icon-archive"
          src="./images/icon/archive2.png"
          alt="error"
          // onClick={(e) => changeIsArchived(e.target.parentNode.parentNode.id)}
        />
        <img
          className="icon-delete"
          src="./images/icon/delete2.png"
          alt="error"
          onClick={(e) => console.log(e)}
        />
      </div>
    </div>
  );
};

export default Item;
