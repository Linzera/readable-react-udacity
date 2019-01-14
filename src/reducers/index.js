import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import postsReducer from './postReducer';

const Reducers = combineReducers({
  categoriesState: categoriesReducer,
  postsState: postsReducer
});

export default Reducers;
