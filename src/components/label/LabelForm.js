import React, { useState } from "react";
import { useAppDispatch } from "store/redux-hooks";
import { addLabel } from "store/label/label-thunk";
import classes from "components/label/LabelForm.module.css";
import MessageLabel from "components/label/MessageLabel";
import { Button, Card, TextField } from "@mui/material";

const LabelForm = (props) => {
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  const [notValid, setNotValid] = useState(false);
  const [label, setLabel] = useState("");

  const labelSubmitHandler = async (event) => {
    console.log("label form submitted");
    // event.preventDefault();
    // event.nativeEvent.stopImmediatePropagation();
    // event.stopPropagation();
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
        <form className={classes.labelForm}>
          <TextField
            data-testid={"input-label"}
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
              "data-testid": "input-label2",
            }}
            id="label-name"
            label="Label Name"
            variant="outlined"
            value={label}
            onChange={(label) => setLabel(label.target.value)}
          />

          <Button
            onClick={labelSubmitHandler}
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
            data-testid={"label-add"}
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
