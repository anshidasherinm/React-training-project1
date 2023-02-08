import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./TodoItem.module.css";
import { updateTodo, deleteTodo } from "../store/todo/todo-thunk";
import todoSlice, { setKey } from "../store/todo/todo-slice";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todo.items);
  const todoItemsAll = useSelector((state) => state.todo.allItems);

  const checkBoxClickHandler = (key, e) => {
    if (e.target.checked) {
      const item = todoItems.find((e) => e.key === key);
      dispatch(updateTodo({ ...item, checked: true }));
    } else {
      const item = todoItems.find((e) => e.key === key);

      dispatch(updateTodo({ ...item, checked: false }));
    }
  };

  const removeTodoHandler = (key) => {
    const item = todoItems.find((e) => e.key === key);
    dispatch(deleteTodo({ ...item, checked: true }));
  };

  return (
    <div className={classes.todo}>
      <input
        type="checkbox"
        checked={props.check}
        id={props.id}
        name={props.title}
        onChange={(e) => checkBoxClickHandler(props.id, e)}
      />
      <div className={classes.title}>{props.title}</div>
      {!props.check ? (
        <i
          className={`fa fa-remove ${classes.remove}`}
          onClick={(e) => removeTodoHandler(props.id)}
        />
      ) : null}
    </div>
  );
};

export default React.memo(TodoItem);
