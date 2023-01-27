import React from "react";
import { useSelector } from "react-redux";

function Message() {
  const { addingTodoItem, loadingList, updatingTodo, deletingTodoItem } =
    useSelector((state) => state.todo);

  if (updatingTodo) {
    return <div>Updating todo list...</div>;
  }

  if (addingTodoItem) {
    return <div>Adding New Todo item...</div>;
  }

  if (loadingList) {
    return <div>Loading list...</div>;
  }

  if (deletingTodoItem) {
    return <div>Deleting Todo...</div>;
  }

  return null;
}

export default Message;
