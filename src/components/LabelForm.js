import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLabel } from "../store/label/label-thunk";
import classes from "./LabelForm.module.css";
import MessageLabel from "./MessageLabel";
import { Button, TextField } from "@mui/material";

const LabelForm = () => {
  const dispatch = useDispatch();
  const [notValid, setNotValid] = useState(false);
  const [label, setLabel] = useState("");
  const labelSubmitHandler = (event) => {
    event.preventDefault();
    if (label) {
      const newlabel = {
        id: Math.trunc(Math.random() * 2000),
        name: label,
      };
      dispatch(addLabel(newlabel));
      setNotValid(false);
      setLabel("");
    } else {
      setNotValid(true);
    }
  };

  return (
    <React.Fragment>
      <div className={classes.labelForm}>
        <form onSubmit={labelSubmitHandler}>
          <TextField
            inputProps={{
              style: {
                height: "10px",
                width: "150px",
              },
            }}
            id="label-name"
            label="Label Name"
            variant="outlined"
            value={label}
            onChange={(label) => setLabel(label.target.value)}
          />
          <Button size="large" variant="outlined" type="submit">
            Add
          </Button>
        </form>
      </div>
      {
        <div className={classes.message}>
          <MessageLabel />
          {notValid && (
            <span className={classes.errormsg}>"Please add a label !"</span>
          )}
        </div>
      }
    </React.Fragment>
  );
};

export default LabelForm;
