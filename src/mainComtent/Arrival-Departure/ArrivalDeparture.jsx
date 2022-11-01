import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './arrivalDeparture.scss';
import TabContent from './TabConteny';
import ThisDayFlight from '../dayflights/ThisDayFlight';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { getFlightList } from '../../flights/flights.actions';

const ArrivalDeparture = ({ fetcher, list, dayToFind }) => {
  const [colorToggle, setColor] = useState(true);
  useEffect(() => fetcher(dayToFind), [dayToFind]);

  return (
    <div className="search-result">
      <div className="tabs">
        <div className="tablist">
          <div className="tablist-container">
            <button className={classNames('tablist-container-btn', { press: colorToggle })}>
              <Link to="/departure">
                <span
                  className={classNames('tablist-container-btn-text', { press: colorToggle })}
                  onClick={() => setColor(true)}
                >
                  Departure
                </span>
              </Link>
            </button>
            <button className={classNames('tablist-container-btn2', { press: !colorToggle })}>
              <Link to="/arrival">
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
        </div>{' '}
        <TabContent />
      </div>

      <Switch>
        <Route path="/:flightId">
          <ThisDayFlight allFlightList={list.body} day={dayToFind} />
        </Route>
        <Route path="/">
          <span>No Flights</span>
        </Route>
      </Switch>
    </div>
  );
};

const mapState = state => {
  return {
    list: state.flights.flightList,
    dayToFind: state.flights.dayIs,
  };
};

const mapDispatch = {
  fetcher: getFlightList,
};

export default connect(mapState, mapDispatch)(ArrivalDeparture);
