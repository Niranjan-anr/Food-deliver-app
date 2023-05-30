import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {}, // Make sure you have defined the addItem function
  removeItem: (id) => {}
});

export default CartContext;
