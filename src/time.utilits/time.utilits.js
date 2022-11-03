import moment from 'moment';

export const tomorrow = new Date(moment(new Date()).add(1, 'days').format());
export const yesterday = new Date(moment(new Date()).subtract(1, 'days').format());
export const today = date => moment(date).format('DD-MM-YYYY');
