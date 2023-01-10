import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import classes from "./TodosContainer.module.css";
import { getTodoList } from "../store/todo/todo-thunk";
import NewTodoList from "./NewTodoList";
import CompletedTodoList from "./CompletedTodoList";

const TodosContainer = (props) => {
  const dispatch = useDispatch();

  // Load API data on initial mount
  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  return (
    <div className={classes.todos}>
      <NewTodoList />
      <div className={classes.seperator} />
      <CompletedTodoList />
    </div>
  );
};

export default TodosContainer;
