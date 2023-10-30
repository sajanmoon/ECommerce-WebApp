import React from "react";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <div className="container mx-8 mt-8 mb-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {products.map((curElem) => {
        return <Product key={curElem.id} {...curElem} />;
      })}
    </div>
  );
};

export default GridView;
