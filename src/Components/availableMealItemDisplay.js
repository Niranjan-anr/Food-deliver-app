import Card from "./uI/card";
import MealItems from "./MealItems";

const availableaMealItems = () => {
  const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  const mealItems = DUMMY_MEALS.map((meal) => {
    return (
      <div key={meal.id}>
        <MealItems
          title={meal.name}
          description={meal.description}
          price={meal.price}
          id={meal.id}
        />
      </div>
    );
  });

  return (
    <Card>
      <ul>{mealItems}</ul>
    </Card>
  );
};

export default availableaMealItems;
