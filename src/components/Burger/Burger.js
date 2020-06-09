import React from "react";
import classes from "./Burger.module.css";
import Burgeringredient from "./Burgeringerdient/Burgeringredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igkey) => {
      return [...Array(props.ingredients[igkey])].map((_, i) => {
        return <Burgeringredient key={igkey + i} type={igkey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    });
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingeredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <Burgeringredient type="bread-top" />
      {transformedIngredients}
      <Burgeringredient type="bread-bottom" />
    </div>
  );
};

export default burger;
