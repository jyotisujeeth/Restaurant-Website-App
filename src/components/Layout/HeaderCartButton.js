import React, { useState, useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/Cart-Context";

const HeaderCartButton = (props) => {
  const [cart, setCart] = useState(false);

  const cartCtx = useContext(CartContext);
  let quantity = cartCtx.items.reduce((number, item) => {
    return number + item.quantity;
  }, 0);

  // reduce((curNumber,item)=>{
  //     return curNumber+item.amount
  // },0)

  return (
    <button
      className={classes.button}
      onClick={() => {
        setCart(true);
        props.onclick(cart);
      }}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
