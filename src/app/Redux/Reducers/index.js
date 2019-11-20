import {combineReducers} from 'redux';
import Comreducer from './Comreducer';
import increducer from '../Reducers/Countreducer';

const appRecucer = combineReducers({
  home: Comreducer,
  count: increducer,
});

export default appRecucer;
