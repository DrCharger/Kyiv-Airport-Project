import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment/moment';

import 'react-datepicker/dist/react-datepicker.css';

const tomorrow = new Date(moment(new Date()).add(1, 'days').format());
const yesterday = new Date(moment(new Date()).subtract(1, 'days').format());

const TabContent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [toggler, setToggler] = useState(false);

  const onClick = () => {
    setToggler(!toggler);
  };
  const onClose = date => {
    setStartDate(date);
    setToggler(!toggler);
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
            <div className="days-other" onClick={() => setStartDate(yesterday)}>
              <div className="day-num">{`${new Date().getDate() - 1}/${
                new Date().getMonth() + 1
              }`}</div>
              <div className="day-title">ВЧОРА</div>
            </div>
            <div className="days-today" onClick={() => setStartDate(new Date())}>
              <div className="day-num">{`${new Date().getDate()}/${
                new Date().getMonth() + 1
              }`}</div>
              <div className="day-title">СЬОГОДНІ</div>
            </div>
            <div className="days-other" onClick={() => setStartDate(tomorrow)}>
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

export default TabContent;
