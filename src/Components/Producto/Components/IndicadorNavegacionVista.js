import React from 'react';
import { Link } from 'react-router-dom';

const IndicadorNavegacionVista = (props) => {
    return (
        <div className="row border border-dark">
            <div className="col-md-3 text-center col-sm-12">
                <h1>{props.titulo}</h1>
            </div>
            <div className="col-md-3 col-sm-4 mx-auto p-1">
                <Link to="/producto/agregar">
                    <button className="btn btn-block border-dark border align ">Agregar Productos</button>

                </Link>
            </div>
            <div className="col-md-3 col-sm-4 mx-auto p-1">
                <button onClick={props.handleBuscarMenu} className="btn btn-block border-dark border align ">Buscar</button>
            </div>
            <div className="col-md-3 col-sm-4  mx-auto p-1">
                <button onClick={props.handleAbrirMenu} className="btn btn-block border-dark border align ">Categoria</button>
            </div>
        </div>
    );
}

export default IndicadorNavegacionVista;