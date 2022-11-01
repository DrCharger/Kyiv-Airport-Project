import React from 'react';
import moment from 'moment/moment';

const formatTime = time => moment(new Date(time)).format('HH:mm');

const TodayFlight = ({ flightInfo, flightId }) => {
  const { term, timeTakeofFact, timeDepShedule, airline, fltNo, timeLandFact, timeToStand } =
    flightInfo;
  let flightNum;
  if (flightInfo['carrierID.IATA'] === undefined) {
    flightNum = `${flightInfo['carrierID.code']}${fltNo}`;
  } else {
    flightNum = `${flightInfo['carrierID.IATA']}${fltNo}`;
  }
  let time;
  let city;
  let status;
  if (flightId === 'departure') {
    time = formatTime(timeDepShedule);
    city = flightInfo['airportToID.name'];
    status = `Вилетів о ${formatTime(timeTakeofFact)}`;
  } else {
    time = formatTime(timeToStand);
    city = flightInfo['airportFromID.name'];
    status = `Прибув о ${formatTime(timeLandFact)}`;
  }

  return (
    <tr className="table-flight__body-tr">
      <td className="table-flight__body-terminal">
        <span className="table-flight__body-terminal__text">{term}</span>
      </td>
      <td>{time}</td>
      <td>{city}</td>
      <td>{status}</td>
      <td className="table-flight__body-compName">
        <div className="table-flight__body-compName__container ">
          <img src={airline.ua.logoName} alt="logo" className="logo-img" />
        </div>
        <p>{airline.ua.name}</p>
      </td>
      <td className="table-flight__body-flight">{flightNum}</td>
      <td className="table-flight__body-details"></td>
    </tr>
  );
};
export default TodayFlight;
