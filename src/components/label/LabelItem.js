import React, { useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLabel, updateLabel } from "../../store/label/label-thunk";
import { todoActions } from "../../store/todo/todo-slice";
import {
  Badge,
  Button,
  Card,
  Checkbox,
  Chip,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import ListItemIcon from "@mui/material/ListItemIcon";

import classes from "./LabelItem.module.css";
const LabelItem = (props) => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const [options, showOptions] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [saveBtn, setSaveBtn] = useState(false);

  const todoItems = useSelector((state) =>
    state.todo.allItems.filter((todo) => todo.labelKey === props.keyOfLabel)
  );
  const count = todoItems.length;
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

  const editLabelHandler = () => {
    setSaveBtn(true);
    setDisabled(false);
  };

  return (
    <ListItem
      style={{
        height: "2rem",
        marginBottom: "1rem",
        color: "white",
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
      }}
      key={props.keyOfLabel}
      secondaryAction={
        <IconButton edge="end" aria-label="comments"></IconButton>
      }
      disablePadding
    >
      <Grid
        container
        spacing={2}
        style={{
          // height: "3rem",
          padding: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 1rem",
          width: "100%",
        }}
      >
        <Grid
          item
          xs={6}
          md={8}
          style={{
            backgroundColor: "white",
            // backgroundColor: "red",
            borderRadius: "5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
            height: "2rem",
          }}
        >
          <Badge
            badgeContent={count}
            color="success"
            sx={{
              "& .MuiBadge-badge": {
                color: "white",
                backgroundColor: "orange",
              },
              width: "70%",
            }}
          >
            <ListItemButton
              role={undefined}
              onClick={disabled && labelHandler}
              dense
              sx={{
                height: "2rem",
              }}
            >
              <p id="edit" className={classes.titleOfLabel}>
                <input
                  ref={inputRef}
                  className={classes.labelButton}
                  defaultValue={props.title}
                  disabled={disabled}
                />
              </p>
            </ListItemButton>
          </Badge>
        </Grid>
        <Grid
          item
          xs={3}
          md={4}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "0",
            height: "2rem",
            // backgroundColor: "orange",
          }}
        >
          {saveBtn === false && (
            <React.Fragment>
              <EditIcon
                sx={{
                  marginLeft: "2rem",
                  padding: "0.2rem",
                  color: "green",
                  borderRadius: "5rem",
                  backgroundColor: "rgb(161, 236, 161)",
                }}
                onClick={editLabelHandler}
              />
              <DeleteIcon
                onClick={removeLabelHandler}
                sx={{
                  color: "rgba(245, 31, 31, 0.911)",
                  backgroundColor: "rgb(231, 108, 92)",
                  borderRadius: "5rem",
                  marginLeft: "0.5rem",
                  marginRight: "1rem",
                  padding: "0.2rem",
                }}
              />
            </React.Fragment>
          )}
          {saveBtn === true && (
            <ListItemIcon>
              <Button
                size="small"
                onClick={saveLabelnameHandler}
                sx={{
                  marginLeft: "1rem",
                  backgroundColor: "orange",
                  borderRadius: "5rem",
                  color: "white",
                  fontWeight: "large",
                  ":hover": { backgroundColor: "#ffb347", color: "white" },
                }}
              >
                Save
              </Button>
            </ListItemIcon>
          )}
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default LabelItem;
