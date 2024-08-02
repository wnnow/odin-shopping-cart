import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [itemInCart, setItemInCart] = useState(0);

  useEffect(() => {
    setItemInCart(cart.length);
  }, [cart]);
  return (
    <>
      <Header itemInCart={itemInCart} />
      <Outlet context={{ cart, setCart }} />
    </>
  );
}

export default App;
