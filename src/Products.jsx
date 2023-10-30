import React from "react";
import ProductList from "./components/ProductList";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
// import { useFilterContext } from "./contexts/FilterContext";

const Products = () => {
  // const { filter_products } = useFilterContext();
  return (
    <div className="container ">
      <div className="left">
        <FilterSection />
      </div>
      <div className="right">
        <div className="sort">
          <Sort />
        </div>
        <div className="product">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Products;
