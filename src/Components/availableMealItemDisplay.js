import Card from "./uI/card";
import MealItems from "./MealItems";
import { useEffect, useState } from "react";

const AvailableaMealItems = () => {
  const [meals,setMeals]=useState([]) 
  useEffect(()=>{
    const fetchMeals=async ()=>{
      const firstFetch=(await fetch('https://food-delivery-76dab-default-rtdb.firebaseio.com/meals.json'))
      const firstNavigateFetch= await firstFetch.json()
      let loadedINfo=[]
      for (const key in firstNavigateFetch){
        loadedINfo.push({
          id:key,
          name:firstNavigateFetch[key].name,
          description:firstNavigateFetch[key].description,
          price:firstNavigateFetch[key].price,
        })  
        setMeals(loadedINfo)  
      }
    }
    fetchMeals()
    
  },[])
  const mealItems = meals.map((meal) => {
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

export default AvailableaMealItems;
