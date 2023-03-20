import React from "react";
import { Card, List } from "@mui/material";
import TodoItem from "components/todo/TodoItem";
import { useAppSelector } from "store/redux-hooks";

const NewTodoList = (props) => {
  const todoItems = useAppSelector((state) =>
    state.todo.items.filter((todo) => todo.checked === false)
  );

  const styles = {
    card_empty: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      overflowY: "auto",
      width: "100%",
      color: "white",
      backgroundColor: "#383838",
    },
    card_notempty: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      backgroundColor: "#383838",
    },
    list: {
      padding: "0px",
      width: "100%",
      bgcolor: "background.paper",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      alignItems: "center",
      backgroundColor: "#383838",
    },
  };

  if (todoItems.length === 0) {
    return <Card style={styles.card_empty}>Add a todo</Card>;
  }

  return (
    <Card style={styles.card_notempty}>
      <List sx={styles.list}>
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
