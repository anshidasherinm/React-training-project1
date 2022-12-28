import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todos-slice";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const dispatch = useDispatch();

  const removeTodoHandler = () => {
    // console.log(id);
    dispatch(todoActions.removeItemFromTodos(props.id));
  };

  const checkboxHandler = () => {
    dispatch(todoActions.addCheckHandler(props.id));
  };
  const deleteButton = props.check ? (
    ""
  ) : (
    <i
      className={`fa fa-remove ${classes.remove}`}
      onClick={removeTodoHandler}
    ></i>
  );
  return (
    <div className={classes.todo}>
      <input
        type="checkbox"
        checked={props.check}
        id={props.id}
        name={props.title}
        onChange={checkboxHandler}
      />
      <div className={classes.title}>{props.title}</div>
      {deleteButton}
    </div>
  );
};

export default TodoItem;
