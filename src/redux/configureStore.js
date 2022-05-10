import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rockets from './rockets/Rockets';

const reducer = combineReducers({
  rockets,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
