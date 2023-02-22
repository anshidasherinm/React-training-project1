import { Card, List } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const NewTodoList = (props) => {
  const todoItems = useSelector((state) =>
    state.todo.items.filter((todo) => todo.checked === false)
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
        Add a todo
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
        backgroundColor: "#383838",
      }}
    >
      <List
        sx={{
          padding: "0px",
          width: "100%",
          bgcolor: "background.paper",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          alignItems: "center",
          backgroundColor: "#383838",
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

export default NewTodoList;
