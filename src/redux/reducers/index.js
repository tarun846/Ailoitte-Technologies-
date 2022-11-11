import { combineReducers } from 'redux';
import { Fetchproduct } from './Fetchproduct';
import { DataReducer, backend, uiux } from './frontendreducer';

const reducers = combineReducers({
  productfetch : Fetchproduct ,
  DataReducer  :  DataReducer ,
});

export default reducers;
