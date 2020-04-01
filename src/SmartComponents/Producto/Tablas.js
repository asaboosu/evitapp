import React from 'react';

import Tabla from './Tablas/Tabla';
import Panel from './Tablas/Panel';


class Tablas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemSeleccionado: {}
        }
        this.seleccionarElemento = this.seleccionarElemento.bind(this);
        this.handlerCambioProducto = this.handlerCambioProducto.bind(this);
        this.handlerLimpiarProducto = this.handlerLimpiarProducto.bind(this);
        this.handlerEliminarProducto = this.handlerEliminarProducto.bind(this);
        this.handlerlGuardarProducto = this.handlerlGuardarProducto.bind(this);
    }

    seleccionarElemento(e, producto) {
        console.log('seleccionado');
        this.setState({
            itemSeleccionado: producto
        });
    }

    //agregar crud de api



    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                                <Panel></Panel>

                        </div>
                        <div className="col-md-8 col-sm-12">

                                <Tablas categorias={this.props.categorias}></Tablas>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default Tablas;

