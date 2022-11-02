import React, { useState } from 'react';
import { navList } from '../data/navList';
import './header.scss';
import Banner from './navigation/Banner';
import { submenu } from '../data/submenu';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpened, setOpened] = useState(false);
  const [stateId, setId] = useState('');
  const [bannerData, setBannerData] = useState();

  const onOpen = navId => {
    if (navId === '06') {
      return alert('Не можливо змінити мову');
    }
    if (stateId === navId) {
      setId('');
      return setOpened(false);
    }
    setId(navId);
    const newBannerData = submenu.find(el => Number(el.id) - 6 === Number(navId));
    setBannerData(newBannerData);
    setOpened(true);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img
              className="logo_img"
              srcSet="https://iev.aero/_nuxt/img/logo@2x.2d2c20b.png"
              alt="Logo"
            />
          </Link>
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
      {isOpened && <Banner bannerInfo={bannerData} />}
    </header>
  );
};
export default Header;
