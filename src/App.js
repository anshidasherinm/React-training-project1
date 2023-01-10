import { useState, useReducer, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodosContainer from "./components/TodosContainer";
import Notification from "../src/ui/Notification";
import Card from "./ui/Card";
import React from "react";
import { sendTodoData, fetchTodoData } from "./store/todos-actions";
import { useDispatch, useSelector } from "react-redux";


function App() {
  const todos = useSelector((state) => state.todo);
  return (
    <React.Fragment>
      <div className="App">
        <h1>Todo App</h1>
        <Card>
          <TodoForm />
          <TodosContainer todos={todos.items} />
        </Card>
      </div>
    </React.Fragment>
  );
}

export default App;
