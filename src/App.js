import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodosContainer from "./components/TodosContainer";
import LabelForm from "./components/LabelForm";
import LabelContainer from "./components/LabelContainer";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div>
          <h1>Todo App</h1>
        </div>
        <div className="main">
          <div className="leftWidget">
            <LabelForm />
            <LabelContainer />
          </div>
          <div className="rightWidget">
            <TodoForm />
            <TodosContainer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
