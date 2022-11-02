import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import './thisDayFlight.scss';
import TodayFlight from './TodayFlight';

const ThisDayFlight = ({ allFlightList }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { flightId } = useParams();
  const day = searchParams.get('date');

  let whatToDo;
  if (flightId === 'departure' && allFlightList !== undefined) {
    whatToDo = allFlightList.departure
      .filter(el => new Date(el.timeDepShedule).getDate() === Number(day.split('-')[0]))
      .sort((a, b) => new Date(a.timeDepShedule).getTime() - new Date(b.timeDepShedule).getTime());
  } else if (flightId === 'arrival' && allFlightList !== undefined) {
    whatToDo = allFlightList.arrival
      .filter(el => new Date(el.timeLandFact).getDate() === Number(day.split('-')[0]))
      .sort((a, b) => new Date(a.timeLandFact).getTime() - new Date(b.timeLandFact).getTime());
  }

  return (
    <div className="table">
      <table className="table-flight">
        <thead className="table-flight__header">
          <tr>
            <th scope="col">Термінал</th>
            <th scope="col">Розклад</th>
            <th scope="col">Напрямок</th>
            <th scope="col">Статус</th>
            <th scope="col">Авіакомпанія</th>
            <th scope="col">Рейс</th>
            <th scope="col">Inshe</th>
          </tr>
        </thead>
        <tbody mode="out-in" className="table-flight__body">
          {allFlightList === undefined
            ? null
            : whatToDo.map(flight => (
                <TodayFlight key={flight.ID} flightInfo={flight} flightId={flightId} />
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default ThisDayFlight;
