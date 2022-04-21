import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: 1,
        iconTask: "idea.png",
        name: "test1",
        created: "April 8, 2022",
        category: "Idea",
        content: "text1",
        dates: "",
        isArchived: true,
      },
      {
        id: 2,
        iconTask: "lateral.png",
        name: "test2",
        created: "June 13, 2021",
        category: "Random Thought",
        content: "text2",
        dates: "",
        isArchived: false,
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
    ],
    categoryList: ["Task", "Random Thought", "Idea"],
  },
  reducers: {
    addTodo(state, action) {
      state.todos
        .push
        //new element
        ();
      console.log(state, action);
    },

    editTodo(state, action) {
      console.log(state, action);
    },

    archiveTodo(state, action) {
      // console.log(state.todos.filter(todo => todo.id == action.payload.id))
      state.todos.forEach((todo) =>
        todo.id === action.payload.id ? (todo.isArchived = true) : null
      );
    },

    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    unarchiveTodo(state, action) {
      console.log(state.todos.filter((todo) => todo.id === action.payload.id));
      state.todos.forEach((todo) =>
        todo.id === action.payload.id ? (todo.isArchived = false) : null
      );
    },

    removeAllTodos(state, action) {
      state.todos = [];
    },
  },
});

export const { addTodo, editTodo, archiveTodo, removeTodo, removeAllTodos } = todoSlice.actions;

export default todoSlice.reducer;
