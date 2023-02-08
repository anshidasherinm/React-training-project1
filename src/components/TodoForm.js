import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoItem } from "../store/todo/todo-thunk";
import classes from "./TodoForm.module.css";
import Message from "./Message";
import { todoActions } from "../store/todo/todo-slice";
import { Button } from "@mui/material";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
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
    <div className={classes.formcontainer}>
      <form className={classes.form} id={classes.todoInput}>
        <TextField
          inputProps={{
            style: {
              width: "10rem",
            },
          }}
          id="todoitem-name"
          label="Add Todo"
          variant="outlined"
          value={todoItem}
          onChange={(todo) => setTodoItem(todo.target.value)}
        />

        <FormControl className={classes.labels}>
          <InputLabel id="select-label">Label</InputLabel>
          <Select
            labelId="select-label"
            id="simple-select"
            value={selectedLabelKey}
            label="Age"
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
        <Button size="large" variant="outlined" onClick={formSubmitHandler}>
          Add
        </Button>
      </form>
      <Message />
      <span className={classes.errormsg}>
        {notValid && "Please add a todo !"}
      </span>
    </div>
  );
};

export default TodoForm;
