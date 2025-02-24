import React from "react";

const Cart = () => {
  return (
    <div className="fixed z-50 p-4 bg-white mt-4 w-[18rem]  top-20 right-9 sm:right-20  rounded-md">
      <div className="w-full flex justify-between items-center mb-4">
        <h4 className="font-bold">Cart(0)</h4>
        <button className="underline text-[#d87d4a]">Remove all</button>
      </div>
      <p className="text-center mb-4">Your cart is empty</p>
      <div className="w-full flex justify-between items-center mb-4">
        <h4>Total</h4>
        <p className="font-bold">$ 0</p>
      </div>
      <button className="p-[10px] bg-[#d87d4a] w-full rounded-sm">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
