import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Navegador from './SmartComponents/Navegador';

import Tablas from './SmartComponents/Tablas'
import Buscar from './SmartComponents/Buscar'
import Agregar from './SmartComponents/Agregar';
import Menu from './SmartComponents/Menu';

const ProductoVista = (props) => {
    return (
        <BrowserRouter >
        <div className="containter ">
            <div className="row">
                <div
                    className="col-md-12 ">
                    <Navegador
                        hanleClick={props.hanleClick}
                        
                    ></Navegador>
                </div>

                <div
                    className="col-md-12 border border-dark">
                    <Switch>
                        <Route exact path="/producto" component={Menu}></Route>
                        <Route exact path="/producto/agregar" component={Agregar}></Route>
                        <Route exact path="/producto/buscar/:tipo/:query" component={Buscar}></Route>
                        <Route exact path="/producto/ver/menu" component={Menu}></Route>
                        <Route path="/producto/ver/:categoria" component={Tablas}></Route>
                    </Switch>
                </div>


            </div>
                    </div>
        </BrowserRouter>

    );
}

export default ProductoVista;