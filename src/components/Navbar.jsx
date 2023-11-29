import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="ml-6">
      <ul className="flex items-center justify-end text-xl space-x-8 pr-5 mr-9">
        <li>
          <NavLink to="/products">PRODUCTS</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="flex">
            <FiShoppingCart className="text-4xl" />
            <span className="absolute bg-[#fff] text-black text-[18px] rounded-full grid place-items-center mx-7 -my-1">
            
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
