import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Ver from './Compra/Ver';
import Nueva from './Compra/Nueva';
import Pagar from './Compra/Pagar';
import Terminar from './Compra/Terminar';


export default class CompraView extends Component {
    render () {
        return (
            <BrowserRouter>

                <Switch>
                    <Route exact path="/compra" >
                    </Route>
                    <Route exact path="/compra/nueva" Component={Nueva} >
                    </Route>
                    <Route exact path="/compra/pagar" Component={Pagar} >
                    </Route>
                    <Route exact path="/compra/terminar" Component={Terminar} >
                    </Route>
                    <Route exact path="/compra/ver/:id" Component={Ver} >
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
