import React from "react";
import { useSelector } from "react-redux";
import classes from "./NewTodoList.module.css";
import TodoItem from "./TodoItem";

const NewTodoList = (props) => {
  const todoItems = useSelector((state) =>
    state.todo.items.filter((todo) => todo.checked === false)
  );
  if (todoItems.length === 0) {
    return <div className={classes.emptylist}>Add a todo</div>;
  }

  return (
    <div className={classes.new_todos}>
      {todoItems.map((todo) => {
        return (
          <TodoItem
            id={todo.key}
            title={todo.title}
            key={todo.key}
            check={todo.checked}
          />
        );
      })}
    </div>
  );
};

export default React.memo(NewTodoList);
