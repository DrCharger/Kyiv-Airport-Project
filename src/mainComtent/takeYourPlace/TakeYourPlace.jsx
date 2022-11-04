import React from 'react';
import { useParams } from 'react-router-dom';
import './takeYourPlace.scss';

const TakeYourPlace = ({ item }) => {
  const flightID = useParams();
  let thisBoard;
  let city;
  let flightNum;

  if (flightID.flightId === 'departure') {
    thisBoard = item.departure.find(elem => elem.ID === Number(flightID.seatsId));
    city = thisBoard['airportToID.name'];
  } else {
    thisBoard = item.arrival.find(elem => elem.ID === Number(flightID.seatsId));
    city = flightInfo['airportFromID.name'];
  }

  console.log(thisBoard);
  if (thisBoard['carrierID.IATA'] === undefined) {
    flightNum = `${thisBoard['carrierID.code']}${thisBoard.fltNo}`;
  } else {
    flightNum = `${thisBoard['carrierID.IATA']}${thisBoard.fltNo}`;
  }

  const newSector = [1, 2, 3];
  const newRow = [7, 6, 5, 4, 3, 2, 1];
  const newSeatLeft = ['A', 'B', 'C'];
  const newSeatRight = ['D', 'E', 'F'];

  return (
    <>
      <h3 className="plane-text">{`Місто подорожі : ${city}.  /n Рейс № ${flightNum} `}</h3>
      <div className="plane-container">
        <div className="plane-container-full">
          <div className="window1"></div>
          <div className="window2"></div>
          <div className="window3"></div>
          <div className="window4"></div>
          <div className="plane-board">
            <div className="plane-board-cont">
              {newSector.map(() => (
                <div className="sector">
                  {newRow.map(() => (
                    <div className="sector-row">
                      {newSeatLeft.map(seat => (
                        <div className="sector-row-seat">{seat}</div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="plane-board-cont">
              {newSector.map(() => (
                <div className="sector">
                  {newRow.map(() => (
                    <div className="sector-row">
                      {newSeatRight.map(el => (
                        <div className="sector-row-seat">{el}</div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="plane-cabin"></div>
          <div className="plane-board-wing-back"></div>
          <div className="plane-board-wing-left"></div>
          <div className="plane-board-wing-right"></div>
          <div className="plane-board-wing-left-back"></div>
          <div className="plane-board-wing-right-back"></div>
          <div className="turbina-left"></div>
          <div className="turbina-right"></div>
        </div>
      </div>
    </>
  );
};

export default TakeYourPlace;
