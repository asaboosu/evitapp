import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Navegador from './SmartComponents/Navegador';

import Detalle from './SmartComponents/Detalle';
import Agregar from './SmartComponents/Agregar';
import Menu from './SmartComponents/Menu';

const ProductoVista = (props) => {
    return (
        <BrowserRouter >
        <div className="containter p-1">
            <div className="row">
                <div
                    className="col-md-12  border border-dark" style={{
                        height: "100%"
                    }}>
                    <Navegador
                        hanleClick={props.hanleClick}
                        
                    ></Navegador>
                </div>

                <div
                    className="col-md-12">
                    <Switch>
                        <Route exact path="/producto" component={Menu}></Route>
                        <Route exact path="/producto/agregar" component={Agregar}></Route>
                        <Route exact path="/producto/buscar/:tipo/:query" component={Agregar}></Route>
                        <Route exact path="/producto/ver/menu" component={Menu}></Route>
                        <Route exact path="/producto/ver/:categoria" component={Detalle}></Route>
                    </Switch>
                </div>


            </div>
                    </div>
        </BrowserRouter>

    );
}

export default ProductoVista;