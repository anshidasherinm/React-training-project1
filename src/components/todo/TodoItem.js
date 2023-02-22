import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo, deleteTodo } from "../../store/todo/todo-thunk";
import { Checkbox, ListItemIcon, ListItemText, ListItem } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  remove: {
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "1rem",
    fontSize: "larger",
    marginLeft: "10px",
    "&:hover": {
      color: "rgb(243, 65, 65)",
    },
  },
});

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const todoItems = useSelector((state) => state.todo.items);

  const checkBoxClickHandler = (key, e) => {
    if (e.target.checked) {
      const item = todoItems.find((e) => e.key === key);
      dispatch(updateTodo({ ...item, checked: true }));
    } else {
      const item = todoItems.find((e) => e.key === key);

      dispatch(updateTodo({ ...item, checked: false }));
    }
  };

  const removeTodoHandler = (key) => {
    const item = todoItems.find((e) => e.key === key);
    dispatch(deleteTodo({ ...item, checked: true }));
  };

  return (
    <ListItem
      sx={{
        paddingLeft: "1rem",
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#383838",
        minHeight: "5rem",
        borderBottom: "3px solid #282828",
      }}
      key={props.id}
      disablePadding
    >
      <ListItemIcon>
        <Checkbox
          sx={{
            color: "white",
            "&.Mui-checked": {
              color: "orange",
            },
          }}
          edge="start"
          checked={props.check}
          onChange={(e) => checkBoxClickHandler(props.id, e)}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": props.labelId }}
        />
      </ListItemIcon>

      <ListItemText
        id={props.labelId}
        primary={`${props.title}`}
        sx={{
          overflowWrap: "normal",
          "& .MuiTypography-root": {
            color: "orange",
            fontSize: "1.3rem",
            fontWeight: "100",
          },
        }}
      />

      <ListItemIcon>
        {!props.check ? (
          <i
            className={`fa fa-remove ${classes.remove}`}
            onClick={(e) => removeTodoHandler(props.id)}
          />
        ) : null}
      </ListItemIcon>
    </ListItem>
  );
};

export default TodoItem;
