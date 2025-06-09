// according to MealDB API, a receipe can have a maximum of 20 ingredients.

function MealIngredients({ ingredients }) {
  return (
    <ul className="meal-ingredients">
      {ingredients.map((ingredient, i) => (
        <li key={i}>{ingredient}</li>
      ))}
    </ul>
  );
}

export default MealIngredients;
