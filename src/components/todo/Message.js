import React from "react";
import { useAppSelector } from "store/redux-hooks";
import { LinearProgress } from "@mui/material";
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

const styles = {
  progress: {
    backgroundColor: "white",
    "& .MuiLinearProgress-barColorPrimary": {
      //
      backgroundColor: "orange",
    },
  },
};
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
    // } = useSelector((state) => state.todo);
  } = useAppSelector((state) => state.todo);
  if (updatingTodo) {
    return (
      <div className={classes.message}>
        <LinearProgress sx={styles.progress} />
      </div>
    );
  }

  if (addingTodoItem) {
    return (
      <div className={classes.message}>
        <LinearProgress sx={styles.progress} />
      </div>
    );
  }

  if (loadingList) {
    return <div className={classes.message}>Loading list...</div>;
  }

  if (deletingTodoItem) {
    return (
      <div className={classes.message}>
        <LinearProgress sx={styles.progress} />
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
