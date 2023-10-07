import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useRouteMatch,
  Redirect,
} from 'react-router-dom';

import ItemContainer from 'components/ItemContainer';

export default function Shop({ insertInList }) {
  const [shopItems, setShopItems] = useState([]);
  const [itemTypes, setItemType] = useState([]);
  const { path, url } = useRouteMatch();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const apiKey = '7fee84f9-43ec0feb-bdf3550a-862e6035';
    const baseUrl = 'https://fortniteapi.io/v1/items/upcoming?lang=en';
    const data = await fetch(`${baseUrl}`, {
      headers: {
        authorization: apiKey,
      },
    });

    const items = await data.json();
    const types = new Set(items.items.map((item) => item.type));

    setShopItems(items.items);
    setItemType(['all', ...types]);
  };

  return (
    <Router>
      <h2>Shop</h2>

      <ul>
        {itemTypes.map((type, index) => (
          <li key={index}>
            <Link to={`${url}/${type}`}>{type}</Link>
          </li>
        ))}
      </ul>

      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/all`} />
        </Route>
        <Route path={`${path}/:type`}>
          <ItemContainer items={shopItems} insertInList={insertInList} />
        </Route>
      </Switch>
    </Router>
  );
}
