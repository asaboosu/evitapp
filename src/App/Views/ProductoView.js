import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navegador from './Producto/Navegador';
import Agregar from './Producto/Agregar';
import Buscar from './Producto/Buscar';
import Categoria from './Producto/Categoria';



export default class ProductoView extends Component {


    /**
     * se define un array que contendra las categorias traidas desde otra clase(no lo borres)
     */
    state = {
        categorias: []
    };


    componentDidMount () {
        


    }

    render () {
        return (
            <BrowserRouter >
                <Navegador categorias={ this.state.categorias }></Navegador>

                <Switch>
                    <Route exact path="/producto/agregar">
                        <Agregar categorias={ this.state.categorias }></Agregar>
                    </Route>
                    <Route exact path="/producto/buscar/:tipo/:query">
                        <Buscar categorias={ this.state.categorias }></Buscar>
                    </Route>
                    <Route exact path={ "/producto/ver/:categoria" }>
                        <Categoria categorias={ this.state.categorias }></Categoria>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
