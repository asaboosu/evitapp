import React from 'react';
import { Switch, Route, BrowserRouter, withRouter } from 'react-router-dom';


import Navegador from './SmartComponents/Navegador';
import TablaPagada from './SmartComponents/TablaPagada';
import TablaProceso from './SmartComponents/TablaProceso';
import Nueva from './SmartComponents/Nueva';
import Pagar from './SmartComponents/Pagar';
import Terminada from './SmartComponents/Terminada';

const CompraVista = (props) => {
    return (
        <BrowserRouter>
            {(props.history.location.pathname.split("/")[2] !== "ver") &&
                <Navegador></Navegador>

            }
            <Switch>
                <Route exact path="/compra/pagada" component={TablaPagada}></Route>
                <Route exact path="/compra/proceso" component={TablaProceso}></Route>
                <Route exact path="/compra/nueva" component={Nueva}></Route>
                <Route exact path="/compra/pagar/:id" component={Pagar}></Route>
                <Route exact path="/compra/terminar/:id" component={Terminada}></Route>

            </Switch>
        </BrowserRouter>

    );
}

export default withRouter(CompraVista);