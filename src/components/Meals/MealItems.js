import React, { useContext, useState } from "react";
import CartContext from "../../Store/Cart-Context";
import classes from "./MealItems.module.css";
import Form from "../UI/Form/Form";

const MealItems = (props) => {
  const ctx = useContext(CartContext);

  const [count, setCount] = useState(0);

  const addItemHandler = (event) => {
    event.preventDefault();
    setCount(count + 1);
    ctx.updateItem({ ...props.item });
    //ctx.addItem({...props.item,quantity:count})
  };

  return (
    <div className={classes.meal}>
      <li>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.details}</div>
          <div className={classes.price}>{props.price}</div>
        </div>
      </li>
      <div>
        <Form count={count} id={props.id} label="Amount" />
        <button className={classes.button} onClick={addItemHandler}>
          + Add
        </button>
      </div>
    </div>
  );
};
export default MealItems;
