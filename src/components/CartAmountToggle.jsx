import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
    
  return (
    <div className="cartbutton">
      <div className="amountToggle flex gap-8">
        <button onClick={() => setDecrease()}>
            <FaMinus/>
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
            <FaPlus/>
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
