import request from 'superagent';

const baseURL = 'http://localhost:3000';

const api = {
  fetchBeer() {
    const url = 'https://api.punkapi.com/v2/beers';
    return request.get(url).set('Accept', 'application/json');
  },
  fetchStops() {
    const url = `${baseURL}/stops`;
    return request.get(url).set('Accept', 'application/json');
  },
};

export default api;
