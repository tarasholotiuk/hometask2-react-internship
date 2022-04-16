import React from "react";

const Item = ({task}) => {
  return (
    <div className="item">
      <div className="name">
        <div className="icon-task-name-blok">
          <img
            className="icon-task invert"
            src={"./images/icon/"+ task.iconTask}
            alt="error"
          />
        </div>
        <span></span>
      </div>
      <div className="created">
        <span>{task.name}</span>
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
      <div className="icon-task-blok"></div>
    </div>
  );
};

export default Item;
