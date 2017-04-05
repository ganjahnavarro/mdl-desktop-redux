import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import stocks from './stocks';

const rootReducer = combineReducers({
    stocks,
    routing
});

export default rootReducer;
