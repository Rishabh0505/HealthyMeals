import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Paneer Afghani",
    description: "Fresh tender paneer mixed with Creamy Tomato Gravy",
    price: 100.5,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 250,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 355.6,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy.",
    price: 199.9,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
