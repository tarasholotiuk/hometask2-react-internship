import { createSlice } from "@reduxjs/toolkit";

const regex =
  /(3[01]|[12][0-9]|0?[1-9])[\/.-](1[0-2]|0?[1-9])[\/.-](?:[0-9]{2})?[0-9]{2}/gm;

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
        dates: ["02.01.2020"],
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
    isInputActive: false,
    nameValue: "",
    categoryValue: "",
    contentValue: "",
    who: "",
  },
  reducers: {
    addTodo(state, action) {
      if (state.isInputActive === false) {
        state.isInputActive = !state.isInputActive;
      } else if (
        state.nameValue.trim().length > 0 &&
        state.categoryValue.trim().length > 0 &&
        state.contentValue.trim().length > 0
      ) {
        if (state.who !== "") {
          state.todos.forEach((todo) => {
            if (String(todo.id) === state.who) {
              todo.name = state.nameValue;
              todo.category = state.categoryValue;
              todo.content = state.contentValue;
              todo.dates = (() => {
                let dates: any;
                state.contentValue.match(regex) !== null
                  ? (dates = state.contentValue.match(regex)?.join(", "))
                  : (dates = "");
                return dates;
              })();
              todo.iconTask =(() => {
                let iconTask = "";
                switch (state.categoryValue) {
                  case "Task":
                    iconTask = "shopping-cart.png";
                    break;
                  case "Random Thought":
                    iconTask = "lateral.png";
                    break;
                  case "Idea":
                    iconTask = "idea.png";
                    break;
                  default:
                    iconTask = "shopping-cart.png";
                    break;
                }
                return iconTask;
              })();

            }
          });
          state.who = "";
        } else {
          let obj = {
            id: state.todos[state.todos.length - 1].id + 1,
            name: state.nameValue.trim(),
            created: new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            category: state.categoryValue,
            content: state.contentValue,
            dates: (() => {
              let dates: any;
              state.contentValue.match(regex) !== null
                ? (dates = state.contentValue.match(regex)?.join(", "))
                : (dates = "");
              return dates;
            })(),
            isArchived: false,
            iconTask: (() => {
              let iconTask = "";
              switch (state.categoryValue) {
                case "Task":
                  iconTask = "shopping-cart.png";
                  break;
                case "Random Thought":
                  iconTask = "lateral.png";
                  break;
                case "Idea":
                  iconTask = "idea.png";
                  break;
                default:
                  iconTask = "shopping-cart.png";
                  break;
              }
              return iconTask;
            })(),
          };
          state.todos.push(obj);
        }
        state.nameValue = "";
        state.categoryValue = "";
        state.contentValue = "";
        state.isInputActive = !state.isInputActive;
      }
    },

    editTodo(state, action) {
      if (Object.keys(action.payload).length > 0) {
        state.isInputActive = !state.isInputActive;
        state.who = String(action.payload.id);
        state.todos.forEach((todo) => {
          if (todo.id === action.payload.id) {
            state.nameValue = todo.name;
            state.categoryValue = todo.category;
            state.contentValue = todo.content;
            
          }
        });
      }
    },

    archiveTodo(state, action) {
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

    setValue(state, action) {
      state.nameValue = action.payload.nameValue;
      state.categoryValue = action.payload.categoryValue;
      state.contentValue = action.payload.contentValue;
    },
  },
});

export const {
  addTodo,
  editTodo,
  archiveTodo,
  removeTodo,
  removeAllTodos,
  setValue,
} = todoSlice.actions;

export default todoSlice.reducer;
