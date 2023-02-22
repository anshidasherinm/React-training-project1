import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLabel } from "../../store/label/label-thunk";
import classes from "./LabelForm.module.css";
import MessageLabel from "./MessageLabel";
import { Button, Card, TextField } from "@mui/material";

const LabelForm = (props) => {
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
      <Card
        variant="outlined"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#383838",
          alignItems: "center",
          width: "90%",
          marginBottom: "1rem",
          height: "9rem",
        }}
      >
        <form onSubmit={labelSubmitHandler} className={classes.labelForm}>
          <TextField
            sx={{
              width: "60%",
              fontSize: "2rem",
              marginLeft: "1rem",
              marginRight: "1rem",
              backgroundColor: "#494848be",
              color: "orange",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "orange !important",
                color: "orange",
              },
              ".MuiInputBase-input": {
                color: "white",
              },
            }}
            InputLabelProps={{
              style: { fontSize: "1rem", color: "orange" },
            }}
            inputProps={{
              style: {
                backgroundColor: "#494848be",
              },
            }}
            id="label-name"
            label="Label Name"
            variant="outlined"
            value={label}
            onChange={(label) => setLabel(label.target.value)}
          />

          <Button
            sx={{
              backgroundColor: "orange",
              color: "white",
              fontSize: "1rem",
              fontWeight: "",
              ":hover": {
                backgroundColor: "#ffb347",
                color: "white",
                border: "none",
              },
            }}
            size="medium"
            variant="outlined"
            type="submit"
          >
            Add
          </Button>
        </form>
        <div className={classes.labelmsg}>
          <MessageLabel />
        </div>
        {notValid && (
          <span className={classes.errormsg}>Please add a label !</span>
        )}
      </Card>
    </React.Fragment>
  );
};

export default LabelForm;
