import React from "react";
import Tasks from "./components/Tasks";
// import Info from "./components/Info";
import { ITask } from "./types/types";


const App = () => {
  const tasks = [
    {
      id: 1,
      iconTask: "idea.png",
      name: "test1",
      created: "April 8, 2022",
      category: "Idea",
      content: "text1",
      dates: "",
      isArchived: false,
    },
    {
      id: 2,
      iconTask: "lateral.png",
      name: "test2",
      created: "June 13, 2021",
      category: "Random Thought",
      content: "text2",
      dates: "",
      isArchived: true,
    },
    {
      id: 3,
      iconTask: "idea.png",
      name: "test3",
      created: "May 18, 2020",
      category: "Idea",
      content: "text3",
      dates: "",
      isArchived: false,
    },
    {
      id: 4,
      iconTask: "shopping-cart.png",
      name: "test4",
      created: "July 22, 2021",
      category: "Task",
      content: "text4",
      dates: "",
      isArchived: true,
    },
    {
      id: 5,
      iconTask: "shopping-cart.png",
      name: "test5",
      created: "April 8, 2022",
      category: "Task",
      content: "text5",
      dates: "",
      isArchived: false,
    },
    {
      id: 6,
      iconTask: "lateral.png",
      name: "test6",
      created: "May 18, 2020",
      category: "Random Thought",
      content: "text6",
      dates: "",
      isArchived: true,
    },
    {
      id: 7,
      iconTask: "idea.png",
      name: "test7",
      created: "July 22, 2021",
      category: "Idea",
      content: "text7",
      dates: "",
      isArchived: false,
    },
  ];
  
  const categoryList = ["Task", "Random Thought", "Idea"];

  return (
    <div className="App">
      <Tasks arr = {tasks} />

      {/* <Info categoryList={categoryList} arr={arr}/> */}

      {/* <Header />
        {arr
          .filter((el) => el.isArchived !== true)
          .map((el, index) => (
            <Item task={el} key={index} />
          ))} */}
    </div>
  );
};

export default App;
