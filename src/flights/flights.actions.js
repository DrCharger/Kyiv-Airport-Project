import { fetchFlightsList } from './flights.gateWays';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST_RECIEVED';
export const SHOW_SPINNER = 'SHOW_SPINNER';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const flightsListRecieved = flightsList => {
  return {
    type: FLIGHTS_LIST_RECIEVED,
    payload: {
      flightsList,
    },
  };
};

export const getTasksList = () => {
  const thunkAction = function (dispatch) {
    dispatch(showSpinner());
    fetchFlightsList().then(flightData => dispatch(flightsListRecieved(flightData)));
  };
  return thunkAction;
};
