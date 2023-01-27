import React from "react";
import { useSelector } from "react-redux";

function MessageLabel() {
  const { addingLabel, loadingLabels, updatingLabel, deletingLabel } =
    useSelector((state) => state.label);

  // if (updatingLabel) {
  //   return <div>Updating Label list...</div>;
  // }

  if (addingLabel) {
    return <div>Adding New Label...</div>;
  }

  if (loadingLabels) {
    return <div>Loading list...</div>;
  }

  if (deletingLabel) {
    return <div>Deleting Label...</div>;
  }

  return null;
}

export default MessageLabel;
