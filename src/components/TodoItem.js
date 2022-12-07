import React from "react";
// import classes from "./NewTodoList.module.css";
import classes from "./TodoItem.module.css";
const TodoItem = (props) => {
  const removeTodoHandler = () => {
    props.removeTodoHandler(props.id);
  };
  const checkboxHandler = () => {
    props.addCheck(props.id);
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
