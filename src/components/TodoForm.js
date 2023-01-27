import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoItem } from "../store/todo/todo-thunk";
import Button from "../ui/Button";
import classes from "./TodoForm.module.css";
import Message from "./Message";
import { todoActions } from "../store/todo/todo-slice";

const TodoForm = (props) => {
  let selectedLabel = document.querySelector("#select1")
    ? document.querySelector("#select1").value
    : "none";
  const dispatch = useDispatch();
  const labelItems = useSelector((state) => state.label.labels);
  // console.log(labelItems[0]);
  const todoRef = useRef();
  const [notValid, setNotValid] = useState(false);

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("selected label : ", selectedLabel);
    if (todoRef.current.value) {
      const newTodo = {
        id: Math.trunc(Math.random() * 2000),
        title: todoRef.current.value,
        label: selectedLabel,
        checked: false,
      };
      console.log(newTodo);
      // setBacktoAllItems(state) {
      dispatch(todoActions.setBacktoAllItems());
      dispatch(addTodoItem(newTodo));
      setNotValid(false);
      todoRef.current.value = "";
    } else {
      setNotValid(true);
    }
  };
  const getLabelValue = (e) => {
    selectedLabel = e.target.value;
    // console.log(selectedLabel);
  };

  return (
    <div className={classes.formcontainer}>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <input ref={todoRef} type="text" placeholder="new todo item" />
        <Button className={classes.button} type="submit" />
        <label htmlFor="lables" className={classes.label}>
          Select Label :
        </label>

        <select name="labels" onChange={getLabelValue} id="select1">
          <option key="select" value="none">
            select any
          </option>
          {labelItems.map((label, index) => {
            // console.log(index);
            return (
              //selected
              <option key={label.key} value={`${label.name}`}>
                {label.name}
              </option>
            );
          })}
        </select>
      </form>
      {/* Loading message */}
      <Message />
      <span className={classes.errormsg}>
        {notValid && "Please add a todo !"}
      </span>
    </div>
  );
};

export default TodoForm;
