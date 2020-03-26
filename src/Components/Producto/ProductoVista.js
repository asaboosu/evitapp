import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Navegador from './SmartComponents/Navegador';

import Menu from './SmartComponents/Menu';
import Detalle from './SmartComponents/Detalle';
import Agregar from './SmartComponents/Agregar';

const ProductoVista = (props) => {
    return (
        <BrowserRouter>
        <Navegador></Navegador>
            <Switch>
                <Route exact path="/producto" component={Menu}></Route>
                <Route exact path="/producto/agregar" component={Agregar}></Route>
                <Route exact path="/producto/ver/:categoria" component={Detalle}></Route>
            </Switch>
        </BrowserRouter>

    );
}

export default ProductoVista;