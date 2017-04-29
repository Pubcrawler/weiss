import request from 'superagent';

const baseURL = 'http://localhost:8080';

const customGet = url =>
  request.get(url)
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);

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

  signup(username, email, password, passwordConfirmation) {
    const url = `${baseURL}/authentication/signup`;
    return request.post(url)
        .send({
          username,
          email,
          password,
          passwordConfirmation,
        })
        .set('Access-Control-Allow-Origin', '*')
        .set('Accept', 'application/json');
  },

  login(username, password) {
    const url = `${baseURL}/authentication/login`;
    return request.post(url)
        .send({
          username,
          password,
        })
        .set('Access-Control-Allow-Origin', '*')
        .set('Accept', 'application/json');
  },
  logout() {
    console.log('TODO - logout');
    return true;
  },
};

export default api;
