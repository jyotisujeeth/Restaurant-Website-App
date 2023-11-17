import React, { useContext } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../Store/Cart-Context";

const CartItem = (props) => {
  const ctxt = useContext(CartContext);

  const removeItemHandler = (e) => {
    e.preventDefault();
    ctxt.removeItem(props.list);
  };
  const addItem = (e) => {
    e.preventDefault();
    ctxt.updateItem(props.list);
  };

  return (
    <li className={classes.cart}>
      <h2 className={classes.h2}>{props.list.name}</h2>
      <span className={classes.amount}>{props.list.quantity}</span>
      <span className={classes.price}>Rs.{props.list.price}</span>
      <div className={classes.actions}>
        <button className={classes.button} onClick={removeItemHandler}>
          {" "}
          -{" "}
        </button>
        <button className={classes.button} onClick={addItem}>
          {" "}
          +{" "}
        </button>
      </div>
    </li>
  );
};

export default CartItem;
