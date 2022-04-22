import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAllTodos, toggleArchive } from "../store/todoSlice";

const Header = () => {
  const dispatch = useDispatch();
  const deleteAllTasks = () => {
    console.log("deleteAllTasks");
    dispatch(removeAllTodos({}));
  };
  const toggleShowArchive = () => {
    dispatch(toggleArchive({}));
  };

  const isArchive = useSelector((store: any) => store.todos.isArchive);

  return (
    <div id="header" className="header invert">
      <div className="name-header">
        <span>Name</span>
      </div>
      <div className="created">
        <span>Created</span>
      </div>
      <div className="category">
        <span>Category</span>
      </div>
      <div className="content">
        <span>Content</span>
      </div>
      <div className="dates">
        <span>Dates</span>
      </div>
      {!isArchive ? (
        <div className="icon-header-blok">
          <img
            id="icon-archive-header"
            className="icon-archive"
            src="./images/icon/archive.png"
            alt="error"
            onClick={() => toggleShowArchive()}
          />
          <img
            id="icon-delete-header"
            className="icon-delete"
            src="./images/icon/delete.png"
            alt="error"
            onClick={() => deleteAllTasks()}
          />
        </div>
      ) : (
        <div className="icon-header-blok">
          <img
            id="cancel"
            src="./images/icon/cancel.png"
            alt="X"
            onClick={() => toggleShowArchive()}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
