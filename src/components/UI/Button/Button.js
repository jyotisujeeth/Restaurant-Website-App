import React, { useContext } from "react";
import classes from "./Button.module.css";
import CartContext from "../../../Store/Cart-Context";

const Button = (props) => {
  const ctx = useContext(CartContext);

  const addItemHandler = (event) => {
    event.preventDefault();
    ctx.addItem(props.item);
  };
  return (
    <button className={classes.button} onClick={addItemHandler}>
      {props.children}
    </button>
  );
};

export default Button;
