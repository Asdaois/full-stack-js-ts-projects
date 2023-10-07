import React from "react";
import CollectionItem from "../collection-item/CollectionItem.component";
import PropTypes from "prop-types";

export default function CollectionPreview({ title = "", items = [] }) {
  return (
    <div className="flex flex-col collection-preview mb-7">
      <h1 className="mb-6 text-3xl title">{title.toUpperCase()}</h1>
      <div className="flex justify-between preview gap-[2px]">
        {items
          .filter((v, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} addClass={"w-1/5"}/>
          ))}
      </div>
    </div>
  );
}

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};
