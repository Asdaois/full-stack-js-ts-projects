import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

function CardIcon({ toggleCartHidden, itemCount }) {
  return (
    <div className={`${card_icon}`} onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon w-6 h-6" />
      <span className="item-count absolute text-[10px] font-bold bottom-[2px] select-none">
        {itemCount}
      </span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);

const card_icon =
  "w-[25px] h-[25px] relative flex items-center justify-center cursor-pointer";
