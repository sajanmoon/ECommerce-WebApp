import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./contexts/ProductContext";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isLoading, singleProduct } = useProductContext();
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
  } = singleProduct;
  console.log(singleProduct);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  return (
    <div>
      <h1>SingleProduct {name}</h1>
    </div>
  );
};

export default SingleProduct;
