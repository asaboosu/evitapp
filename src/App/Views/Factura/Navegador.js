import React, { Component } from 'react';
import swal from 'sweetalert';


class Navegador extends Component {

    constructor(props) {
        super();
        this.handlerBuscar = this.handlerBuscar.bind(this);
    }

    handlerBuscar() {
        swal();
        //agregar funcion del objeto padre
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row border border-dark">
                    <div className="col-md-2 col-sm-12 p-1 input-group input-group-lg" >
                        <h2 className="mx-auto">Facturas</h2>
                    </div>

                    <div className="col-md-4 p-1 input-group input-group-lg" >
                        <div className="input-group-prepend mx-auto">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Año</span>
                        </div>
                        <select
                            className="form-control" aria-label="" value={this.props.año} onChange={(e) => { this.props.handleChangeAño(e.target.value) }} name="nombre" aria-describedby="inputGroup-sizing-lg" >
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                        </select>
                        <div className="input-group-append">

                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 p-1 input-group input-group-lg  " >

                        <div className="input-group-prepend mx-auto">
                            <span className="input-group-text" name="codigo" id="inputGroup-sizing-lg">Mes</span>
                        </div>
                        <select type="text" ref="busquedaCodigo"
                            className="form-control" aria-label="" value={this.props.mes} onChange={(e) => { this.props.handleChangeMes(e.target.value) }} aria-describedby="inputGroup-sizing-lg" >
                            <option value="0">Todos</option>
                            <option value="1">Enero</option>
                            <option value="2">Febrero</option>
                            <option value="3">Marzo</option>
                            <option value="4">Abril</option>
                            <option value="5">Mayo</option>
                            <option value="6">Junio</option>
                            <option value="7">Julio</option>
                            <option value="8">Agosto</option>
                            <option value="9">Septiembre</option>
                            <option value="10">Octubre</option>
                            <option value="11">Noviembre</option>
                            <option value="12">Diciembre</option>
                        </select>
                        <div className="input-group-append">

                        </div>
                    </div>
                    <div className="col-md-2 p-2">
                        <button className="btn btn-secondary btn-block" onClick={this.handlerBuscar} >Buscar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navegador;
