import React from 'react';

const IndicadorNavegacionVista = (props) => {
    return (
        <div className="row border border-dark">
            <div className="col-md-12 text-center col-sm-12">
                <h1>{props.titulo}</h1>
            </div>
            <div className="col-md-6 col-sm-6 pb-1">
                <button onClick={props.handleBuscarMenu} className="btn btn-block border-dark border align ">Buscar</button>
            </div>
            <div className="col-md-6 col-sm-6 pb-1">
                <button onClick={props.handleAbrirMenu} className="btn btn-block border-dark border align ">Categoria</button>
            </div>
        </div>
    );
}

export default IndicadorNavegacionVista;