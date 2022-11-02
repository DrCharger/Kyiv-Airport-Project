import React from 'react';
import { Route, Link, Routes, useSearchParams } from 'react-router-dom';
import './arrivalDeparture.scss';
import TabContent, { today } from './TabConteny';
import ThisDayFlight from '../dayflights/ThisDayFlight';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { getFlightList } from '../../flights/flights.actions';

const ArrivalDeparture = ({ fetcher, list }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [colorToggle, setColor] = useState(true);
  let dayToFind = searchParams.get('date');
  if (searchParams.get('date') === null) {
    dayToFind = today(new Date());
  }
  const whatToSearch = searchParams.get('search');
  useEffect(() => fetcher(dayToFind), [searchParams]);

  return (
    <div className="search-result">
      <div className="tabs">
        <div className="tablist">
          <div className="tablist-container">
            <button className={classNames('tablist-container-btn', { press: colorToggle })}>
              <Link
                to={
                  searchParams.has('search')
                    ? `/departure?date=${dayToFind}&&search=${whatToSearch}`
                    : `/departure?date=${dayToFind}`
                }
              >
                <span
                  className={classNames('tablist-container-btn-text', { press: colorToggle })}
                  onClick={() => setColor(true)}
                >
                  Departure
                </span>
              </Link>
            </button>
            <button className={classNames('tablist-container-btn2', { press: !colorToggle })}>
              <Link
                to={
                  searchParams.has('search')
                    ? `/arrival?date=${dayToFind}&&search=${whatToSearch}`
                    : `/arrival?date=${dayToFind}`
                }
              >
                {' '}
                <span
                  className={classNames('tablist-container-btn-text', { press: !colorToggle })}
                  onClick={() => setColor(false)}
                >
                  Arrivals
                </span>
              </Link>
            </button>
          </div>
        </div>
        <TabContent />
      </div>

      <Routes>
        <Route
          path={`/:flightId`}
          element={<ThisDayFlight allFlightList={list.body} day={dayToFind} />}
        />
        <Route path="/" element={<span>No Flights</span>} />
      </Routes>
    </div>
  );
};

const mapState = state => {
  return {
    list: state.flights.flightList,
  };
};

const mapDispatch = {
  fetcher: getFlightList,
};

export default connect(mapState, mapDispatch)(ArrivalDeparture);
