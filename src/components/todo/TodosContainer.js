import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodoList } from "../../store/todo/todo-thunk";
import NewTodoList from "./NewTodoList";
import CompletedTodoList from "./CompletedTodoList";
import { Card } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  seperator: {
    width: "0.5px",
    backgroundColor: "grey",
    height: "100%",
    border: "0.5px solid grey",
  },
});

const TodosContainer = (props) => {
  const classes = useStyles();
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
