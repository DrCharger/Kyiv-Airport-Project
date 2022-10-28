import React from 'react';
import InputElement from './InputElement';
import './main.scss';
import ArrivalDeparture from './Arrival-Departure/ArrivalDeparture';

const MainContent = () => {
  return (
    <main className="search-flights">
      <InputElement />
      <ArrivalDeparture />
    </main>
  );
};

export default MainContent;
