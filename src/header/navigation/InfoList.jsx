import React from 'react';

const InfoList = ({ about }) => {
  return (
    <ul className="menu-title__list">
      {about.map(num => (
        <li className="menu-title__list-item">
          <span className="menu-title__list-item-line">{num}</span>
        </li>
      ))}
    </ul>
  );
};

export default InfoList;
