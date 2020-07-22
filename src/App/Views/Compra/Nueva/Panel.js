import React, { Component } from 'react'

export default class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="text-center p-1 mx-auto">
                        <div class="border border-success rounded-lg mb-4">
                            <div class="input-group input-group-lg">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-lg">TOTAL $</span>
                                </div>
                                <input type="text" className="form-control" id="total" aria-label=""
                                    aria-describedby="inputGroup-sizing-lg" />
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h3>Agregar Producto</h3>
                            <div className="input-group mt-3 mx-auto w-75">
                                <input type="text" className="form-control" autofocus
                                    placeholder="Codigo de producto" aria-label="Codigo de producto" id="codProducto"
                                    aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-success agregar" id="button-addon2"
                                        type="button">✓</button>
                                </div>
                            </div>
                            <button className="btn btn-warning mt-3 mx-auto w-75 agregarDetalleEspecial">Agregar detalle especial</button>
                        </div>
                        <hr />
                        <div className="">
                            <h3>Buscar Producto</h3>
                            <div className="input-group mt-3 mx-auto w-75">
                                <select className="input-group form-control buscar" aria-label="Categoria de producto"
                                    placeholder="Categoria de producto" name="" id="xd">
                                    <option value="">Seleccionar</option>
                                    <option value="aguas">Aguas</option>
                                    <option value="cervezas">Cervezas</option>
                                    <option value="vinos">Vinos</option>
                                    <option value="destilados">Destilados</option>
                                    <option value="licores">Licores</option>
                                    <option value="snacks">Snacks</option>
                                    <option value="varios">Varios</option>
                                    <option value="embutidos">Embutidos</option>
                                    <option value="lacteos">Lacteos</option>
                                    <option value="enlatados">Helados</option>
                                    <option value="bebidas">Bebidas</option>
                                    <option value="cigarros">Cigarros</option>
                                </select>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-success" type="button" id="buscar">✓</button>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-12 text-center p-1">
                        <button onClick={this.props.guardar} className="btn btn-primary w-25 m-1" >Guardar</button>
                        <button onClick={this.props.completar} className="btn btn-success w-25 m-1" >Completar</button>
                        <button onClick={this.props.ticket} className="btn btn-warning w-25 m-1" >Ticket</button>
                    </div>
                </div>
            </div>
        )
    }
}
