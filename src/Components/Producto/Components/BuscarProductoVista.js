import React from 'react';

const BuscarProductoVista = (props) => {

    return (
        <div className="row border border-dark">
            <div className=""></div>
            <div className="col-md-12 input-group input-group-lg" >
                <h2 className="mx-auto">Busqueda</h2>
            </div>

            <div className="col-md-12 pt-2 input-group input-group-lg" >
                <div className="input-group-prepend mx-auto">
                    <span className="input-group-text" id="inputGroup-sizing-lg">Por Nombre</span>
                </div>
                <input type="text"
                    className="form-control" aria-label="" aria-describedby="inputGroup-sizing-lg" />
                <div class="input-group-append">
                    <button class="btn btn-outline-success agregar" id="button-addon2"
                        type="button">✓</button>
                </div>
            </div>
            <div className="col-md-12 pt-2 pb-3 input-group input-group-lg  " >
                <div className="input-group-prepend mx-auto">
                    <span className="input-group-text" id="inputGroup-sizing-lg">Por Codigo</span>
                </div>
                <input type="text"
                    className="form-control" aria-label="" aria-describedby="inputGroup-sizing-lg" />
                <div class="input-group-append">
                    <button class="btn btn-outline-success agregar" id="button-addon2"
                        type="button">✓</button>
                </div>
            </div>

        </div>

    );
}

export default BuscarProductoVista;