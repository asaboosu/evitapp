import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from './SmartComponents/Menu';
import ListaCantidad from './SmartComponents/ListaCantidad';
import ListaCombo from './SmartComponents/ListaCombo';
import Agregar from './SmartComponents/Agregar';
import Detalle from './SmartComponents/Detalle';


const OfertaVista = (props) => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/oferta" component={Menu}></Route>
                <Route exact path="/oferta/combo" component={ListaCombo}></Route>
                <Route exact path="/oferta/cantidad" component={ListaCantidad}></Route>
                <Route exact path="/oferta/agregar" component={Agregar}></Route>
                <Route exact path="/oferta/detalle/:id" component={Detalle}></Route>
            </Switch>
        </React.Fragment>
    );
}

export default OfertaVista;