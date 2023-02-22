import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { Card, List } from "@mui/material";

const CompletedTodoList = (props) => {
  const todoItems = useSelector((state) =>
    state.todo.items.filter((todo) => todo.checked === true)
  );

  if (todoItems.length === 0) {
    return (
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflowY: "auto",
          width: "100%",
          color: "white",
          backgroundColor: "#383838",
        }}
      >
        No completed todos
      </Card>
    );
  }

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "rgb(42, 4, 77)",
      }}
    >
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          padding: "0px",
          backgroundColor: "#383838",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          alignItems: "center",
        }}
      >
        {todoItems.map((todo) => {
          const labelId = `checkbox-list-label-${todo.id}`;

          return (
            <TodoItem
              id={todo.key}
              title={todo.title}
              key={todo.key}
              check={todo.checked}
              lalabelId={labelId}
            />
          );
        })}
      </List>
    </Card>
  );
};

export default CompletedTodoList;
