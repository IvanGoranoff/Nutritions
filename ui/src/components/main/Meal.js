import React from "react";

export default function Meal({ meal }) {
  return (
    <article>
      <h1>{meal.title}</h1>
      {meal.imageUrl ? <img src={meal.imageUrl} alt={meal.title} /> : <p>Image not available</p>}
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>
      <a href={meal.sourceUrl} rel="noreferrer" target="_blank">Go to Recipe</a>
    </article>
  );
}
