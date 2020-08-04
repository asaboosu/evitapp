import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navegador from './Producto/Navegador';
import Agregar from './Producto/Agregar';
import Buscar from './Producto/Buscar';
import Categoria from './Producto/Categoria';



export default class ProductoView extends Component {


    render() {
        return (
            <BrowserRouter >
                <Navegador></Navegador>

                <Switch>
                    <Route exact path="/producto/agregar">
                        <Agregar ></Agregar>
                    </Route>
                    <Route exact path="/producto/buscar/:tipo/:query">
                        <Buscar></Buscar>
                    </Route>
                    <Route exact path={"/producto/ver/:categoria"}>
                        <Categoria></Categoria>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
