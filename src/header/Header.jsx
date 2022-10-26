import React, { useState } from 'react';
import { navList } from './navigation/navList';
import './header.scss';
import Info from './navigation/Info';
import { submenu } from './navigation/submenu';
import classNames from 'classnames';

const Header = () => {
  const [isOpen, setOpened] = useState(false);
  const [stateId, setId] = useState('');
  const [bannerData, setBanner] = useState({ id: '00' });

  const onOpen = navId => {
    if (stateId === navId) {
      setId('');
      return setOpened(false);
    }
    setId(navId);
    const newData = submenu.find(el => el.id === navId);
    setBanner(newData);
    setOpened(true);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img
            className="logo_img"
            srcSet="https://iev.aero/_nuxt/img/logo@2x.2d2c20b.png"
            alt="Logo"
          />
        </div>
        <div className="navbar">
          <ul className="navbar_nav">
            {navList.map(el => (
              <li
                className={classNames('navbar_nav_item', { 'navbar-click': el.id === stateId })}
                key={el.id}
                onClick={() => onOpen(el.id)}
              >
                <span className="navbar_nav_item-text">{el.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen && <Info bannerInfo={bannerData} />}
    </header>
  );
};
export default Header;
