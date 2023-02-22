import { LinearProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  message: {
    color: "white",
    width: "100%",
  },

  errorMessage: {
    color: "red",
    width: "80%",
  },
});
function Message() {
  const classes = useStyles();
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
