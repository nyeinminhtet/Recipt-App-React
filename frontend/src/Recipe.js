import React from "react";
import Style from "./recipe.module.css";

const Recipe = ({ title, calories, img, ingredients }) => {
  return (
    <div className={Style.recipe}>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
      <p>{calories}</p>
      <img className={Style.img} src={img} />
    </div>
  );
};

export default Recipe;
