import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../../bootstrap/bootstrapLoad';

import Navegador from './NavegadorView';
import InicioView from './InicioView';
import CompraView from './CompraView';
import ProductoView from './ProductoView';
import OfertaView from './OfertaView';
import FacturaView from './FacturaView';


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
                </Switch>
            </BrowserRouter>
        );
    }

}

