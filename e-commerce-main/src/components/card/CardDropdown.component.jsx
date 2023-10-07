import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CartItem from "../ cart-item/CartItem.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CustomButton from "../custon-buttom/CustomButton.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
function CardDropdown({ cartItems = [], dispatch }) {
  const history = useHistory();

  return (
    <div className="cart-dropdown absolute w-60 h-[340px] flex flex-col p-5 border border-solid border-black top-[60px] right-[1px] z-[5] bg-white">
      <div className="cart-items h-60 flex flex-col overflow-auto">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message text-[18px] my-[50px] mx-auto">
            Your cart is empty
          </span>
        )}
      </div>
      <CustomButton
        addClass="mt-auto"
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CardDropdown);
