import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import Reducers from '../reducers';

const store = createStore(Reducers, applyMiddleware(logger, thunk));

export default store;
