import React, { useEffect } from "react";
import NewTodoList from "./NewTodoList";
import classes from "./TodosContainer.module.css";
import CompletedTodoList from "./CompletedTodoList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoData } from "../store/todos-actions";
import { uiActions } from "../store/ui-slice";

let isInitial = true;
const TodosContainer = (props) => {
  let todoLoadingStatus = useSelector((state) => state.ui.todosLoadingStatus);
  // console.log(todoLoadingStatus);
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo);
  console.log(todos);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(fetchTodoData());
      dispatch(uiActions.setStatus());
      return;
    }
    // dispatch(fetchTodoData()); why ths cannot be provided here
  }, [dispatch]);

  const content =
    todoLoadingStatus === "Loaded" ? (
      <>
        <NewTodoList className={classes.new_todos} />
        <div className={classes.seperator} />
        <CompletedTodoList className={classes.completed_todos} />
      </>
    ) : (
      <div className={classes.loading}>{todoLoadingStatus}</div>
    );
  return (
    <React.Fragment>
      <div className={classes.todos}>{content}</div>
    </React.Fragment>
  );
};

export default TodosContainer;
