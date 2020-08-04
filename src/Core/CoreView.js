import React, { Component } from 'react';

import TableBuilder from './CoreView/TableBuilder';
import RouterBuilder from './CoreView/RouterBuilder';

export default class CoreView extends Component {

    static tableBuilder = TableBuilder;

    static routerBuilder = RouterBuilder;


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

