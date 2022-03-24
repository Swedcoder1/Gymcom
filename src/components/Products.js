import React, { useState } from "react";
import { productData } from "./productData";
import { Link, Outlet } from "react-router-dom";

const Products = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState(productData);
  const { addItem } = props;

  return (
    <>
      <div className="flex justify-center mt-10">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for item..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="outline outline-gray-500 rounded-lg py-2 w-3/4 lg:w-2/4 pl-2"
        />
      </div>

      <div className="flex flex-col sm:flex-row mt-10 mb-6 md:flex-wrap">
        {/* Filter item by search */}
        {data
          .filter((product) => {
            if (searchValue == null) {
              return product;
            } else if (
              product.title.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return product;
            }
          })
          .map((product) => (
            <div
              key={product.id}
              className="lg:w-1/4 sm:w-2/5 w-2/3 sm:min-w-[40%] md:min-w-[26%] m-auto text-center bg-gray-200 rounded-xl md:px-2 py-2 mt-6 drop-shadow-md"
            >
              <Link to={`/products/${product.id}`}>
                <h1 className="font-medium text-xl mb-2">{product.title}</h1>

                <img src={product.image} alt={product.title} />
              </Link>
              <p className="font-medium text-lg">${product.price}</p>

              <div className="flex justify-around my-3">
                <button
                  className="bg-gray-800 text-gray-50 p-3 rounded-md hover:bg-gray-900"
                  onClick={() => addItem(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
      </div>
      <Outlet />
    </>
  );
};

export default Products;
