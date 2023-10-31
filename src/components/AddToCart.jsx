import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CartAmountToggle from "./CartAmountToggle";

const AddToCart = ({ product }) => {
  const { id, stock } = product;

  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <>
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <div>
        <NavLink to="/cart">
          <button className="bg-blue-400 rounded mt-2 text-sm">
            <h1 className=" m-3"> ADD TO CART </h1>
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default AddToCart;
