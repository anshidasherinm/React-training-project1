import { useState, useReducer } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodosContainer from "./components/TodosContainer";

import Card from "./ui/Card";

const initialtodoListState = {
  todoList: [
    { id: 1, title: "Buy Groceries", checked: false },
    { id: 2, title: "Go to Gym", checked: false },
    { id: 3, title: "Plan next task", checked: true },
    { id: 4, title: "Another task", checked: false },
  ],
};
const todoListReducer = (prevState, action) => {
  if (action.type === "ADD") {
    return { todoList: [...prevState.todoList, action.val] };
  }
  if (action.type === "REMOVE") {
    return {
      todoList: prevState.todoList.filter((todo) => {
        return todo.id !== action.id;
      }),
    };
  }

  if (action.type === "CHANGE_STATUS") {
    return {
      todoList: prevState.todoList.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      }),
    };
  }

  return {
    initialtodoListState,
  };
};
function App() {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: "Buy Groceries", checked: false },
  //   { id: 2, title: "Go to Gym", checked: false },
  //   { id: 3, title: "Plan next task", checked: true },
  //   { id: 4, title: "Another task", checked: false },
  // ]);
  const [todoListState, dispatchtodoList] = useReducer(
    todoListReducer,
    initialtodoListState
  );

  const addTodoHandler = (todo) => {
    // setTodoList((prev) => [...prev, todo]);
    dispatchtodoList({ type: "ADD", val: todo });
  };

  const removeTodoHandler = (id) => {
    // setTodoList((prev) =>
    //   prev.filter((todo) => {
    //     return todo.id !== id;
    //   })
    // );
    dispatchtodoList({ type: "REMOVE", id: id });
  };

  // useEffect(() => {
  //   setTodoList(todoList);
  // }, [todoList]);

  const addCheckHandler = (id) => {
    dispatchtodoList({ type: "CHANGE_STATUS", id: id });
    // const newTodoList = todoList.map((todo) => {
    //   if (todo.id === id) {
    //     return { ...todo, checked: !todo.checked };
    //   }
    //   return todo;
    // });
    // setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Card>
        <TodoForm addTodo={addTodoHandler} />
        <TodosContainer
          //  todos={todoList}
          todos={todoListState.todoList}
          removeTodoHandler={removeTodoHandler}
          addCheck={addCheckHandler}
        />
      </Card>
    </div>
  );
}

export default App;
