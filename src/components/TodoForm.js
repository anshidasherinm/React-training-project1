import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../store/todo/todo-thunk";
import Button from "../ui/Button";
import classes from "./TodoForm.module.css";
import Message from "./Message";

const TodoForm = (props) => {
  const dispatch = useDispatch();
  const todoRef = useRef();
  const [isValid, setIsValid] = useState(true);

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (todoRef.current.value) {
      const newTodo = {
        id: Math.trunc(Math.random() * 2000),
        title: todoRef.current.value,
        checked: false,
      };
      dispatch(addTodoItem(newTodo));
      todoRef.current.value = ''
    }
  };

  return (
    <div className={classes.formcontainer}>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <input ref={todoRef} type="text" placeholder="new todo item" />
        <Button className={classes.button} type="submit" />
      </form>
      {/* Loading message */}
      <Message />
      <span className={classes.errormsg}>
        {!isValid && "Please add a todo !"}
      </span>
    </div>
  );
};

export default TodoForm;
