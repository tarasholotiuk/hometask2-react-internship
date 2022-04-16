import React from "react";

const Header = () => {
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
        />
      </div>
    </div>
  );
};

export default Header;
