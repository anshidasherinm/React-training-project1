import React from "react";
import NewTodoList from "./NewTodoList";
import classes from "./TodosContainer.module.css";
import CompletedTodoList from "./CompletedTodoList";
import { useSelector } from "react-redux";

const TodosContainer = (props) => {
  // let notification = useSelector((state) => state.ui.notification);
  console.log(props.todos);
  const removeTodoHandler = (id) => {
    props.removeTodoHandler(id);
  };
  const addCheckHandler = (id) => {
    props.addCheck(id);
  };

  return (
    <React.Fragment>
      {/* {notification === null || notification.status === "success" ? ( */}
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
      {/* ) // : ( // <p className={classes.error}>Failed to fetch data </p>
      // )} //{" "} */}
      {/* {notification ? (
      //   notification.status === "error"
      // ) : (
        
      // )} */}
    </React.Fragment>
  );
};

export default TodosContainer;
