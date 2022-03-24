import React, { useState } from "react";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const App = () => {
  const [cart, setCart] = useState([]);

  const addItem = (product) => {
    const productExist = cart.find((item) => item.id === product.id);
    if (productExist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...productExist, amount: productExist.amount + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };

  const totalAmount = cart.reduce((sum, product) => sum + product.amount, 0);

  return (
    <>
      <BrowserRouter>
        <Navbar totalAmount={totalAmount} />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route
            exact
            path="/products"
            element={<Products addItem={addItem} />}
          />
          <Route
            exact
            path="/products/:id"
            element={<ProductDetail addItem={addItem} />}
          />
          <Route
            exact
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                addItem={addItem}
                totalAmount={totalAmount}
              />
            }
          />
          <Route path="/checkout" element={<Checkout setCart={setCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
