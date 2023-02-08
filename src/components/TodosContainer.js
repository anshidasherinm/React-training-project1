import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./TodosContainer.module.css";
import { getTodoList } from "../store/todo/todo-thunk";
import NewTodoList from "./NewTodoList";
import CompletedTodoList from "./CompletedTodoList";

const TodosContainer = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  return (
    <React.Fragment>
      <div className={classes.todos}>
        <NewTodoList />
        <div className={classes.seperator} />
        <CompletedTodoList />
      </div>
    </React.Fragment>
  );
};

export default TodosContainer;
