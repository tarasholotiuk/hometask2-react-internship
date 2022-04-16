import React from "react";
import Header from "./Header";
import Item from "./Item";

function Tasks({ arr }) {
  return (
    <div>
      <Header />
      {arr
        .filter((elem) => elem.isArchived != true)
        .map((elem, index) => (
          <Item task={elem} key={index} />
        ))}
    </div>
  );
}

export default Tasks;
