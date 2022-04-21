import React from "react";
import { useDispatch } from "react-redux";
import { removeAllTodos } from "../store/todoSlice";

const Header = () => {
  const dispatch = useDispatch();
  const deleteAllTasks = () => {
    console.log("deleteAllTasks")
    dispatch(removeAllTodos({}));
  };

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
      <div className="icon-header-blok">
        {/* {if (this.props.)} */}
        <img
          id="icon-archive-header"
          className="icon-archive"
          src="./images/icon/archive.png"
          alt="error"
        />
        <img
          id="icon-delete-header"
          className="icon-delete"
          src="./images/icon/delete.png"
          alt="error"
          onClick={() => deleteAllTasks()}
        />
      </div>
    </div>
  );
};

export default Header;
