import React from "react";
import { Link } from "react-router-dom";
import CheckoutInfo from "./CheckoutInfo";
import { CgArrowLongLeft } from "react-icons/cg";

const Cart = (props) => {
  const { cart, setCart, addItem } = props;

  const decreaseAmount = (product) => {
    const productExist = cart.find((item) => item.id === product.id);
    if (productExist.amount === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...productExist, amount: productExist.amount - 1 }
            : item
        )
      );
    }
  };

  const removeItem = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const totalPrice = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.amount * currentValue.price,
    0
  );
  return (
    <>
      {cart.length === 0 ? (
        <>
          <div className="text-center mt-20">
            <h1 className="text-2xl mb-4">Oh no! Your cart is empty</h1>
            <Link to="/products" className="text-lg font-semibold underline">
              Find products here
            </Link>
          </div>
        </>
      ) : (
        <>
          <div>
            <Link
              to="/products"
              className="flex items-center text-lg ml-4 mt-4"
            >
              <CgArrowLongLeft className="text-2xl mr-1" />
              Back to products
            </Link>
            <h1 className="text-center text-2xl font-semibold mt-12 mb-4">
              Your cart items
            </h1>
            <div className="md:w-9/12 w-11/12 m-auto">
              {cart.map((product) => {
                return (
                  <CheckoutInfo
                    key={product.id}
                    decreaseAmount={decreaseAmount}
                    removeItem={removeItem}
                    addItem={addItem}
                    product={product}
                  />
                );
              })}

              <div>
                <p
                  className="underline mt-2 hover:cursor-pointer"
                  onClick={() => setCart([])}
                >
                  Clear cart
                </p>
              </div>

              <div>
                <div className="flex-col mt-10 pb-10 items-center">
                  <div className="flex font-semibold text-xl mb-4">
                    <p className="mr-6">Total</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>

                  <Link to="/checkout">
                    <button className="bg-gray-800 text-white py-4 px-16 md:px-28 rounded-sm hover:bg-gray-900">
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
