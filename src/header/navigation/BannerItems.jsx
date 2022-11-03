import React from 'react';
import PropTypes from 'prop-types';

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

BannerItems.propTypes = {
  about: PropTypes.shape().isRequired,
};

export default BannerItems;
