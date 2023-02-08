import React, { useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLabel, updateLabel } from "../store/label/label-thunk";
import { todoActions } from "../store/todo/todo-slice";
import { Button } from "@mui/material";
import IconMenu from "./IconMenu";

import classes from "./LabelItem.module.css";
const LabelItem = (props) => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const [options, showOptions] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [saveBtn, setSaveBtn] = useState(false);

  // const labelHandler = useMemo(() => {
  //   console.log("inside the label function");
  //   dispatch(todoActions.groupByLabel(props.keyOfLabel));
  // }, [props.keyOfLabel]);

  const labelHandler = () => {
    dispatch(todoActions.groupByLabel(props.keyOfLabel));
  };

  const removeLabelHandler = (id) => {
    showOptions(!options);
    dispatch(
      deleteLabel({
        key: props.keyOfLabel,
      })
    );

    dispatch(todoActions.setBacktoAllItems());
  };

  const showOptionsHandler = () => {
    showOptions(!options);
  };

  const saveLabelnameHandler = () => {
    setSaveBtn(false);
    setDisabled(true);
    dispatch(
      updateLabel({
        name: inputRef.current.value,
        key: props.keyOfLabel,
        id: props.id,
      })
    );
  };
  const updateLabelHandler = (label) => {
    showOptions(!options);
    setDisabled(false);
    setSaveBtn(true);
  };

  return (
    <React.Fragment>
      <div className={classes.labelParent}>
        <div className={classes.fullLabel}>
          <div className={classes.label}>
            <i
              className={`fa-solid fa-ellipsis-vertical ${classes.options}`}
              onClick={(e) => showOptionsHandler(props.title)}
            ></i>
            <div onClick={labelHandler}>
              <input
                ref={inputRef}
                className={classes.labelButton}
                defaultValue={props.title}
                disabled={disabled}
              />
            </div>
          </div>
          <div className={classes["arrow-right"]} />
          {saveBtn && (
            <div className={classes.saveBtn}>
              <Button
                size="small"
                variant="outlined"
                onClick={saveLabelnameHandler}
              >
                Save
              </Button>
            </div>
          )}
        </div>
      </div>

      {options && (
        <IconMenu
          keyOfLabel={props.keyOfLabel}
          removeLabelHandler={removeLabelHandler}
          updateLabelHandler={updateLabelHandler}
        />
      )}
    </React.Fragment>
  );
};

export default LabelItem;
