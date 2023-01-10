import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button className={props.className} type={props.type}>
      Add
    </button>
  );
};

export default Button;
