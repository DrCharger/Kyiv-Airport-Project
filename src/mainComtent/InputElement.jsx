import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const InputElement = ({ searchedDate }) => {
  const [inputElem, setElement] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();

    const params = {};
    if (e.target.search.value.length) params.search = inputElem;
    params.date = searchedDate;
    setSearchParams(params);
  };

  return (
    <div className="input-content">
      <div className="input-content-justify">
        <div className="input-content-justify-flex">
          <h2 className="input-content__title">ПОШУК РЕЙСУ</h2>
          <div className="input-content__action">
            <i></i>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <input
                className="input-content__action-fly"
                type="search"
                name="search"
                placeholder="Номер рейсу або місто"
                value={inputElem}
                onChange={event => setElement(event.target.value)}
              />
              <input type="submit" value="ЗНАЙТИ" className="input-content__action-btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    searchedDate: state.flights.date,
  };
};

export default connect(mapState)(InputElement);
