import React from "react";
import { useCartContext } from "./contexts/CartContext";
import CartItem from "./components/CartItem";

const Cart = () => {
  const { cart } = useCartContext();
  console.log(cart);
  return (
    <>
      <div className="container ">
        <div className="cartitems grid grid-cols-5 gap-4 items-center justify-center mt-10 place-items-center">
          <p className="col-span-1">item</p>
          <p className="col-span-1">prices</p>
          <p className="col-span-1">quantity</p>
          <p className="col-span-1">Subtotal</p>
          <p className="col-span-1">remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
