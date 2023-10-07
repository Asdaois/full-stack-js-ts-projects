import React from 'react';
import { useEffect } from 'react';

export default function ShopList({ getItems }) {
  useEffect(() => {}, []);

  return (
    <div>
      <h2>Hi im ShopList</h2>
      <ul>
        {getItems().map((item, index) => (
          <li key={index}>{`id: ${item.id} quantity: ${item.quantity}`}</li>
        ))}
      </ul>
    </div>
  );
}
