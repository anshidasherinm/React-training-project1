import React from "react";
import TodoItem from "./TodoItem";
import classes from "./CompletedTodoList.module.css";
import { useSelector } from "react-redux";

const CompletedTodoList = (props) => {
  const todoItems = useSelector((state) =>
    state.todo.items.filter((todo) => todo.checked === true)
  );

  if (todoItems.length === 0) {
    return <div className={classes.emptylist}>No completed todos</div>;
  }

  return (
    <div className={classes.completed_todos}>
      {todoItems.map((todo) => (
        <TodoItem
          id={todo.key}
          title={todo.title}
          key={todo.key}
          check={todo.checked}
        />
      ))}
    </div>
  );
};

export default React.memo(CompletedTodoList);
