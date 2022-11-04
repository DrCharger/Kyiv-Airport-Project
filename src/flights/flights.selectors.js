import { createSelector } from 'reselect';

export const dateSelector = state => state.flights.date;
export const listSelector = state => state.flights.flightList;
export const idSelector = state => state.flights.id;
