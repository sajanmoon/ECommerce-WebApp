import React from "react";
import FormatPrice from "../Helper/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../contexts/CartContext";

const CartItem = ({ id, name, image, amount, price }) => {
  const { removeItem } = useCartContext();
  const setDecrease = () => {
    // amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    // amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <div className="cartitems grid grid-cols-5 gap-4 items-center justify-center mt-10 place-items-center">
      <div className="cart-image flex gap-1  ">
        <figure>
          <img className=" h-9" src={image} alt={name} />
        </figure>
        <div>{name}</div>
      </div>
      <div className="price">{<FormatPrice price={price} />}</div>
      <div className="quantity">
        <CartAmountToggle
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
      </div>
      <div className="subtotal">{<FormatPrice price={price * amount} />}</div>
      <div className="remove">
        <FaTrash onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
