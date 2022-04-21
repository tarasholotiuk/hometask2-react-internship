import React from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";
import { ITask } from "../types/types";
import { addTodo } from "../store/todoSlice";


const Tasks = () => {
  const dispatch = useDispatch();
  const addTask = () => dispatch(addTodo([]));

  const tasks: ITask[] = useSelector((store: any) => store.todos.todos);

  return (
    <div>
      <Header />
      {tasks
        .filter((task: ITask) => task.isArchived !== true)
        .map((task: ITask) => (
          <Item {...task} key={task.id} />
        ))}
      <button id="button-create-task" onClick={addTask}>
        Add task
      </button>
    </div>
  );
};

export default Tasks;
