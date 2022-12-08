import { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodosContainer from "./components/TodosContainer";

import Card from "./ui/Card";

function App() {
  const [todoList, setTodoList] = useState(
    () => {
      return JSON.parse(localStorage.getItem("todoList") || []);
    }
    //   [
    //   { id: 1, title: "Buy Groceries", checked: false },
    //   { id: 2, title: "Go to Gym", checked: false },
    //   { id: 3, title: "Plan next task", checked: true },
    //   { id: 4, title: "Another task", checked: false },
    // ]
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

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

  const addCheckHandler = (id) => {
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
