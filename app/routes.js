import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Dashboard from './containers/Dashboard';

import Stocks from './containers/Stocks';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="/stocks" component={Stocks} />
    </Route>
);
