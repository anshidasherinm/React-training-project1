import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { labelActions } from "../store/label/label-slice";
import { deleteLabel, updateLabel } from "../store/label/label-thunk";
import { todoActions } from "../store/todo/todo-slice";
import {
  deleteLabelsinTodos,
  updateLabelInTodos,
  updateLabelsinTodos,
} from "../store/todo/todo-thunk";

import classes from "./LabelItem.module.css";
const LabelItem = (props) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todo.items);
  const groupedItems = useSelector((state) => state.todo.groupByLabel);
  const allItems = useSelector((state) => state.todo.allItems);
  const [options, showOptions] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [saveBtn, setSaveBtn] = useState(false);

  const labelHandler = () => {
    dispatch(todoActions.groupByLabel(props.title));
  };

  const removeLabelHandler = (id) => {
    showOptions(!options);
    dispatch(
      deleteLabel({
        key: id,
      })
    );

    const changedTodos = {};
    for (let i = 0; i < allItems.length; i++) {
      changedTodos[allItems[i].key] = {
        checked: allItems[i].checked,
        id: allItems[i].id,
        label: allItems[i].label === props.title ? "none" : allItems[i].label,
        title: allItems[i].title,
        key: allItems[i].key,
      };
    }
    // console.log(toFirebase);
    dispatch(deleteLabelsinTodos(changedTodos));
    dispatch(todoActions.setBacktoAllItems());
  };

  const showOptionsHandler = (label) => {
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

    const changedTodos = {};
    for (let i = 0; i < allItems.length; i++) {
      changedTodos[allItems[i].key] = {
        checked: allItems[i].checked,
        id: allItems[i].id,
        label:
          allItems[i].label === props.title
            ? inputRef.current.value
            : allItems[i].label,
        title: allItems[i].title,
        key: allItems[i].key,
      };
    }

    dispatch(updateLabelsinTodos(changedTodos));
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
          {saveBtn && <button onClick={saveLabelnameHandler}>Save</button>}
        </div>
      </div>
      {options && (
        <div className={classes.optionsDiv}>
          <ul>
            <li
              className={classes.optionsBtn}
              onClick={(e) => updateLabelHandler(props.id)}
            >
              Rename
            </li>
            <li
              className={classes.optionsBtn}
              onClick={(e) => removeLabelHandler(props.keyOfLabel)}
            >
              Delete
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default LabelItem;
