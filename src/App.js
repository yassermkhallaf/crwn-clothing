import "./App.css";
import React from "react";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";

import HomePage from "./pages/homepage/homepage.component";
const HatPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(`/`)}></button>
      <h1> HatPage</h1>
      <h1> Yasser</h1>
    </div>
  );
};
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
