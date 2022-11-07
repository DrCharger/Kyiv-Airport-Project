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
              <div className="board-main-info__QR">
                <img
                  className="board-main-info-img"
                  src="https://raw.githubusercontent.com/DrCharger/Kyiv-Airport-Project/master/src/img/vivod-shtrih-koda-na-sayte-1.jpg"
                  alt="QR-code"
                />
              </div>
              <div className="board-main-info__passenger">
                <div className="board-main-info__passenger-all">
                  <div className="board-main-info__passenger-all__PIB">
                    <span>Name of Passenger</span>
                    <span>__________________</span>
                  </div>
                  <div className="board-main-info__passenger-all__flight">
                    <span className="board-main-info__passenger-all__flight__title">Flight</span>
                    <span className="board-main-info__passenger-all__flight__board">
                      {basketInfo.board}
                    </span>
                  </div>
                  <div className="board-main-info__passenger-all__date">
                    <span>DATE</span>
                    <span>{basketInfo.date}</span>
                  </div>
                  <div className="board-main-info__passenger-all__seat">
                    <span>Seat</span>
                    <span className="board-main-info__passenger-all__seat-pass">{pass}</span>
                  </div>
                </div>
                <div className="board-main-info__passenger-fromTo">
                  <div>
                    <div>{`FROM: KYIV`}</div>
                    <div>{`TO: ${basketInfo.trip}`}</div>
                  </div>
                </div>
                <div className="board-main-info__passenger-gate">{`Boarding time: _________`}</div>
              </div>
            </div>
          </div>

          <div className="crack">
            <div className="crack-header">Econom Class</div>
            <div className="crack-info">
              <div className="board-main-info__passenger-all__PIB">
                <span>Name of Passenger</span>
                <span>__________________</span>
              </div>
              <div className="crack-info-change">
                <div className="board-main-info__passenger-all__flight">
                  <span className="board-main-info__passenger-all__flight__title">Flight</span>
                  <span className="board-main-info__passenger-all__flight__board">
                    {basketInfo.board}
                  </span>
                </div>
                <div className="board-main-info__passenger-all__date">
                  <span>DATE</span>
                  <span>{basketInfo.date}</span>
                </div>
              </div>
              <div className="board-main-info__passenger-all__seat">
                <span>Seat</span>
                <span className="board-main-info__passenger-all__seat-pass">{pass}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="wholePrice">{`Потрібно оплатити: ${basketInfo.price} $`}</div>
      <button onClick={() => alert('Дякую, що обрали нашу авіакомпанію. Гарного дня')}>
        Оплатити
      </button>
    </div>
  );
};

const mapState = state => {
  return {
    basketInfo: state.flights.flightPrice,
  };
};

export default connect(mapState)(Basket);
