import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment/moment';
import { connect } from 'react-redux';

import 'react-datepicker/dist/react-datepicker.css';
import { findWhatDay } from '../../flights/flights.actions';

const tomorrow = new Date(moment(new Date()).add(1, 'days').format());
const yesterday = new Date(moment(new Date()).subtract(1, 'days').format());
const today = date => moment(date).format('DD-MM-YYYY');

const TabContent = ({ dayIs }) => {
  let startDate = new Date();
  const [toggler, setToggler] = useState(false);

  const onClick = () => {
    setToggler(!toggler);
  };
  const onClose = date => {
    const serchedDay = today(date);
    dayIs(serchedDay);
    setToggler(!toggler);
  };
  const onOpen = date => {
    const serchedDay = today(date);
    dayIs(serchedDay);
  };

  return (
    <div className="tabs-content">
      <div className="result-container">
        <div className="calendar-date">
          <div className="calendar-date__input">
            <span className="calendar-date__input-value" onClick={onClick}>
              {`${startDate.getDate()}/${startDate.getMonth() + 1}`}
            </span>
          </div>
          <div className="days">
            <div className="days-other" onClick={() => onOpen(yesterday)}>
              <div className="day-num">{`${new Date().getDate() - 1}/${
                new Date().getMonth() + 1
              }`}</div>
              <div className="day-title">ВЧОРА</div>
            </div>
            <div className="days-today" onClick={() => onOpen(new Date())}>
              <div className="day-num">{`${new Date().getDate()}/${
                new Date().getMonth() + 1
              }`}</div>
              <div className="day-title">СЬОГОДНІ</div>
            </div>
            <div className="days-other" onClick={() => onOpen(tomorrow)}>
              <div className="day-num">{`${new Date().getDate() + 1}/${
                new Date().getMonth() + 1
              }`}</div>
              <div className="day-title">ЗАВТРА</div>
            </div>
          </div>
        </div>
      </div>
      {toggler && <DatePicker selected={startDate} onChange={date => onClose(date)} inline />}
    </div>
  );
};

const mapDispatch = {
  dayIs: findWhatDay,
};

export default connect(null, mapDispatch)(TabContent);
