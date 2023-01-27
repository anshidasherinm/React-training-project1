import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLabelList } from "../store/label/label-thunk";
import { todoActions } from "../store/todo/todo-slice";
import classes from "./LabelContainer.module.css";
import LabelItem from "./LabelItem";

const LabelContainer = () => {
  const labelItems = useSelector((state) => state.label.labels);
  // console.log(labelItems);
  const dispatch = useDispatch();
  // console.log("inside the label container");
  useEffect(() => {
    dispatch(getLabelList());
  }, []);
  // console.log(labelItems);
  const showAllHandler = () => {
    dispatch(todoActions.setBacktoAllItems());
  };
  return (
    <div className={classes.container}>
      <button onClick={showAllHandler} className={classes.allBtn}>
        All
      </button>
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
// export default LabelContainer;
