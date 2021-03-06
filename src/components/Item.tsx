import React, { FC } from "react";
import { ITask } from "../types/types";
import { useSelector, useDispatch } from "react-redux";
import { editTodo, archiveTodo, removeTodo, unarchiveTodo } from "../store/todoSlice";

const Item: FC<ITask> = (task) => {
  const dispatch = useDispatch();
  const isArchive = useSelector((store: any) => store.todos.isArchive);

  const editTask = (e: any) => {
    dispatch(editTodo({ id: Number(e.target.parentNode.parentNode.id) }));
  };

  const changeIsArchived = (e: any) => {
    dispatch(archiveTodo({ id: Number(e.target.parentNode.parentNode.id) }));
  };

  const deleteTask = (e: any) => {
    dispatch(removeTodo({ id: Number(e.target.parentNode.parentNode.id) }));
  };

  const unarchiveTask = (e: any) => {
    dispatch(unarchiveTodo({ id: Number(e.target.parentNode.parentNode.id) }));
  }

  // const Item = (task: ITask, { changeIsArchived }) => {
  return (
    <div className="item" id={String(task.id)}>
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
      {!isArchive ? (
        <div className="icon-task-blok">
          <img
            className="icon-edit"
            src="./images/icon/edit2.png"
            alt="error"
            onClick={(e) => editTask(e)}
          />
          <img
            className="icon-archive"
            src="./images/icon/archive2.png"
            alt="error"
            onClick={(e) => changeIsArchived(e)}
          />
          <img
            className="icon-delete"
            src="./images/icon/delete2.png"
            alt="error"
            onClick={(e) => deleteTask(e)}
          />
        </div>
      ) : (
        <div className="icon-task-blok">
          <img
            className="icon-unarchive"
            src="./images/icon/unarchive.png"
            onClick={(e) => unarchiveTask(e)}
          ></img>
        </div>
      )}
    </div>
  );
};

export default Item;
