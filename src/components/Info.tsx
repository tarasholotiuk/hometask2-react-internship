import React from "react";
import InfoCalculate from "./InfoCalculate";

function Info() {
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
        <InfoCalculate />
    </div>
  );
}

export default Info;
