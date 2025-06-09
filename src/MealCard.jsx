import "./MealCard.css";

function MealCard({ mealData })
{
    return (
        <div className='meal-card'>
            <div className='left-col'>
                <img src={mealData.strMealThumb} alt="meal thumbnail image"/>
            </div>
            <div className='right-col'>
                <h2>{mealData.strMeal}</h2>
            </div>
        </div>
    );
}

export default MealCard;
