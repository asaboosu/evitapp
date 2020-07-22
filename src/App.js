import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App/Libs/bootstrap/bootstrapLoad';

import Navegador from './App/Views/NavegadorView';
import InicioView from './App/Views/InicioView';
import CompraView from './App/Views/CompraView';
import ProductoView from './App/Views/ProductoView';
import OfertaView from './App/Views/OfertaView';
import FacturaView from './App/Views/FacturaView';
import ErrorView from './App/Views/ErrorView';


export default class CoreApp extends React.Component {


    render () {
        return (
            <BrowserRouter>
                <Navegador />
                <Switch>
                    <Route exact path="/" component={ InicioView }></Route>
                    <Route exact path="/inicio" component={ InicioView } />
                    <Route exact path="/compra" component={ CompraView }></Route>
                    <Route exact path="/producto" component={ ProductoView }></Route>
                    <Route exact path="/oferta" component={ OfertaView }></Route>
                    <Route exact path="/factura" component={ FacturaView }></Route>
                    <Route  path="/" component={ErrorView}></Route>
                </Switch>
            </BrowserRouter>
        );
    }

}

