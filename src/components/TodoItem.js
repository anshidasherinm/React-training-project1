import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodoData,
  fetchTodoData,
  updateTodoData,
} from "../store/todos-actions";
import { todoActions } from "../store/todos-slice";
import { uiActions } from "../store/ui-slice";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const removeTodoHandler = async () => {
    // console.log(id);
    dispatch(uiActions.setStatus("Deleting..."));
    const response = await deleteTodoData(props.id);
    // console.log(response);
    if (response === "success") {
      dispatch(todoActions.removeItemFromTodos(props.id));
      dispatch(uiActions.setStatus("Successfully deleted"));
    } else {
      dispatch(uiActions.setStatus("Deletion failed"));
    }
    dispatch(fetchTodoData());
  };

  const checkboxHandler = async () => {
    dispatch(uiActions.setStatus("Updating..."));
    const response = await updateTodoData(props.id);

    console.log(response);
    if (response === "success") {
      dispatch(todoActions.addCheckHandler(props.id));
      dispatch(uiActions.setStatus("Succesfully updated"));
    } else {
      dispatch(uiActions.setStatus("Updation failed"));
    }
    dispatch(fetchTodoData());
  };

  // //why cant provide here with todos.changed / handlers
  // useEffect(() => {
  //   dispatch(fetchTodoData());
  // }, [todos.changed]);

  // useEffect;
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
