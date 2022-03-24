import React from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct } from "./productData";
import { CgArrowLongLeft } from "react-icons/cg";

const ProductDetail = (props) => {
  let params = useParams();
  let product = getProduct(parseInt(params.id));
  const { addItem } = props;

  return (
    <>
      <div className="mt-4 ml-6">
        <Link to="/products" className="flex items-center text-lg">
          <CgArrowLongLeft className="text-2xl mr-1" />
          Back
        </Link>
      </div>
      <div className="flex flex-col-reverse sm:flex-row mt-12">
        <div className="ml-4 sm:w-2/4">
          <h1 className="font-semibold sm:text-3xl text-2xl mt-6 sm:mt-0">
            {product.title}
          </h1>
          <p className="sm:text-2xl text-xl font-bold my-4">${product.price}</p>

          <button
            className="bg-gray-800 text-gray-50 p-3 px-8 rounded-md mb-8"
            onClick={() => addItem(product)}
          >
            Add to cart
          </button>

          <p className="sm:w-3/4 mb-10">{product.text}</p>
        </div>
        <div className="sm:w-2/4">
          <img src={product.image} alt={product.title} />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
