const baseUrl = 'https://api.iev.aero/api/flights';

export const fetchFlightsList = data => {
  return fetch(`${baseUrl}/${data}`).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
};
