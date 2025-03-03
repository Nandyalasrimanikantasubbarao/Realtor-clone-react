import { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";
function Meals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => setMeals(res.data.meals));
  }, []);

  return (
    <div className="items-container">
      {meals.map((meals) => (
        <div key={meals.idMeal} className="card">
          <img src={meals.strMealThumb} alt={meals.strMeal} />
          <section className="content">
            <p>{meals.strMeal}</p>
            <p>{meals.strMeal}</p>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Meals;
