import { FLIGHTS_LIST_RECIEVED, SHOW_SPINNER } from './flights.actions';

const initialState = {};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true,
      };
    case FLIGHTS_LIST_RECIEVED:
      return {
        ...state,
        tasksList: action.payload.taskList,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default flightsReducer;
