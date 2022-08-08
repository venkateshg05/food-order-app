import DUMMY_MEALS from "./dummy-meals";

import classes from "./MealsList.module.css";

const MealsList = (props) => {
  const meals = DUMMY_MEALS.map((meal) => <li key={meal.id}>{meal.name}</li>);
  return (
    <section className={classes.meals}>
      <ul>{meals}</ul>
    </section>
  );
};

export default MealsList;
