import React from "react";
import { Link } from "react-router-dom";
import roguePlates from "../ecommerce-images/rogue-weights.png";
import { FaTruck } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";

const Homepage = () => {
  let customerReview = [
    {
      id: 1,
      text: "Love the products and very satisfied with the fast shipping",
      name: "Dave C",
    },
    {
      id: 2,
      text: "Have bought alot of products from the company and they always exceed the expectations!",
      name: "Anette A",
    },
    {
      id: 3,
      text: "Gymcom is the only ecommerce I will buy my gym equipments from now on",
      name: "Robin R",
    },
  ];

  return (
    <>
      <div className="lg:flex lg:justify-between relative">
        <div className="text-3xl sm:text-4xl absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10 w-full h-full bg-opacity-50 bg-black text-gray-200 text-center lg:w-2/4 lg:text-center lg:mt-40 lg:transform-none lg:top-0 lg:left-0 lg:static lg:bg-transparent lg:text-black">
          <h1 className="mt-10">Best equiment</h1>
          <h1 className="font-semibold">For</h1>
          <h1>Best performance</h1>
          <div className="mt-4">
            <Link to="/products" className="text-2xl underline font-semibold">
              Shop now
            </Link>
          </div>
        </div>
        <div className="homepage-image">
          <img
            src={roguePlates}
            alt="weights"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center my-20 md:justify-around md:flex-row">
        <div className="md:w-1/4 w-2/4 m-auto text-center">
          <FaTruck className="m-auto text-4xl text-green-500" />
          <h2 className="font-bold mb-2 text-lg">Fast & Free shipping</h2>
          <p className="text-gray-400 font-medium">
            Every single order ships for free. No minimums, no tiers, no fine
            print.
          </p>
        </div>
        <div className="md:w-1/4 text-center w-2/4 m-auto mt-10 md:mt-0">
          <BsCheckLg className="m-auto text-4xl text-green-500" />
          <h2 className="font-bold mb-2 text-lg">Best product quality</h2>
          <p className="text-gray-400 font-medium">
            Every single product is quality tested for best sustainability.
            Always two years warranty.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 pb-20 pt-2">
        <div>
          <h1 className="text-3xl text-center mt-10 font-medium">
            Rating from our customers
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-around mt-6  ">
          {customerReview.map((review) => (
            <div
              key={review.id}
              className="w-2/3 m-auto p-6 mt-4 sm:w-1/4 sm:m-0 sm:mt-0 rounded-lg shadow-lg bg-white"
            >
              <p className="text-center">"{review.text}"</p>
              <p className="text-center mt-2 font-medium">{review.name}.</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
