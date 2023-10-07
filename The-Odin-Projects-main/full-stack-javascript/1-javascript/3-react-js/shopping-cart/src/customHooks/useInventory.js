import { useState } from 'react';

export default function useInventory() {
  const [items, setItems] = useState({});

  const insertInList = (id, quantity) => {
    const tempList = { ...items };

    quantity = parseInt(quantity);

    if (tempList[id] === undefined) {
      tempList[id] = quantity;
    } else {
      tempList[id] += quantity;
    }

    setItems(tempList);
  };

  const getItems = () => {
    const listItems = [];
    for (const item in items) {
      listItems.push({ id: item, quantity: items[item] });
    }
    return listItems;
  };
  return {
    set: {
      insertInList,
    },
    get: {
      getItems,
    },
  };
}
