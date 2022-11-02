import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment/moment';
import 'react-datepicker/dist/react-datepicker.css';
import { useSearchParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { findDate } from '../../flights/flights.actions';

const tomorrow = new Date(moment(new Date()).add(1, 'days').format());
const yesterday = new Date(moment(new Date()).subtract(1, 'days').format());
export const today = date => moment(date).format('DD-MM-YYYY');

const TabContent = ({ searchDate }) => {
  const [toggler, setToggler] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = date => {
    setSearchParams({ date: today(date) });
    searchDate(today(date));
  };

  return (
    <div className="tabs-content">
      <div className="result-container">
        <div className="calendar-date">
          <div className="calendar-date__input">
            <span className="calendar-date__input-value" onClick={() => setToggler(!toggler)}>
              {searchParams.get('date')}
            </span>
          </div>

          <div className="days">
            <div className="days-other" onClick={() => handleChange(yesterday)}>
              <div className="day-num">{today(yesterday)}</div>
              <div className="day-title">ВЧОРА</div>
            </div>

            <div className="days-today" onClick={() => handleChange(new Date())}>
              <div className="day-num">{today(new Date())}</div>
              <div className="day-title">СЬОГОДНІ</div>
            </div>

            <div className="days-other" onClick={() => handleChange(tomorrow)}>
              <div className="day-num">{today(tomorrow)}</div>
              <div className="day-title">ЗАВТРА</div>
            </div>
          </div>
        </div>
      </div>
      {toggler && (
        <DatePicker
          selected={new Date()}
          onChange={date => handleChange(date)}
          onSelect={() => setToggler(false)}
          inline
        />
      )}
    </div>
  );
};

const mapDispatch = {
  searchDate: findDate,
};

export default connect(null, mapDispatch)(TabContent);
