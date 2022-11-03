import React, { useEffect } from 'react';
import { Route, Link, Routes, useSearchParams, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import ThisDayFlight from '../dayflights/ThisDayFlight';
import { getFlightList } from '../../flights/flights.actions';
import DateSelect from '../selectDateForSearch/DateSelect';
import { today } from '../../time.utilits/time.utilits';
import { dateSelector, listSelector } from '../../flights/flights.selectors';
import classNames from 'classnames';
import './arrivalDeparture.scss';

const ArrivalDeparture = ({ fetcher, list }) => {
  const [searchParams, setSearchParams] = useSearchParams({ date: today(new Date()) });
  const location = useLocation();
  let dayToFind = searchParams.get('date');
  const whatToSearch = searchParams.get('search');

  const searcherD = searchParams.has('search')
    ? `/departure?date=${dayToFind}&&search=${whatToSearch}`
    : `/departure?date=${dayToFind}`;
  const searcherA = searchParams.has('search')
    ? `/arrival?date=${dayToFind}&&search=${whatToSearch}`
    : `/arrival?date=${dayToFind}`;

  useEffect(() => fetcher(dayToFind), [searchParams]);

  return (
    <div className="search-result">
      <div>
        <div className="tablist">
          <div className="tablist-container">
            <button
              className={classNames('btn tablist-container-btn', {
                pressBtn: location.pathname === '/departure',
              })}
            >
              <Link to={searcherD}>
                <i
                  className={classNames('fa-solid fa-plane-departure plane-img', {
                    pressText: location.pathname === '/departure',
                  })}
                ></i>
                <span
                  className={classNames('tablist-container-btn-text', {
                    pressText: location.pathname === '/departure',
                  })}
                >
                  Виліт
                </span>
              </Link>
            </button>
            <button
              className={classNames('btn tablist-container-btn2', {
                pressBtn: location.pathname === '/arrival',
              })}
            >
              <Link to={searcherA}>
                <i
                  className={classNames('fa-solid fa-plane-arrival plane-img', {
                    pressText: location.pathname === '/arrival',
                  })}
                ></i>
                <span
                  className={classNames('tablist-container-btn-text', {
                    pressText: location.pathname === '/arrival',
                  })}
                >
                  Приліт
                </span>
              </Link>
            </button>
          </div>
        </div>
        <DateSelect />
      </div>

      <Routes>
        <Route
          path={`/:flightId`}
          element={<ThisDayFlight allFlightList={list.body} day={dayToFind} />}
        />
        <Route path="/" element={<div className="start__page">Виберіть відліт чи приліт</div>} />
      </Routes>
    </div>
  );
};

const mapState = state => {
  return {
    list: listSelector(state),
    searchedDate: dateSelector(state),
  };
};

const mapDispatch = {
  fetcher: getFlightList,
};

export default connect(mapState, mapDispatch)(ArrivalDeparture);
