import React from 'react';
import { connect } from 'react-redux';
import './basket.scss';

const Basket = ({ basketInfo }) => {
  console.log(basketInfo);
  return (
    <div className="pass-container">
      {basketInfo.seats.map(pass => (
        <div className="board">
          <div className="board-main">
            <div className="board-main-header">
              <span>Boarding Pass</span>
              <img
                className="logo_img-pass"
                srcSet="https://raw.githubusercontent.com/DrCharger/Kyiv-Airport-Project/master/src/img/logo%402x.webp"
                alt="Logo"
              />
            </div>
            <div className="board-main-info">
              <div className="board-info__QR">
                <img
                  src="https://png.pngtree.com/png-vector/20210331/ourmid/pngtree-rectangular-display-data-barcode-png-image_3176691.jpg"
                  alt="QR-code"
                />
              </div>
              <div className="board-info__passenger"></div>
            </div>
          </div>

          <div className="crack">
            <div className="crack-header">Econom Class</div>
            <div className="crack-info"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapState = state => {
  return {
    basketInfo: state.flights.flightPrice,
  };
};

export default connect(mapState)(Basket);
