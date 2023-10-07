import Item from 'components/Item';
import { useEffect } from 'react';
import React, { useParams, useRouteMatch } from 'react-router-dom';

export default function ItemContainer(props) {
  const { type } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {}, []);

  return (
    <div>
      {props.items.map((item) => {
        if (type === 'all' || item.type === type) {
          return <Item itemInfo={item} handleClick={props.insertInList} />;
        }
        return null;
      })}
    </div>
  );
}
