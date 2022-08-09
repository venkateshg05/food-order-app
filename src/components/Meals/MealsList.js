import Card from "../UI/Card";
import DUMMY_MEALS from "./dummy-meals";
import MealItem from "./MealItem/MealItem";

import classes from "./MealsList.module.css";

const MealsList = (props) => {
  const meals = DUMMY_MEALS.map((meal) => (
    <MealItem id={meal.id} key={meal.id} meal={meal} />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default MealsList;
