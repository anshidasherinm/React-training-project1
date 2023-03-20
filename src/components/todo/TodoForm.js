import React, { useState } from "react";
import { addTodoItem } from "store/todo/todo-thunk";
import { todoActions } from "store/todo/todo-slice";
import { useAppDispatch, useAppSelector } from "store/redux-hooks";
import Message from "components/todo/Message";
import { Button, Card } from "@mui/material";
import { MenuItem, Select, TextField, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  errormsg: {
    height: "2rem",
    fontSize: "medium",
    color: "red",
    width: "80%",
    marginLeft: "5rem",
  },
  todoForm: {
    padding: "0rem",
    height: "100%",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    fontSize: "large",
    alignItems: "center",
    justifyContent: "center",
  },

  labels: {
    width: "25%",
    marginLeft: "1rem",
    marginRight: "1rem",
  },

  message: {
    marginTop: "1rem",
    marginBottom: "1rem",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const TodoForm = (props) => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const labelItems = useAppSelector((state) => state.label.labels);
  const [selectedLabelKey, setSelectedLabelKey] = useState("none");
  const [notValid, setNotValid] = useState(false);
  const [todoItem, setTodoItem] = useState("");

  const formSubmitHandler = async (event) => {
    // event.nativeEvent.stopImmediatePropagation();
    console.log("todo form submitted");
    // event.stopPropagation();
    if (todoItem) {
      const newTodo = {
        id: Math.trunc(Math.random() * 2000),
        title: todoItem,
        labelKey: selectedLabelKey,
        checked: false,
      };
      dispatch(todoActions.setBacktoAllItems());
      dispatch(addTodoItem(newTodo));
      setNotValid(false);
      setTodoItem("");
    } else {
      setNotValid(true);
    }
  };
  const getLabelValue = (e) => {
    setSelectedLabelKey(e.target.value);
  };

  const styles = {
    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#383838",
      paddingTop: "1rem",
      marginBottom: "1rem",
    },
    grid_parent: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    grid_child1: {
      display: "flex",
      marginTop: "1rem",
      flexDirection: "row",
      alignItems: "center",

      justifyContent: "space-evenly",
    },
    textfield: {
      width: "50%",
      backgroundColor: "#494848be",
      color: "black",
      ".MuiOutlinedInput-notchedOutline": {
        borderColor: "orange !important",
        color: "orange",
      },
      ".MuiInputBase-input": {
        color: "white",
      },
    },
    select: {
      width: "100%",
      backgroundColor: "#494848be",
      fontSize: "1rem",
      color: "orange",
      ".MuiOutlinedInput-notchedOutline": {
        borderColor: "orange !important",
      },
      "& .MuiSvgIcon-root": {
        color: "orange",
      },
    },
    grid_child2: {
      display: "flex",
      marginTop: "1rem",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      backgroundColor: "orange",
      color: "white",
      fontSize: "1.3rem",
      fontWeight: "large",
      ":hover": {
        backgroundColor: "#ffb347",
        color: "white",
        border: "none",
      },
    },
    inputlabelprops: { fontSize: "1.2rem", color: "orange" },
  };

  return (
    <React.Fragment>
      <Card variant="outlined" style={styles.card}>
        <form className={classes.todoForm}>
          <Grid container spacing={0} style={styles.grid_parent}>
            <Grid item xs={12} md={9} style={styles.grid_child1}>
              <TextField
                sx={styles.textfield}
                InputLabelProps={{
                  style: styles.inputlabelprops,
                }}
                id="todoitem-name"
                label="Add Todo"
                variant="outlined"
                value={todoItem}
                onChange={(todo) => setTodoItem(todo.target.value)}
                data-testid={"input-todo-title"}
              />
              <div className={classes.labels}>
                <Select
                  sx={styles.select}
                  labelId="select-label"
                  id="simple-select"
                  value={selectedLabelKey}
                  onChange={getLabelValue}
                  fullWidth
                  data-testid={"label-select"}
                >
                  <MenuItem value={`none`}>None</MenuItem>
                  {labelItems.map((label, index) => {
                    return (
                      <MenuItem value={`${label.key}`} key={label.key}>
                        {label.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </div>
            </Grid>
            <Grid item xs={12} md={2} style={styles.grid_child2}>
              <Button
                size="large"
                variant="outlined"
                onClick={formSubmitHandler}
                sx={styles.button}
                data-testid={"todo-add"}
              >
                Add
              </Button>
            </Grid>
          </Grid>
          <div className={classes.message}>
            <Message />
          </div>
          <span className={classes.errormsg}>
            {notValid && "Please add a todo !"}
          </span>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default TodoForm;
