import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todos-slice";
import Button from "../ui/Button";
import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  const dispatch = useDispatch();
  const todoRef = useRef();
  const [isValid, setIsValid] = useState(true);
  let notification = useSelector((state) => state.ui.notification);

  // const [todoState, dispatchtodo] = useReducer(todoReducer, initialtodoState);

  const setItemHandler = (event) => {
    // dispatchtodo({ type: "SET", val: event.target.value });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (todoRef.current.value) {
      const newTodo = {
        id: Math.trunc(Math.random() * 2000),
        title: todoRef.current.value,
        checked: false,
      };
      console.log(newTodo);
      dispatch(todoActions.addItemtodo(newTodo));
      console.log(notification);
      setIsValid(true);
      todoRef.current.value = "";
    } else {
      setIsValid(false);
    }
  };
  return (
    <div className={classes.formcontainer}>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <input
          ref={todoRef}
          type="text"
          placeholder="new todo item"
          onChange={setItemHandler}
        />

        <Button className={classes.button} type="submit" />
      </form>
      <span className={classes.errormsg}>
        {!isValid && "Please add a todo !"}
      </span>
    </div>
  );
};

export default TodoForm;
