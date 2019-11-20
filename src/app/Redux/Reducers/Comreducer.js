import {
  FETCHING_REQUEST,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
} from '../Actions/constants';

const initailState = {
  data: [],
  error: '',
};

const Comreducer = (state = initailState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCHING_REQUEST:
      return state;
    case FETCHING_SUCCESS:
      return {
        ...state,
        data: [...action.payload],
      };
    case FETCHING_FAILURE:
      return {
        ...state,
        error: {...action.payload},
      };
    default:
      return state;
  }
};

export default Comreducer;
