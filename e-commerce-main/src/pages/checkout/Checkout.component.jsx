import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/CheckoutItem.component";
import StripeCheckoutButton from "../../components/stripe-button/StripeButton.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import HeaderBlock from "./HeaderBlock.component";
import "./checkout.style.css"

const Checkout = ({ cartItems = [], total }) => {
  return (
    <div className="checkout-page w-[55%] min-h-[90vh] flex flex-col items-center mt-[50px] mx-auto mb-0">
      <div className="checkout-header w-full h-10 flex justify-between border-b border-solid border-b-gray-700">
        <HeaderBlock name="Product" />
        <HeaderBlock name="Description" />
        <HeaderBlock name="Quantity" />
        <HeaderBlock name="Price" />
        <HeaderBlock name="Remove" />
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <div className="total mt-[30px] ml-auto text-3xl">
        <span className="">TOTAL ${total}</span>
      </div>
      <div className="text-center mt-10 text-2xl text-red-600">
        *Please use the following test credit card form payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
