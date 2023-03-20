import React from "react";
import { LinearProgress } from "@mui/material";
import { useAppSelector } from "store/redux-hooks";
import classes from "components/label/MessageLabel.module.css";

function MessageLabel() {
  const {
    addingLabel,
    loadingLabels,
    updatingLabel,
    deletingLabel,
    addingLabelError,
    loadingLabelError,
    updatingLabelError,
    deletingLabelError,
  } = useAppSelector((state) => state.label);
  // const {
  //   addingTodoItem,
  //   loadingList,
  //   updatingTodo,
  //   deletingTodoItem,
  //   addingTodoItemError,
  //   loadingListError,
  //   updatingTodoError,
  //   deletingTodoItemError,
  //   // } = useSelector((state) => state.todo);
  // } = useAppSelector((state) => state.todo);

  if (addingLabel) {
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

  if (updatingLabel) {
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

  if (loadingLabels) {
    return <div className={classes.message}>Loading Labels...</div>;
  }

  if (deletingLabel) {
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
    addingLabelError ||
    loadingLabelError ||
    updatingLabelError ||
    deletingLabelError
  ) {
    return (
      <div className={classes.errormsg}>Error ! Could not perform action</div>
    );
  }

  return null;
}

export default MessageLabel;
