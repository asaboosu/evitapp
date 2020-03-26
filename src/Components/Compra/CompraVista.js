import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';


import Navegador from './SmartComponents/Navegador';
import TablaCompra from './SmartComponents/TablaCompra';
import TablaProceso from './SmartComponents/TablaProceso';
import Nueva from './SmartComponents/Nueva';
import Menu from './SmartComponents/Menu';
import Pagar from './SmartComponents/Pagar';
import Detalle from './SmartComponents/Detalle';
import Terminada from './SmartComponents/Terminada';

const CompraVista = (props) => {
    return (
        <BrowserRouter>
            <Navegador></Navegador>
            <Switch>
                <Route exact path="/compra" component={Menu}></Route>
                <Route exact path="/compra/nueva" component={Nueva}></Route>
                <Route exact path="/compra/compra" component={TablaCompra}></Route>
                <Route exact path="/compra/proceso" component={TablaCompra}></Route>
                <Route exact path="/compra/terminar/:id" component={Terminada}></Route>
                <Route exact path="/compra/proceso" component={TablaProceso}></Route>
                <Route exact path="/compra/pagar/:id" component={Pagar}></Route>
                <Route exact path="/compra/ver/:id" component={Detalle}></Route>
            </Switch>
        </BrowserRouter>

    );
}

export default CompraVista;