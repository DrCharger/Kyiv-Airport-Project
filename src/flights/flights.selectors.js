import { createSelector } from 'reselect';

export const tasksSelector = state => state.tasks.tasksList;
export const isFetchingSelector = state => state.tasks.isFetching;
export const sortedTaskSelector = createSelector([tasksSelector], tasksList => {
  return tasksList.slice().sort((a, b) => a.done - b.done);
});

export const dateSelector = state => state.flights.date;
export const listSelector = state => state.flights.flightList;
