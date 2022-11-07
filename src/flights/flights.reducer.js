import { today } from '../time.utilits/time.utilits';
import {
  FIND_A_DATE,
  FLIGHTS_LIST_RECIEVED,
  SHOW_SPINNER,
  FLIGHT_ID,
  FLIGHT_PRICE,
} from './flights.actions';

const initialState = {
  flightList: [],
  isFetching: false,
  date: today(new Date()),
  id: '',
  flightPrice: {
    trip: 'city',
    board: 'flightNum',
    seats: ['9 A', '9 B'],
    price: 200,
  },
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true,
      };
    case FLIGHT_PRICE:
      return {
        ...state,
        flightPrice: action.payload.data,
      };
    case FLIGHT_ID:
      return {
        ...state,
        id: action.payload.id,
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
