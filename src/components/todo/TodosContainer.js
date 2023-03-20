import React, { useEffect } from "react";
import { getTodoList } from "store/todo/todo-thunk";
import { useAppDispatch, useAppSelector } from "store/redux-hooks";
import NewTodoList from "components/todo/NewTodoList";
import CompletedTodoList from "components/todo/CompletedTodoList";
import { Card } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  seperator: {
    width: "0.5px",
    backgroundColor: "grey",
    height: "100%",
    border: "0.5px solid grey",
  },
  card_style: {
    display: "flex",
    flexDirection: "coloumn",
    justifyContent: "space-between",
    height: "20rem",
    backgroundColor: "#383838",
  },
});

const TodosContainer = (props) => {
  const classes = useStyles();
  const styles = {
    card: {
      display: "flex",
      flexDirection: "coloumn",
      justifyContent: "space-between",
      height: "20rem",
      backgroundColor: "#383838",
    },
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  return (
    <Card variant="outlined" style={styles.card}>
      <NewTodoList />
      <div className={classes.seperator} />
      <CompletedTodoList />
    </Card>
  );
};

export default TodosContainer;
