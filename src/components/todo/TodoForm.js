import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoItem } from "../../store/todo/todo-thunk";
import classes from "./TodoForm.module.css";
import Message from "./Message";
import { todoActions } from "../../store/todo/todo-slice";
import { Button, Card } from "@mui/material";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Grid,
} from "@mui/material";

const TodoForm = (props) => {
  const dispatch = useDispatch();
  const labelItems = useSelector((state) => state.label.labels);
  const [selectedLabelKey, setSelectedLabelKey] = useState("none");
  const [notValid, setNotValid] = useState(false);
  const [todoItem, setTodoItem] = useState("");

  const formSubmitHandler = async (event) => {
    event.preventDefault();
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

  return (
    <React.Fragment>
      <Card
        variant="outlined"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#383838",
          paddingTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <form className={classes.todoForm}>
          <Grid
            container
            spacing={0}
            style={{
              width: "100%",
              // backgroundColor: "green",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: "yellow",
            }}
          >
            <Grid
              item
              xs={12}
              md={9}
              style={{
                display: "flex",
                marginTop: "1rem",
                flexDirection: "row",
                alignItems: "center",

                justifyContent: "space-evenly",
              }}
            >
              <TextField
                sx={{
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
                }}
                InputLabelProps={{
                  style: { fontSize: "1.2rem", color: "orange" },
                }}
                id="todoitem-name"
                label="Add Todo"
                variant="outlined"
                value={todoItem}
                onChange={(todo) => setTodoItem(todo.target.value)}
              />

              <FormControl className={classes.labels}>
                <Select
                  sx={{
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
                  }}
                  labelId="select-label"
                  id="simple-select"
                  value={selectedLabelKey}
                  onChange={getLabelValue}
                  fullWidth
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
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              style={{
                display: "flex",
                marginTop: "1rem",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                size="large"
                variant="outlined"
                onClick={formSubmitHandler}
                sx={{
                  backgroundColor: "orange",
                  color: "white",
                  fontSize: "1.3rem",
                  fontWeight: "large",
                  ":hover": {
                    backgroundColor: "#ffb347",
                    color: "white",
                    border: "none",
                  },
                }}
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
