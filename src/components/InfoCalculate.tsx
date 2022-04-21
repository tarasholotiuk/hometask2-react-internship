import React from "react";
import { useSelector } from "react-redux";
import { ITask } from "../types/types";

const InfoCalculate = () => {
  const tasks: ITask[] = useSelector((store: any) => store.todos.todos);
  const categoryList = useSelector((store: any) => store.todos.categoryList);

  return (
    <div>
      {categoryList.map((category: string, index: number) => (
        <div className="item" key={index}>
          <div className="note-category">{category}</div>
          <div className="active">
            {tasks.filter(task => task.isArchived === false && task.category ===
        category).length}
          </div>
          <div className="archived">
            {tasks.filter(task => task.isArchived === true && task.category ===
        category).length}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCalculate;
