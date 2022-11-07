import React from 'react';
import InputElement from './inputElement/InputElement';
import './main.scss';
import ArrivalDeparture from './Arrival-Departure/ArrivalDeparture';
import { Route, Routes } from 'react-router-dom';
import Basket from '../mainComtent/basket/Basket';

const MainContent = () => {
  return (
    <main className="search-flights">
      <InputElement />
      <Routes>
        {/* <Route path="*" element={<ArrivalDeparture />} /> */}
        <Route path={`*`} element={<Basket />} />
        {/* <Route path={`/buyTickets`} element={<Basket />} /> */}
      </Routes>
    </main>
  );
};

export default MainContent;
