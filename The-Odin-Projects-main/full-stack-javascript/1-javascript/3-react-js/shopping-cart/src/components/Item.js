import React, { useEffect, useState } from 'react';

export default function Item({ itemInfo, handleClick }) {
  const [info, setInfo] = useState(itemInfo);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => setInfo(itemInfo), [itemInfo]);

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div key={info.id}>
      <h4>{info.name}</h4>
      <img src={info.images.icon} alt={info.name} />
      <p>{info.description}</p>
      <label htmlFor="quantity">
        <input type="number" name="quantity" onChange={handleChange} />
      </label>
      <button
        onClick={() => {
          handleClick(itemInfo.id, quantity);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
