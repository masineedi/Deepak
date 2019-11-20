const initialState = {
  count: 0,
  name: '',
};

const increducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'INC_COUNT':
      return {...state, count: state.count + 1};

    case 'DEC_COUNT':
      return {...state, count: state.count - 1};
    default:
      return state;
  }
};

export default increducer;
