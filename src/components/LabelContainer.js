import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLabelList } from "../store/label/label-thunk";
import { todoActions } from "../store/todo/todo-slice";
import classes from "./LabelContainer.module.css";
import LabelItem from "./LabelItem";
import { Button } from "@mui/material";

const LabelContainer = () => {
  const labelItems = useSelector((state) => state.label.labels);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLabelList());
  }, []);
  const showAllHandler = () => {
    dispatch(todoActions.setBacktoAllItems());
  };
  return (
    <div className={classes.container}>
      <div className={classes.allBtn}>
        <Button size="large" onClick={showAllHandler} variant="outlined">
          All
        </Button>
      </div>
      {labelItems.map((label) => {
        return (
          <LabelItem
            id={label.id}
            title={label.name}
            key={label.key}
            keyOfLabel={label.key}
          />
        );
      })}
    </div>
  );
};

export default React.memo(LabelContainer);
