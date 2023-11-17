import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import image from "../../Assets/images/food.img";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton
          onclick={(cart) => {
            props.onclick(cart);
          }}
        />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
