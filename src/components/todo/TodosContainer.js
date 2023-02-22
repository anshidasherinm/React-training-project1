import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import classes from "./TodosContainer.module.css";
import { getTodoList } from "../../store/todo/todo-thunk";
import NewTodoList from "./NewTodoList";
import CompletedTodoList from "./CompletedTodoList";
import { Card } from "@mui/material";

const TodosContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  return (
    <Card
      variant="outlined"
      style={{
        display: "flex",
        flexDirection: "coloumn",
        justifyContent: "space-between",
        height: "20rem",
        backgroundColor: "#383838",
      }}
    >
      <NewTodoList />
      <div className={classes.seperator} />
      <CompletedTodoList />
    </Card>
  );
};

export default TodosContainer;
