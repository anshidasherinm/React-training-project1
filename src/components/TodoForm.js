import React, { useRef, useReducer } from "react";
import Button from "../ui/Button";
import classes from "./TodoForm.module.css";

const initialtodoState = {
  title: "",
  isValid: true,
};

const todoReducer = (prevState, action) => {
  if (action.type === "SET") {
    return { title: action.val, isValid: action.val.trim().length > 0 };
  }
  if (action.type === "RESET") {
    return { title: "", isValid: true };
  }
  if (action.type === "INVALID") {
    return { title: "", isValid: false };
  }
  return {
    initialtodoState,
  };
};

const TodoForm = (props) => {
  const todoRef = useRef();

  const [todoState, dispatchtodo] = useReducer(todoReducer, initialtodoState);

  const setItemHandler = (event) => {
    dispatchtodo({ type: "SET", val: event.target.value });
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (todoRef.current.value) {
      const newTodo = {
        id: Math.trunc(Math.random() * 2000),
        title: todoState.title,
        checked: false,
      };
      props.addTodo(newTodo);
      dispatchtodo({ type: "RESET" });
    } else {
      dispatchtodo({ type: "INVALID" });
    }
  };
  return (
    <div className={classes.formcontainer}>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <input
          ref={todoRef}
          type="text"
          placeholder="new todo item"
          value={todoState.title}
          onChange={setItemHandler}
        />

        <Button className={classes.button} type="submit" />
      </form>
      <span className={classes.errormsg}>
        {/* {!isValid && "Please add a todo !"} */}
        {!todoState.isValid && "Please add a todo !"}
      </span>
    </div>
  );
};

export default TodoForm;
