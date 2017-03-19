import { FETCH_CRAWLS_SUCCESS, FETCH_CRAWL_SUCCESS } from './actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_CRAWLS_SUCCESS:
      return {
        crawls: action.crawls,
      };
    case FETCH_CRAWL_SUCCESS:
      return {
        crawl: action.crawl,
      };
    default:
      return state;
  }
}
