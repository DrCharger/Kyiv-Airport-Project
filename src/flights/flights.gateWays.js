const baseUrl = 'https://api.iev.aero/api/flights';

export const fetchFlightsList = day => {
  return fetch(`${baseUrl}/${day}`).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw new Error();
  });
};
