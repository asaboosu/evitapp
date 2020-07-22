import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Navegador extends Component {

    constructor(props) {
        super(props);

        //estado 
        this.state = {
            tablaProceso: false,
            tablaPagada: false,
        }

        this.handleProceso = this.handleProceso.bind(this);
        this.handlePagadas = this.handlePagadas.bind(this);
        this.handleNueva = this.handleNueva.bind(this);

    }

    handleProceso(e) {
        this.setState({
            tablaProceso: !this.state.menuCategoriaAbierto,
            tablaPagada: false
        });
    }

    handlePagadas(e) {
        this.setState({
            tablaPagada: !this.state.menuBuscarAbierto,
            tablaProceso: false,
        });
    }

    handleNueva(e) {
        this.setState({
            tablaPagada: false,
            tablaProceso: false,
        });
    }


    render() {
        return (
            <div className="container-fluid border border-dark">
                <div className="row" >
                    <div className="col-md-5 col-sm-12 mx-auto p-1">
                        <Link to="/compra/proceso" onClick={this.handleProceso} ><button className={(this.state.tablaProceso ? "btn-danger" : "") + " btn btn-block border-dark border"} >Compras en proceso</button></Link>
                    </div>
                    <div className="col-md-5 col-sm-12 mx-auto p-1">
                        <Link to="/compra/pagada" onClick={this.handlePagadas} className={(this.state.tablaPagada ? "btn-danger" : "") + " btn btn-block border-dark border"} >Compras pagadas</Link>
                    </div>
                    <div className="col-md-1 col-sm-12 mx-auto p-1">
                        <Link to="/compra/nueva" onClick={this.handleNueva}  >
                            <button className="btn btn-block  border-dark btn-success border ">
                                Nueva ✚
                            </button>
                        </Link>
                    </div>
                </div >

            </div>

        );
    }
}
