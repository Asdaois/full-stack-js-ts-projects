import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_m5VLopRLIAWHxNuhXWnEwMtv00xhsx9W2M";

  const onToken = token => {
    console.log(token); 
    alert("Payment Successful");
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing LTD."
      billingAddress
      shippingAddress
      image="https://www.svgshare.com/i/CUz.svg"
      description={`Your total is: $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}


export default StripeCheckoutButton;