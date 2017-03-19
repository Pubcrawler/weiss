import request from 'superagent';

const baseURL = 'http://localhost:3000';

const api = {
  fetchStops() {
    const url = `${baseURL}/stops`;
    return request.get(url).set('Accept', 'application/json');
  },
  fetchCrawls() {
    const url = `${baseURL}/crawls`;
    return request.get(url).set('Accept', 'application/json');
  },

  fetchCrawl(crawlId) {
    const url = `${baseURL}/crawls/${crawlId}`;
    return request.get(url).set('Accept', 'application/json');
  },
};

export default api;
