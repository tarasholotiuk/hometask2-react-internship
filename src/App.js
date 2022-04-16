import React from "react";
import Tasks from "./components/Tasks";
import Info from "./components/Info";

function App() {
  const arr = [
    {
      iconTask: "idea.png",
      name: "test1",
      created: "April 8, 2022",
      category: "Idea",
      content: "text1",
      dates: "",
      isArchived: false,
    },
    {
      iconTask: "lateral.png",
      name: "test2",
      created: "June 13, 2021",
      category: "Random Thought",
      content: "text2",
      dates: "",
      isArchived: true,
    },
    {
      iconTask: "idea.png",
      name: "test3",
      created: "May 18, 2020",
      category: "Idea",
      content: "text3",
      dates: "",
      isArchived: false,
    },
    {
      iconTask: "shopping-cart.png",
      name: "test4",
      created: "July 22, 2021",
      category: "Task",
      content: "text4",
      dates: "",
      isArchived: true,
    },
    {
      iconTask: "shopping-cart.png",
      name: "test5",
      created: "April 8, 2022",
      category: "Task",
      content: "text5",
      dates: "",
      isArchived: false,
    },
    {
      iconTask: "lateral.png",
      name: "test6",
      created: "May 18, 2020",
      category: "Random Thought",
      content: "text6",
      dates: "",
      isArchived: true,
    },
    {
      iconTask: "idea.png",
      name: "test7",
      created: "July 22, 2021",
      category: "Idea",
      content: "text7",
      dates: "",
      isArchived: false,
    },
  ];

  const categoryList = ["Task", "Random Thought", "Idea"]

  // const [tasks, setTask] = useState(arr);
  // console.log(tasks)
  // for(let item of tasks) {
  //   let task = tasks[item];
  //   return task
  // }

  return (
    <div className="App">
      <Tasks arr={arr}/>
      
      <Info categoryList={categoryList} arr={arr}/>
      
    
        {/* <Header />
        {arr
          .filter((el) => el.isArchived !== true)
          .map((el, index) => (
            <Item task={el} key={index} />
          ))} */}

      
    </div>
  );
}

export default App;
