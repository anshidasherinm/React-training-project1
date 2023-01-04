import React from "react";
import { useSelector } from "react-redux";
import classes from "./NewTodoList.module.css";
import TodoItem from "./TodoItem";

const NewTodoList = (props) => {
  const todos = useSelector((state) =>
    state.todo.items.filter((todo) => todo.checked === false)
  );

  const todoList = todos.map((todo) => {
    return (
      <TodoItem
        id={todo.id}
        title={todo.title}
        key={todo.id}
        check={todo.checked}
      />
    );
  });
  const emptylist = <div className={classes.emptylist}>Add a todo</div>;
  const content = todos.length > 0 ? todoList : emptylist;
  return <div className={props.className}>{content}</div>;
};

export default NewTodoList;
