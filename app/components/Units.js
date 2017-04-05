import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Units extends Component {

    props: {
        add: () => void,
        testMessage: string
    };

    render() {
        const { items, add, testMessage } = this.props;

        console.log(typeof testMessage);

        console.log("items: " + items);
        console.log("message: " + testMessage);

        return (
            <div>
                <div>{testMessage}</div>
                <p onClick={add}>Add</p>

                <Link to="/">home</Link>
            </div>
        );
    }

}
