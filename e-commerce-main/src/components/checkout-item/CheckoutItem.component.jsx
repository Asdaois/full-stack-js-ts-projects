import React from "react";
import { connect } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item w-full min-h-[100px] flex border-b border-subColor-700 border-solid py-[15px] px-0 text-[20px] items-center">
      <div className="image-container w-[23%] pr-[15px]">
        <img src={imageUrl} alt="item" className="w-full h-full" />
      </div>
      <span className="name w-[23%]">{name}</span>
      <span className="quantity w-[23%] flex">
        <div
          className="arrow cursor-pointer"
          onClick={() => removeItem(cartItem)}
        >
          &#10094;
        </div>
        <span className="value mx-[10px] my-0">{quantity}</span>
        <div className="arrow cursor-pointer" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="name w-[23%]">${price}</span>
      <div
        className="remove-button pl-[12px] cursor-pointer"
        onClick={() => {
          clearItem(cartItem);
        }}
      >
        &#10007;
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
