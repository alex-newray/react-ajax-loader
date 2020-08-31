const INITIAL_STATE = {
  show: false,
  count: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RAL_SET':
      return { ...state, show: action.payload };
    case 'RAL_COUNT':
      return { ...state, count: action.payload };
    default:
      return state;
  }
}
