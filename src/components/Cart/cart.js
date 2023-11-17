import React, { useState, useContext } from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../Store/Cart-Context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ct = useContext(CartContext);
  const [cancel, setCancel] = useState(false);
  // const cartItems=[];
  let Amount = ct.items.reduce((curNumber, item) => {
    return curNumber + item.price * item.quantity;
  }, 0);

  const items = ct.items.map(
    (item) =>
      item.quantity > 0 && (
        <CartItem list={item} key={Math.random().toString()} />
      )
  );

  const cancelButtonHandler = () => {
    setCancel(true);
    props.oncancel(cancel);
  };

  return (
    <Modal>
      <ul>{items}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span className={classes.price}>Rs.{Amount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={cancelButtonHandler}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
