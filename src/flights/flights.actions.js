import { fetchFlightsList } from './flights.gateWays';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST_RECIEVED';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const FIND_A_DATE = 'FIND_A_DATE';
export const FLIGHT_ID = 'FLIGHT_ID';

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

export const findDate = date => {
  return {
    type: FIND_A_DATE,
    payload: {
      date,
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

export const getFlightID = id => {
  return {
    type: FLIGHT_ID,
    payload: {
      id,
    },
  };
};
