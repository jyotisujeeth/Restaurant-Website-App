import React from "react";
import Meals from "./Meals";
import Summary from "./Summary";

const MainMeal = () => {
  return (
    <React.Fragment>
      <Summary />
      <Meals />
    </React.Fragment>
  );
};

export default MainMeal;
