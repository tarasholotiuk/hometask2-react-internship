import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../store/todoSlice";

const InputForm = () => {
  const categoryList = useSelector((store: any) => store.todos.categoryList);
  let nameValue = useSelector((store: any) => store.todos.nameValue);
  let categoryValue = useSelector((store: any) => store.todos.categoryValue);
  let contentValue = useSelector((store: any) => store.todos.contentValue);

  const dispatch = useDispatch();

  const changeValue = (e: any) => {
    switch (e.target.id) {
      case "name-input":
        nameValue = e.target.value;
        break;
      case "category-list":
        categoryValue = e.target.value;
        break;
      case "content-input":
        contentValue = e.target.value;
        break;
      default:
        return;
    }
    // console.log(nameValue, categoryValue, contentValue);
    dispatch(
      setValue({
        nameValue,
        categoryValue,
        contentValue,
      })
    );
  };

  return (
    <div id="input-form">
      <input
        id="name-input"
        defaultValue={nameValue}
        placeholder="Name"
        onChange={(e) => changeValue(e)}
      ></input>
      <div className="created"></div>
      <select
        id="category-list"
        name="category"
        defaultValue={categoryValue}
        onChange={(e) => changeValue(e)}
      >
        <option value="" disabled>
          Choose a category
        </option>
        {categoryList.map((category: string, index: number) => (
          <option value={category} key={index}>
            {category}
          </option>
        ))}
      </select>
      <input
        id="content-input"
        defaultValue={contentValue}
        placeholder="Content"
        onChange={(e) => changeValue(e)}
      ></input>
    </div>
  );
};

export default InputForm;
