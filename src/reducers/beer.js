import { FETCH_BEER_SUCCESS, FETCH_BEER_FAILED } from '../constants/beer';

const initialState = {
  beerList: undefined,
  loading: false,
  error: undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BEER_SUCCESS: {
      const beerList = action.beer.map(b => b.name);
      return {
        beerList,
        loading: false,
      };
    }

    case FETCH_BEER_FAILED:
      return {
        loading: false,
        error: 'Fetch failed....',
      };
    default:
      return state;
  }
}
