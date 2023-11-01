import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./contexts/ProductContext";
import PageNavigation from "./components/PageNavigation";
import FormatPrice from "./Helper/FormatPrice";
import AddToCart from "./components/AddToCart";

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
    image,
  } = singleProduct;
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isLoading) {
    return <div className=" text-center text-3xl">...LOADING</div>;
  }
  return (
    <div>
      <PageNavigation title={name} />
      <div className="container flex items-center justify-center gap-5 m-9 ">
        <div className="img ">
          {image && image.length > 0 && <img src={image[0].url} alt={name} />}
        </div>
        <div className="productdetails pr-7">
          <h1>{name}</h1>
          <h1>Brand-{company}</h1>
          <h1>MRP:{<FormatPrice price={price} />}</h1>
          <p className=" ">description:{description}</p>
          {/* <h1>category:{category}</h1> */}
          <h1>Available:{stock > 0 ? "IN STOCK" : "NOT AVAILABLE"}</h1>
          <hr className="mb-4" />
          <h1>{stock > 0 && <AddToCart product={singleProduct} />}</h1>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
