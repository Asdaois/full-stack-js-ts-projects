import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/CollectionItem.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection flex flex-col">
      <h2 className="title text-[38px] mt-0 mx-auto mb-[30px]">{title}</h2>
      <div className="items grid grid-cols-4 gap-[10px]">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} addClass="mb-[30px]" />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, owsProps) => {
  return {
    collection: selectCollection(owsProps.match.params.collectionId)(state),
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);