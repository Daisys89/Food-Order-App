import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To Your Door</h2>
      <p>
        Choose a bowl from our broad selection of available bowls and enjoy a
        delicious lunch or dinner at home.
      </p>
      <p>
        Or pick and select your favorite ingredients and create your own special
        bowl.
      </p>
      <p>All ingredients are selected and prepared with care. </p>
    </section>
  );
};

export default MealsSummary;
