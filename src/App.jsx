import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Header />
      <Outlet context={{ cart, setCart }} />
    </>
  );
}

export default App;
