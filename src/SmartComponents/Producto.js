import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navegador from './Producto/Navegador';
import Agregar from './Producto/Agregar';
import Buscar from './Producto/Buscar';
import Tablas from './Producto/Tablas';


class Producto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categorias: [
                "Aguas",
                "Cervezas",
                "Vinos",
                "Destilados",
                "Licores",
                "Snacks",
                "Varios",
                "Embutidos",
                "Lacteos",
                "Helados",
                "Bebidas",
                "Cigarros",
            ]
        }
    }

    render() {
        return (
            <BrowserRouter >
                <div className="containter ">
                    <div className="row">
                        <div
                            className="col-md-12 ">
                            <Navegador categorias={this.state.categorias}></Navegador>
                        </div>

                        <div
                            className="col-md-12 border border-dark">
                            <Switch>
                                <Route exact path="/producto/agregar" component={Agregar}></Route>
                                <Route exact path="/producto/buscar/:tipo/:query" component={Buscar}></Route>
                                <Route exact path="/producto/ver/:categoria" component={Tablas}></Route>
                            </Switch>
                        </div>


                    </div>
                </div>
            </BrowserRouter>

        );
    }
}

export default Producto;