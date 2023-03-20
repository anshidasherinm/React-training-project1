import React from "react";
import { updateTodo, deleteTodo } from "store/todo/todo-thunk";
import { useAppDispatch, useAppSelector } from "store/redux-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, ListItemIcon, ListItemText, ListItem } from "@mui/material";

const useStyles = makeStyles({
  remove: {
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "1rem",
    fontSize: "larger",
    marginRight: "1rem",
    "&:hover": {
      color: "rgb(243, 65, 65)",
    },

    checkBoxStyle: {
      color: "white",
      // "&.Mui-checked": classes.muiChecked
      "&.Mui-checked": { color: "orange" },
    },
  },

  muiChecked: {
    color: "orange",
  },
});

const TodoItem = (props) => {
  // const dispatch = useDispatch();
  // const todoItems = useSelector((state) => state.todo.items);
  const dispatch = useAppDispatch();
  const todoItems = useAppSelector((state) => state.todo.items);

  const classes = useStyles();

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
    const item = todoItems.find((e) => e.key === key); //expression
    dispatch(deleteTodo({ ...item, checked: true })); //statement
  };

  const styles = {
    //above function
    listItem: {
      paddingLeft: "1rem",
      width: "100%",
      boxSizing: "border-box",
      backgroundColor: "#383838",
      minHeight: "5rem",
      borderBottom: "3px solid #282828",
    },

    checkbox: {
      color: "white",
      // "&.Mui-checked": classes.muiChecked
      "&.Mui-checked": { color: "orange" },
    },

    listItemText: {
      overflowWrap: "normal",
      "& .MuiTypography-root": {
        color: "orange",
        fontSize: "1.1rem",
        fontWeight: "normal",
      },
      marginRight: "2rem",
    },
    listItemIcon1: { minWidth: "40px" },
    listItemIcon2: { minWidth: "40px", marginLeft: "1rem" },
  };

  return (
    <ListItem
      sx={styles.listItem}
      key={props.id}
      disablePadding
      // data-testid={"todo-listItem"}
    >
      <ListItemIcon sx={styles.listItemIcon1}>
        <Checkbox
          // sx={classes.checkBoxStyle}
          // className={classes.checkBoxStyle}
          sx={styles.checkbox}
          edge="start"
          checked={props.check}
          onChange={(e) => checkBoxClickHandler(props.id, e)}
          inputProps={{ "aria-labelledby": props.labelId }}
          data-testid={"todo-checkbox"}
        />
      </ListItemIcon>

      <ListItemText
        id={props.labelId}
        primary={`${props.title}`}
        sx={styles.listItemText}
        data-testid={"todo-listItemtext"}
      />

      <ListItemIcon sx={styles.listItemIcon2} data-testid={"todo-removeicon"}>
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
