import React from 'react';
import { useParams } from 'react-router-dom';
import PlaneContainer from './PlaneContainer';
import { useSearchParams } from 'react-router-dom';
import './takeYourPlace.scss';
import { connect } from 'react-redux';
import { dateSelector } from '../../flights/flights.selectors';
import { useEffect } from 'react';
import NoFlights from '../noFlights/NoFlights';
import { useState } from 'react';

const TakeYourPlace = ({ item, day }) => {
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
      city = flightInfo['airportFromID.name'];
    }

    if (thisBoard['carrierID.IATA'] === undefined) {
      flightNum = `${thisBoard['carrierID.code']}${thisBoard.fltNo}`;
    } else {
      flightNum = `${thisBoard['carrierID.IATA']}${thisBoard.fltNo}`;
    }
  }

  const handleClick = seats => {
    setSeats(seatsChosen.push[seats]);
  };

  useEffect(() => {
    setSearchParams({ date: day });
  }, []);

  return (
    <>
      <h3 className="plane-text">{`Місто подорожі : ${city}.  /n Рейс № ${flightNum} `}</h3>
      <PlaneContainer onClick={handleClick} />
    </>
  );
};

const mapState = state => {
  return {
    day: dateSelector(state),
  };
};

export default connect(mapState)(TakeYourPlace);
