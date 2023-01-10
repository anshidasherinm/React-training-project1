import React from "react";
import { useSelector } from "react-redux";
import classes from "./NewTodoList.module.css";
import TodoItem from "./TodoItem";

const NewTodoList = (props) => {
  const todoItems = useSelector((state) =>
    state.todo.items.filter((todo) => todo.checked === false)
  );
  // const todos = useSelector((state) => state.todo.items);
  // console.log(todos);
  console.log(todoItems);

  if (todoItems.length === 0) {
    return <div className={classes.emptylist}>Add a todo</div>;
  }

  return (
    <div className={props.className}>
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

export default NewTodoList;
