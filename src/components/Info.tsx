import React from "react";
// import InfoCalculate from "./InfoCalculate";

function Info() {
  // function Info({ categoryList, arr }) {
  return (
    <div className="info-container">
      <div id="info-header" className="info-header invert">
        <div className="note-category">
          <span>Note Category</span>
        </div>
        <div className="active">
          <span>Active</span>
        </div>
        <div className="archived">
          <span>Archived</span>
        </div>
      </div>

      {/* {categoryList.map((elem, index) => (
        <InfoCalculate category={elem} arr={arr} key={index} />
      ))} */}
    </div>
  );
}

export default Info;
