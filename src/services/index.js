import request from 'superagent';

const api = {
  fetchBeer() {
    const url = 'https://api.punkapi.com/v2/beers';
    return request.get(url).set('Accept', 'application/json');
  },
};

export default api;
