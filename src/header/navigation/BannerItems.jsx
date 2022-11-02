import React from 'react';

const BannerItems = ({ about }) => {
  return (
    <ul className="menu-title__list">
      {about.map(num => (
        <li className="menu-title__list-item" key={`list-${num}`}>
          <span className="menu-title__list-item-line">{num}</span>
        </li>
      ))}
    </ul>
  );
};

export default BannerItems;
