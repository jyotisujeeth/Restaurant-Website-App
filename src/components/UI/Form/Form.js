import React from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  return (
    <form className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} defaultValue="1" />
    </form>
  );
};

export default Form;
