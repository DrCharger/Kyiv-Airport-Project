import React from 'react';
import InputElement from './InputElement';
import './main.scss';
import ArrivalDeparture from './Arrival-Departure/ArrivalDeparture';
import { Route, Routes } from 'react-router-dom';

const MainContent = () => {
  return (
    <main className="search-flights">
      <InputElement />

      <Routes>
        <Route path="*" element={<ArrivalDeparture />} />
      </Routes>
    </main>
  );
};

export default MainContent;
