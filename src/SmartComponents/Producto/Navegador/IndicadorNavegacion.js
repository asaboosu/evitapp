import React from 'react';

import { Link } from 'react-router-dom';

class IndicadorNavegacion extends React.Component {


    render() {
        return (
            <div className="container-fluid">
                <div className="row border border-dark">
                    <div className="col-md-3 text-center col-sm-12">
                        <h1>{this.props.titulo}</h1>
                    </div>
                    <div className="col-md-3 col-sm-4 mx-auto p-1">
                        <Link to="/producto/agregar"><button className="btn btn-block border-dark border align ">Agregar Productos</button></Link>
                    </div>
                    <div className="col-md-3 col-sm-4 mx-auto p-1">
                        <button onClick={this.props.handleBuscarMenu} className="btn btn-block border-dark border align ">Buscar</button>
                    </div>
                    <div className="col-md-3 col-sm-4  mx-auto p-1">
                        <button onClick={this.props.handleAbrirMenu} className="btn btn-block border-dark border align ">Categoria</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndicadorNavegacion;