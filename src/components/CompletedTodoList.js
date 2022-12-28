import React from "react";
import TodoItem from "./TodoItem";
import classes from "./CompletedTodoList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todos-slice";

const CompletedTodoList = (props) => {
  const list = useSelector((state) =>
    state.todo.items.filter((todo) => todo.checked === true)
  );
  const dispatch = useDispatch();
  const addCheckHandler = (id) => {
    dispatch(todoActions.addCheckHandler(id));
  };
  const completedTodoList = list.map((todo) => (
    <TodoItem
      id={todo.id}
      title={todo.title}
      key={todo.id}
      check={todo.checked}
      addCheck={addCheckHandler}
    />
  ));
  const emptylist = <div className={classes.emptylist}>No completed todos</div>;
  const content = list.length > 0 ? completedTodoList : emptylist;
  return <div className={props.className}>{content}</div>;
};

export default CompletedTodoList;
