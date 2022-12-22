import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Crispy Chickpea Bowl',
    description:
      'Rice, crispy chickpeas, spring onion, edamame, carrots, cucumber, tomatos, avocado, and sriracha-mayo',
    price: '8.99',
  },
  {
    id: 'm2',
    name: 'Spicy Tofu Bowl',
    description:
      'Spicy marinaded tofu, sushi-rice, red cabbage, avocado, peanuts, lime and soy-mayo ',
    price: '7.99',
  },
  {
    id: 'm3',
    name: 'Sweet Potato Bowl',
    description:
      'Rice, sweet potato, mango, corn, vegan salmon, fried unions, white sesam and wasabi-mayo',
    price: '9.99',
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;