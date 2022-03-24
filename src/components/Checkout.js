import React, { useState } from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import { CgArrowLongLeft } from "react-icons/cg";

const Checkout = (props) => {
  const { setCart } = props;
  const [purchase, setPurchase] = useState(false);

  const doPurchase = (event) => {
    event.preventDefault();
    setPurchase(true);
    setCart([]);
  };
  return (
    <>
      {purchase ? (
        <div className="text-center mt-10">
          <p className="text-3xl">Thank you for your purchase!</p>
          <p className="text-xl mb-8">
            Your products will be sent within 1-2 days
          </p>
          <Link to="/" className="text-lg font-semibold underline">
            Get back to homepage
          </Link>
        </div>
      ) : (
        <>
          <Link to="/cart" className="flex items-center text-lg ml-4 mt-4">
            <CgArrowLongLeft className="text-2xl mr-1" />
            Back to cart
          </Link>
          <div className="w-5/6 m-auto mt-8 md:w-2/5">
            <Form />
            <div className="no-flex md:flex">
              <div className="flex flex-col">
                <label>Expire date(mm/yy)</label>
                <input
                  type="text"
                  name="expire date"
                  id="expire date"
                  defaultValue="10/25"
                  className=" border-2 border-gray-400 rounded-sm py-2 pl-2 w-2/5"
                />
              </div>
              <div className="flex flex-col">
                <label>CVV</label>
                <input
                  type="text"
                  name="cvv"
                  id="cvv"
                  defaultValue="563"
                  className=" border-2 border-gray-400 rounded-sm py-2 pl-2 w-2/5"
                />
              </div>
            </div>
            <button
              className=" bg-gray-800 text-white py-4 px-16 mt-4 mb-8 md:px-28 rounded-sm hover:bg-gray-900"
              onClick={doPurchase}
            >
              Purchase
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Checkout;
