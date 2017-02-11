const initialState = {
  c: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'INCREASE':
      return {
        c: state.c + 1,
      };
    case 'DECREASE':
      return {
        c: state.c - 1,
      };
    default:
      return {
        c: 0,
      };
  }
}
