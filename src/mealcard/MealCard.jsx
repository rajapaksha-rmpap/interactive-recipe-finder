import MealThumbnail from "./MealThumbnail";
import MealTitle from "./MealTitle";
import MealIngredients from "./MealIngredients";
import MealInstructions from "./MealInstructions";
import "./MealCard.css";

function MealCard({ mealData }) {
  let ingredientsArr = [];
  for (let i = 1; i <= 20; i++) {
    let ingredient = mealData[`strIngredient${i}`];
    let measure = mealData[`strMeasure${i}`];
    if (ingredient) {
      if (measure) ingredient = `${ingredient} (${measure})`;
      ingredientsArr.push(ingredient);
    }
  }

  return (
    <div className="meal-card">
      <MealThumbnail img={mealData.strMealThumb} name={mealData.strMeal} />
      <MealTitle
        name={mealData.strMeal}
        altName={mealData.strMealAlternate}
        area={mealData.strArea}
        category={mealData.strCategory}
        youtube={mealData.strYoutube}
        tags={mealData.strTags}
      />
      <MealIngredients ingredients={ingredientsArr} />
      <MealInstructions instructions={mealData.strInstructions} />
    </div>
  );
}

export default MealCard;
