import React from 'react';

import './item-list.css'

const ItemList = ({ data, children: renderLabel }) => {
  const items = data.map((item) => {
    const label = renderLabel(item)
    return (
      <li className='col-6 col-md-4' key={item.id}>
        {label}
      </li>
    );
  });

  return (
    <div className="container">
      <ul className='item-list'>
        {items}
      </ul>
    </div>
  );
};

export default ItemList;