import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PlaneContainer from './PlaneContainer';
import { dateSelector } from '../../flights/flights.selectors';
import NoFlights from '../noFlights/NoFlights';
import { priceList } from '../../data/price';
import { getFlightPrice } from '../../flights/flights.actions';
import './buyingBin.scss';
import './takeYourPlace.scss';

const TakeYourPlace = ({ item, day, getObjPrice }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [seatsChosen, setSeats] = useState([]);

  const flightID = useParams();
  let thisBoard;
  let city;
  let flightNum;

  if (item !== undefined && item.departure.length !== 0 && item.arrival.length !== 0) {
    if (flightID.flightId === 'departure') {
      thisBoard = item.departure.find(elem => elem.ID === Number(flightID.seatsId));
      if (thisBoard === undefined) {
        return <NoFlights />;
      }
      city = thisBoard['airportToID.name'];
    } else if (flightID.flightId === 'arrival') {
      thisBoard = item.arrival.find(elem => elem.ID === Number(flightID.seatsId));
      city = thisBoard['airportFromID.name'];
    }

    if (thisBoard['carrierID.IATA'] === undefined) {
      flightNum = `${thisBoard['carrierID.code']}${thisBoard.fltNo}`;
    } else {
      flightNum = `${thisBoard['carrierID.IATA']}${thisBoard.fltNo}`;
    }
  }

  const handleClick = seats => {
    seatsChosen.includes(seats)
      ? setSeats(seatsChosen.filter(el => el !== seats))
      : setSeats(seatsChosen.concat(seats));
  };

  useEffect(() => {
    setSearchParams({ date: day });
  }, []);

  const onBuy = () => {
    const newObj = {
      trip: city,
      board: flightNum,
      seats: seatsChosen,
      price: flightPrice,
      date: searchParams.get('date'),
    };
    getObjPrice(newObj);
    setSeats([]);
  };

  const flightPrice = seatsChosen
    .map(seat => priceList.find(el => el.row.includes(Number(seat.split(' ')[0]))).price)
    .reduce((acc, el) => acc + Number(el.split(' ')[1]), 0);

  return (
    <>
      <h3 className="plane-text">{`Місто подорожі : ${city}.  /n Рейс № ${flightNum} `}</h3>
      {seatsChosen.length !== 0 && (
        <div className="buying-bin">
          {seatsChosen.map(seat => (
            <span key={`ticket-${seat}`} className="buying-bin-text">{`Ваше місце:${seat}  Ціна: ${
              priceList.find(el => el.row.includes(Number(seat.split(' ')[0]))).price
            }`}</span>
          ))}
          <Link to="/buyTickets">
            <button className="buying-bin-btn" onClick={onBuy}>
              Купити квитки
            </button>
          </Link>
        </div>
      )}
      <PlaneContainer onClick={handleClick} seatsChosen={seatsChosen} />
    </>
  );
};

const mapState = state => {
  return {
    day: dateSelector(state),
  };
};

const mapDispatch = {
  getObjPrice: getFlightPrice,
};

export default connect(mapState, mapDispatch)(TakeYourPlace);
