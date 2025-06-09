import "./App.css";
import MealCard from "./MealCard.jsx";
import data from "./assets/db.json";

function App()
{
    return (
        <MealCard mealData={data.meals[0]}/>
    );
}

export default App;