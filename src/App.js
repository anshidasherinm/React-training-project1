import { useState, useReducer, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodosContainer from "./components/TodosContainer";
import Notification from "../src/ui/Notification";
import Card from "./ui/Card";
import React from "react";
import { sendTodoData, fetchTodoData } from "./store/todos-actions";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "./store/todos-slice";

// let isInitial = true;
function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo);
  console.log(todos.items);
  let notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchTodoData());

    console.log(todos);
  }, [dispatch]);

  useEffect(() => {
    // if (isInitial) {
    //   notification = null;
    //   isInitial = false;
    //   return;
    // }
    // console.log(todos);
    if (todos.changed) {
      dispatch(sendTodoData(todos));
    }
  }, [todos, dispatch]);

  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <div className="App">
        <h1>Todo App</h1>

        <Card>
          <TodoForm />
          {/* {(notification === null || notification.status === "success") && ( */}
          <TodosContainer todos={todos.items} />
          {/* )} */}
        </Card>
      </div>
    </React.Fragment>
  );
}

export default App;
