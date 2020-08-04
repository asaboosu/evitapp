import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navegador from './Oferta/Navegador';
export default class OfertaView extends Component {
    render () {
        return (
            <BrowserRouter>
                <Navegador></Navegador>

                <Switch>
                    <Route exact path="/oferta/:tipo/:id" >
                    </Route>
                    <Route exact path="/oferta/:tipo" >
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
