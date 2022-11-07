import { combineReducers } from 'redux';
import { Fetchproduct } from './Fetchproduct';
import { frontend, backend, uiux } from './frontendreducer';

const reducers = combineReducers({
  productfetch : Fetchproduct ,
  frontend: frontend,
  backend: backend,
  uiux: uiux,
});

export default reducers;
