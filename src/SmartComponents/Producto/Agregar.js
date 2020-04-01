import React, { createRef } from 'react';
import Tabla from './Tabla';
import swal from 'sweetalert';

import { withRouter } from 'react-router-dom';

class Agregar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemSeleccionado: {},
        }
        this.tabla = React.createRef();
        this.seleccionarElemento = this.seleccionarElemento.bind(this);
        this.handlerCambioProducto = this.handlerCambioProducto.bind(this);
        this.handlerLimpiarProducto = this.handlerLimpiarProducto.bind(this);
        this.handlerEliminarProducto = this.handlerEliminarProducto.bind(this);
        this.handlerlGuardarProducto = this.handlerlGuardarProducto.bind(this);
    }

    handlerAgregarProducto () {
        const codigo = this.refs.codigo.value;
        const nombre = this.refs.nombre.value;
        const tipo = this.refs.tipo.value;
        const precio = this.refs.precio.value;
        const categoria = this.refs.categoria.value;
        const existencias = this.refs.existencias.value;


        //swal
    }


    seleccionarElemento(e, producto) {
        console.log('seleccionado');
        this.setState({
            itemSeleccionado: producto
        });
    }

    //agregar crud de api

    handlerEliminarProducto() {

        console.log('eliminarProducto');
    }

    handlerlGuardarProducto() {
        console.log('guardarProducto');
    }

    handlerCambioProducto(e) {
        //agregar metodos post
        const codigo = this.refs.codigo.value;
        const nombre = this.refs.nombre.value;
        const tipo = this.refs.tipo.value;
        const precio = this.refs.precio.value;
        const categoria = this.refs.categoria.value;
        const existencias = this.refs.existencias.value;
        console.log('cambioProducto');
        this.setState({
            itemSeleccionado: {
                codigo,
                nombre,
                tipo,
                precio,
                categoria,
                existencias,
            }
        })
    }

    handlerLimpiarProducto(e) {
        const codigo = "";
        const nombre = "";
        const tipo = "";
        const precio = "";
        const categoria = "";
        const existencias = "";
        console.log('limpiarCampos');
        this.setState({
            itemSeleccionado: {
                codigo,
                nombre,
                tipo,
                precio,
                categoria,
                existencias,
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className="text-center">
                                <h1>Agregar</h1>
                                <div className="input-group m-2 input-group-lg m-2 border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-lg">Codigo</span>
                                    </div>
                                    <input ref="codigo" type="text"
                                        className="form-control" value={this.state.itemSeleccionado.codigo} onChange={this.handlerCambioProducto} aria-label="" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                                <div className="input-group input-group-lg m-2  border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-lg">Nombre</span>
                                    </div>
                                    <input ref="nombre" type="text"
                                        className="form-control" value={this.state.itemSeleccionado.nombre} onChange={this.handlerCambioProducto} aria-label="" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                                <div className="input-group input-group-lg m-2  border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-lg">Tipo</span>
                                    </div>
                                    <input ref="tipo" type="text"
                                        className="form-control" value={this.state.itemSeleccionado.tipo} onChange={this.handlerCambioProducto} aria-label="" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                                <div className="input-group input-group-lg m-2  border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-lg">Precio</span>
                                    </div>
                                    <input ref="precio" type="number"
                                        className="form-control" value={this.state.itemSeleccionado.precio} onChange={this.handlerCambioProducto} aria-label="" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                                <div className="input-group input-group-lg m-2  border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-lg">Categoria</span>
                                    </div>
                                    <input ref="categoria" type="text"
                                        className="form-control" value={this.state.itemSeleccionado.categoria} onChange={this.handlerCambioProducto} aria-label="" aria-describedby="inputGroup-sizing-lg" />
                                </div>
                                <div className="input-group input-group-lg m-2  border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-lg">Existencias</span>
                                    </div>
                                    <input ref="existencias" type="number"
                                        className="form-control" onChange={this.handlerCambioProducto} aria-label="" value={this.state.itemSeleccionado.existencias} aria-describedby="inputGroup-sizing-lg" />
                                </div>
                            </div>
                            <button className="btn btn-success btn-block" onClick={this.handlerlGuardarProducto}>Guardar</button>
                            <button className="btn btn-warning btn-block" onClick={this.handlerLimpiarProducto}>Limpiar</button>
                            <button className="btn btn-danger mb-2 btn-block" onClick={this.handlerEliminarProducto}>Eliminar Producto</button>

                        </div>
                        <div className="col-md-8 col-sm-12">
                            <Tabla
                                seleccionarElemento={this.seleccionarElemento}
                                ref = {this.tabla}
                            ></Tabla>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default withRouter(Agregar);

