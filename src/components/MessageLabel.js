import { LinearProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import classes from "./MessageLabel.module.css";

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
  } = useSelector((state) => state.label);

  if (addingLabel) {
    return (
      <div className={classes.message}>
        <LinearProgress />
      </div>
    );
  }

  if (updatingLabel) {
    return (
      <div className={classes.message}>
        <LinearProgress />
      </div>
    );
  }

  if (loadingLabels) {
    return <div className={classes.message}>Loading Labels...</div>;
  }

  if (deletingLabel) {
    return (
      <div className={classes.message}>
        <LinearProgress />
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
      <div className={classes.message}>Error ! Could not perform action</div>
    );
  }

  return null;
}

export default MessageLabel;
