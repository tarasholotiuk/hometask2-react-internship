import React, { useState, FC } from "react";
import Header from "./Header";
import Item from "./Item";
import { ITask } from "../types/types";

interface ITasks {
  arr: ITask[]
}

const Tasks: FC<ITasks> = ({arr}) => {

  const [tasks, setArchived] = useState(arr);

  const changeIsArchived = (key: number) => {
    setArchived(
      tasks.map((task) => {
        if (task.id == key) {
          task.isArchived = true;
        }
        console.log(task);
        return task;
      })
    );
  };

  return (
    <div>
      <Header />
      {tasks
      .filter((task) => task.isArchived != true)
      .map((task) => 
        <Item {...task} key={task.id} />
        // <Item {...task} changeIsArchived={changeIsArchived} key={elem.id} />
      )}
    </div>
  );
};

export default Tasks;
