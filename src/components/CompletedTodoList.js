import React from "react";
import TodoItem from "./TodoItem";
import classes from "./CompletedTodoList.module.css";
const CompletedTodoList = (props) => {
  const addCheckHandler = (id) => {
    props.addCheck(id);
  };
  const list = props.list;
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
