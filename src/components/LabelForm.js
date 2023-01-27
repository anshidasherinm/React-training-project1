import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addLabel } from "../store/label/label-thunk";
import classes from "./LabelForm.module.css";
import MessageLabel from "./MessageLabel";

const LabelForm = () => {
  const labelInputRef = useRef();
  const dispatch = useDispatch();
  const [notValid, setNotValid] = useState(false);
  const labelSubmitHandler = (event) => {
    event.preventDefault();

    if (labelInputRef.current.value) {
      const newlabel = {
        id: Math.trunc(Math.random() * 2000),
        name: labelInputRef.current.value,
      };
      dispatch(addLabel(newlabel));
      // console.log(newlabel);
      setNotValid(false);
      labelInputRef.current.value = "";
    } else {
      setNotValid(true);
    }
  };
  return (
    <React.Fragment>
      <div className={classes.labelForm}>
        <form onSubmit={labelSubmitHandler}>
          <input
            type="text"
            className={classes.input}
            ref={labelInputRef}
            placeholder="Add label"
          />

          <button>Add</button>
        </form>
      </div>
      <div className={classes.message}>
        <MessageLabel />
        {notValid && (
          <span className={classes.errormsg}>"Please add a label !"</span>
        )}
      </div>
    </React.Fragment>
  );
};

export default LabelForm;
