import React from "react";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item w-full flex h-20 mb-[15px] ">
      <img src={imageUrl} alt="item" className="w-[30%]" />
      <div className="item-details w-[70%] flex flex-col items-start justify-center py-[10px] px-5">
        <div className="name text-base">{name}</div>
        <div className="price">
          {quantity}x ${price}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
