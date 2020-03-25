import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from './SmartComponents/Menu';
import Detalle from './SmartComponents/Detalle';
import Agregar from './SmartComponents/Agregar';

const ProductoVista = (props) => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/producto" component={Menu}></Route>
                <Route exact path="/producto/agregar" component={Agregar}></Route>
                <Route exact path="/producto/ver/:categoria" component={Detalle}></Route>
            </Switch>
        </React.Fragment>
    );
}

export default ProductoVista;