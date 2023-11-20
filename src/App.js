import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Cart from './components/Cart/Cart';
import MainMeal from "./components/Meals/MainMeal";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartOpen, setCartOpen] = useState("");

  const cartButtonHandler = (cart) => {
    setCartOpen(cart);
  };

  const cancelHandler = (val) => {
    setCartOpen(val);
  };

  return (
    <CartProvider>
      <Header onclick={cartButtonHandler} />
      <main>
        <MainMeal />
      </main>
      {cartOpen && <Cart oncancel={cancelHandler} />}
    </CartProvider>
  );
}

export default App;
