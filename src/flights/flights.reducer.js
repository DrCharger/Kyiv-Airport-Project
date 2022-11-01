import { FIND_A_DAY, FLIGHTS_LIST_RECIEVED, SHOW_SPINNER } from './flights.actions';

const initialState = {
  flightList: [],
  isFetching: false,
  dayIs: '11-01-2022',
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true,
      };
    case FIND_A_DAY:
      return {
        ...state,
        dayIs: action.payload.day,
      };
    case FLIGHTS_LIST_RECIEVED:
      return {
        ...state,
        flightList: action.payload.flightList,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default flightsReducer;
