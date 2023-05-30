import { useState } from "react";
import Header from "./Components/Header";
import MealItems from "./Components/mealItemList";
import Cart from "./Components/Cart";
import CartProvider from './Components/cartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartDisplayer = () => {
    setCartIsShown(true);
  };

  const cartRemover = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart cartHandler={cartRemover} />}
      <Header cartHandler={cartDisplayer} />
      <MealItems />
    </CartProvider>
  );
}

export default App;
