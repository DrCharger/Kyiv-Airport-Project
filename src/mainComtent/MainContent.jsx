import React from 'react';
import InputElement from './InputElement';
import './main.scss';
import ArrivalDeparture from './Arrival-Departure/ArrivalDeparture';
import PageNotFound from '../data/PageNotFound';
import { Route, Switch } from 'react-router-dom';

const MainContent = () => {
  return (
    <main className="search-flights">
      <InputElement />

      <Switch>
        <Route path="/">
          <ArrivalDeparture />
        </Route>
        <Route>
          {' '}
          <PageNotFound path="*" />
        </Route>
      </Switch>
    </main>
  );
};

export default MainContent;
