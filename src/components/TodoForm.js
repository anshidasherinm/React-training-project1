import React, { useState } from "react";
import Button from "../ui/Button";
import classes from "./TodoForm.module.css";
const TodoForm = (props) => {
  const [item, setItem] = useState("");
  const [isValid, setIsValid] = useState(true);
  const setItemHandler = (event) => {
    setItem(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // console.log("submitted");
    if (item.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    const newTodo = {
      id: Math.trunc(Math.random() * 2000),
      title: item,
      checked: false,
    };
    // console.log(newTodo);
    props.addTodo(newTodo);
    setItem("");
  };
  return (
    <div className={classes.formcontainer}>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="new todo item"
          value={item}
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
