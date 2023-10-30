import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helper/FormatPrice";

const Product = ({ id, name, price, image }) => {
  return (
    <NavLink to={`/singleProduct/${id}`}>
      <div className="card ">
        <figure className="relative overflow-hidden transition-all duration-500 after:hover:w-full after:w-0">
          <img
            className="max-w-full  mt-6 h-70 w-70 transition-transform duration-200 transform scale-100 hover:scale-125"
            src={image}
            alt={name}
          />
          <figcaption className="absolute top-15% right-10% text-uppercase bg-bg text-helper py-2 px-6 text-1.2rem rounded-2rem"></figcaption>
        </figure>
        <div className="card-data">
          <div className="card-data-flex flex gap-9">
            <h3 className="text-text capitalize">{name}</h3>
            <p className="text-helper">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
