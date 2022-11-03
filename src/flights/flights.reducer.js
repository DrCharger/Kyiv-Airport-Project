import { today } from '../time.utilits/time.utilits';
import { FIND_A_DATE, FLIGHTS_LIST_RECIEVED, SHOW_SPINNER } from './flights.actions';

const initialState = {
  flightList: [],
  isFetching: false,
  date: today(new Date()),
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true,
      };
    case FIND_A_DATE:
      return {
        ...state,
        date: action.payload.date,
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
