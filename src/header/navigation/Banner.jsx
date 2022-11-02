import React from 'react';
import './info.scss';
import BannerItems from './BannerItems';

const Banner = ({ bannerInfo }) => {
  return (
    <div className="submenu">
      <div className="container-info">
        <div className="container-info__banner">
          <div className="container-info__banner-place">
            <img className="container-info__banner-img" src={bannerInfo.img_url} alt="aero-wings" />
            <div className="container-info__banner-content">
              <span className="container-info__banner-content-title">{bannerInfo.title}</span>
              <span className="container-info__banner-content-desc">{bannerInfo.description}</span>
            </div>
            <button className="container-info__banner-content-btn">Купити квиток</button>
          </div>
        </div>
        <div className="container-info__all">
          {bannerInfo.about.map(elem => (
            <div className="menu-title" key={elem.id}>
              <div>{elem.title}</div>

              <BannerItems about={elem.list} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
