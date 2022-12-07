import { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodosContainer from "./components/TodosContainer";

import Card from "./ui/Card";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Buy Groceries", checked: false },
    { id: 2, title: "Go to Gym", checked: false },
    { id: 3, title: "Plan next task", checked: true },
    { id: 4, title: "Another task", checked: false },
  ]);

  // const todos = [
  //   { id: 1, title: "react study", checked: false },
  //   { id: 2, title: "compleet project", checked: false },
  // ];

  const addTodoHandler = (todo) => {
    setTodoList((prev) => [...prev, todo]);
  };

  const removeTodoHandler = (id) => {
    setTodoList((prev) =>
      prev.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  // useEffect(() => {
  //   setTodoList(todoList);
  // }, [todoList]);

  const addCheckHandler = (id) => {
    // const newTodoList = todoList;
    // for (var key of newTodoList) {
    //   if (key.id === status.id) {
    //     key.checked = status.checked;
    //   }
    // }
    // setTodoList(newTodoList);
    // console.log(todoList);
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Card>
        <TodoForm addTodo={addTodoHandler} />
        <TodosContainer
          todos={todoList}
          removeTodoHandler={removeTodoHandler}
          addCheck={addCheckHandler}
        />
      </Card>
    </div>
  );
}

export default App;
