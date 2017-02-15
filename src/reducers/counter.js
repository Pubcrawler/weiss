import { INCREASE, DECREASE } from '../constants/counter';

export default function (state = {}, action) {
  switch (action.type) {
    case INCREASE:
      return {
        c: state.c + 1,
      };
    case DECREASE:
      return {
        c: state.c - 1,
      };
    default:
      return {
        c: 0,
      };
  }
}
