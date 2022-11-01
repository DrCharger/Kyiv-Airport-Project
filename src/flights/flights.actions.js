import { fetchFlightsList } from './flights.gateWays';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST_RECIEVED';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const FIND_A_DAY = 'FIND_A_DAY';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const flightsListRecieved = flightList => {
  return {
    type: FLIGHTS_LIST_RECIEVED,
    payload: {
      flightList,
    },
  };
};

export const findWhatDay = day => {
  return {
    type: FIND_A_DAY,
    payload: {
      day,
    },
  };
};

export const getFlightList = day => {
  const thunkAction = function (dispatch) {
    // dispatch(showSpinner());
    fetchFlightsList(day).then(flightData => dispatch(flightsListRecieved(flightData)));
  };
  return thunkAction;
};
