import React from 'react';
import { Link } from 'react-router';

import { fetch } from '../actions/stocks'


class Stocks extends React.Component {

    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
        fetch(store.dispatch);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    renderItem(stock, index) {
        return <p key={index}>{stock.name}</p>
    }

    render() {
        const { store } = this.context;
        const state = store.getState();

        let stocks = state.stocks.items.map(this.renderItem);

        return <div>
            {stocks}
        </div>;
    }

}

Stocks.contextTypes = {
    store: React.PropTypes.object
}

export default Stocks;
