import React from "react";
import NewTodoList from "./NewTodoList";
import classes from "./TodosContainer.module.css";
import CompletedTodoList from "./CompletedTodoList";
const TodosContainer = (props) => {
  console.log(props.todos);
  const removeTodoHandler = (id) => {
    props.removeTodoHandler(id);
  };
  const addCheckHandler = (id) => {
    props.addCheck(id);
  };

  return (
    <div className={classes.todos}>
      <NewTodoList
        className={classes.new_todos}
        list={props.todos.filter((todo) => todo.checked === false)}
        removeTodoHandler={removeTodoHandler}
        addCheck={addCheckHandler}
      />
      <div className={classes.seperator} />
      <CompletedTodoList
        className={classes.completed_todos}
        list={props.todos.filter((todo) => todo.checked === true)}
        addCheck={addCheckHandler}
      />
      {/* <div className={classes.new_todos}>newtodos</div> */}
      {/* <div className={classes.completed_todos}>completedTodos</div> */}
    </div>
  );
};

export default TodosContainer;
