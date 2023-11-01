import React from "react";
import { useFilterContext } from "../contexts/FilterContext";
import GridView from "./GridView";

const ProductList = () => {
  const { filter_products,isLoading, grid_view } = useFilterContext();
  if (isLoading) {
    return <div>...LOADING</div>;
  }
  if (grid_view) {
    return <GridView products={filter_products} />;
  }
};

export default ProductList;
