import React from 'react';
import { Switch, Route, BrowserRouter, withRouter } from 'react-router-dom';

import Navegador from './SmartComponents/Navegador';
import ListaCantidad from './SmartComponents/ListaCantidad';
import ListaCombo from './SmartComponents/ListaCombo';
import Agregar from './SmartComponents/Agregar';
import Detalle from './SmartComponents/Detalle';


const OfertaVista = (props) => {
    return (
        <BrowserRouter>
            <Navegador></Navegador>

            <Switch>
                <Route exact path="/oferta/"></Route>
                <Route exact path="/oferta/combo" component={ListaCombo}></Route>
                <Route exact path="/oferta/cantidad" component={ListaCantidad}></Route>
                <Route exact path="/oferta/agregar" component={Agregar}></Route>
                <Route exact path="/oferta/ver/:id" component={Detalle}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default withRouter(OfertaVista);

