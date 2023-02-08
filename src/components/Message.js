import { LinearProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

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
    return <LinearProgress />;
  }

  if (addingTodoItem) {
    return <LinearProgress />;
  }

  if (loadingList) {
    return <div>Loading list...</div>;
  }

  if (deletingTodoItem) {
    return <LinearProgress />;
  }

  if (
    addingTodoItemError ||
    loadingListError ||
    updatingTodoError ||
    deletingTodoItemError
  ) {
    return <div>Error ! could not perform action</div>;
  }

  return null;
}

export default Message;
