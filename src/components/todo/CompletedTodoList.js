import React from "react";
import { useAppSelector } from "store/redux-hooks";
import TodoItem from "components/todo/TodoItem";
import { Card, List } from "@mui/material";

const CompletedTodoList = (props) => {
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
      backgroundColor: "rgb(42, 4, 77)",
    },
    list: {
      width: "100%",
      bgcolor: "background.paper",
      padding: "0px",
      backgroundColor: "#383838",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      alignItems: "center",
    },
  };

  const todoItems = useAppSelector((state) =>
    state.todo.items.filter((todo) => todo.checked === true)
  );

  if (todoItems.length === 0) {
    return <Card style={styles.card_empty}>No completed todos</Card>;
  }

  return (
    <Card style={styles.card_notempty}>
      <List sx={styles.list} data-testid="todo-list">
        {todoItems.map((todo, index) => {
          const labelId = `checkbox-list-label-${todo.id}`;

          return (
            <TodoItem
              data-testid={`item-${index}`}
              id={todo.key}
              title={todo.title}
              key={todo.key}
              check={todo.checked}
              labelId={labelId}
            />
          );
        })}
      </List>
    </Card>
  );
};

export default CompletedTodoList;
