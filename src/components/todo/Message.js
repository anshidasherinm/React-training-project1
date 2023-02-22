import { ClassNames } from "@emotion/react";
import { LinearProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import classes from "./Message.module.css";

function Message() {
  const {
    addingTodoItem,
    loadingList,
    updatingTodo,
    deletingTodoItem,
    addingTodoItemError,
    loadingListError,
    updatingTodoError,
    deletingTodoItemError,
  } = useSelector((state) => state.todo);

  if (updatingTodo) {
    return (
      <div className={classes.message}>
        <LinearProgress
          sx={{
            backgroundColor: "white",
            "& .MuiLinearProgress-barColorPrimary": {
              backgroundColor: "orange",
            },
          }}
        />
      </div>
    );
  }

  if (addingTodoItem) {
    return (
      <div className={classes.message}>
        <LinearProgress
          sx={{
            backgroundColor: "white",
            "& .MuiLinearProgress-barColorPrimary": {
              backgroundColor: "orange",
            },
          }}
        />
      </div>
    );
  }

  if (loadingList) {
    return <div className={classes.message}>Loading list...</div>;
  }

  if (deletingTodoItem) {
    return (
      <div className={classes.message}>
        <LinearProgress
          sx={{
            backgroundColor: "white",
            "& .MuiLinearProgress-barColorPrimary": {
              backgroundColor: "orange",
            },
          }}
        />
      </div>
    );
  }

  if (
    addingTodoItemError ||
    loadingListError ||
    updatingTodoError ||
    deletingTodoItemError
  ) {
    return (
      <div className={classes.errorMessage}>
        Error ! could not perform action
      </div>
    );
  }

  return null;
}

export default Message;
