import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Dashboard extends Component {

    render() {
        return <div>
            <h3>Files</h3>
            <Link to="/stocks">Stocks</Link>
        </div>;
    }
}
