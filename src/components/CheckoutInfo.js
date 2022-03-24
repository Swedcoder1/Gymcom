import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

const CheckoutInfo = (props) => {
  const { product, decreaseAmount, removeItem, addItem } = props;

  return (
    <>
      <div
        key={product.id}
        className="bg-gray-100 flex pt-6 pb-6 md:pb-4 px-4 mt-4 rounded-md shadow-md items-center"
      >
        <div className="w-1/3 h-auto">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="flex flex-col justify-between w-full">
          <div className="flex justify-between">
            <p className="text-xl font-semibold ml-2 sm:ml-0 sm:text-2xl">
              {product.title}
            </p>
            <FaRegTrashAlt
              className="text-red-600 text-xl hover:cursor-pointer"
              onClick={() => removeItem(product)}
            />
          </div>

          <div className="flex justify-end items-center mt-10 lg:mt-14">
            <div className="flex border-2 border-solid border-gray-500 rounded-sm py-2 px-3 items-center bg-white">
              <AiOutlineMinus
                onClick={() => decreaseAmount(product)}
                className="hover:cursor-pointer"
              />

              <p className="px-4 text-lg">{product.amount}</p>
              <AiOutlinePlus
                onClick={() => addItem(product)}
                className="hover:cursor-pointer"
              />
            </div>

            <div className="ml-16">
              <p className="font-semibold text-lg">${product.price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutInfo;
