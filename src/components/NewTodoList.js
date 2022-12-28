import React from "react";
import classes from "./NewTodoList.module.css";
import TodoItem from "./TodoItem";

const NewTodoList = (props) => {
  const todos = props.list;

  const removeTodoHandler = (id) => {
    props.removeTodoHandler(id);
  };
  // console.log(todos);
  const addCheckHandler = (id) => {
    props.addCheck(id);
  };
  const todoList = todos.map((todo) => {
    return (
      <TodoItem
        id={todo.id}
        title={todo.title}
        removeTodoHandler={removeTodoHandler}
        key={todo.id}
        check={todo.checked}
        addCheck={addCheckHandler}
      />
    );
  });
  const emptylist = <div className={classes.emptylist}>Add a todo</div>;
  const content = todos.length > 0 ? todoList : emptylist;
  return <div className={props.className}>{content}</div>;
};

{
  /* <React.Fragment>
  {notification.status === "success" && (
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
  )}
</React.Fragment>; */
}

export default NewTodoList;
