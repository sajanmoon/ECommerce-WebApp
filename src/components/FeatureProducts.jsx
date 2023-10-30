import React from "react";
import { useProductContext } from "../contexts/ProductContext";
import Product from "./Product";

const FeatureProducts = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div className="loading text-center">...Loading</div>;
  }

  return (
    <div className="container">
      <h1 className="text-center text-6xl underline pb-9">Feature Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-9 ">
        {featureProducts.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default FeatureProducts;
