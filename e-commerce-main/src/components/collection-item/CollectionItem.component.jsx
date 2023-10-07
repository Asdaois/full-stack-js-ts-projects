import React from "react";
import CustomButton from "../custon-buttom/CustomButton.component";
import { connect } from "react-redux";
import "./collection-item.css";
import { addItem } from "../../redux/cart/cart.actions";

function CollectionItem({ item, addItem, addClass }) {
  const { name, price, imageUrl } = item;
  return (
    <div
      className={`${addClass} relative flex flex-col items-center collection-item h-22 group gap-1`}
    >
      <div
        className="w-full mb-1 bg-center bg-cover image h-95/100 group-hover:opacity-80"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-footer ">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        inverted
        addClass="w-[80%] opacity-70 absolute top-[255px] hidden group-hover:flex group-hover:opacity-[0.85]"
        onClick={() => addItem(item)}
      >
        Add to Cart
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);