import request from 'superagent';

const baseURL = 'http://localhost:3000';

const customGet = url =>
  request.get(url)
    .set('Accept', 'application/json')
    .set('Authorization', localStorage.getItem('id_token'));

const api = {
  fetchStops() {
    const url = `${baseURL}/stops`;
    return customGet(url);
  },
  fetchCrawls() {
    const url = `${baseURL}/crawls`;
    return customGet(url);
  },

  fetchCrawl(crawlId) {
    const url = `${baseURL}/crawls/${crawlId}`;
    return customGet(url);
  },

  signup(username, email, password) {
    console.log('TODO - signup', username, email, password);
    // const url = `${baseURL}/register`;
    // return request.get(url).set('Accept', 'application/json');
  },

  login(username, password) {
    console.log('TODO - login', username, password);
    const url = `${baseURL}/auth?_page=1`;
    return request.get(url).set('Accept', 'application/json');
  },
  logout() {
    console.log('TODO - logout');
    return true;
  },
};

export default api;
