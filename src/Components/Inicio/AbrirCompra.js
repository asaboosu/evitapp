import React from 'react';

const AbrirCompra = (props) =>  {
        return (
        <div className="input-group input-group-lg w-75 border border-success rounded rounded-lg mx-auto">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-lg">Codigo</span>
            </div>
            <input type="text" onChange={props.handleChangeCompra} className="form-control" aria-label="" aria-describedby="inputGroup-sizing-lg" />
            <div className="input-group-append">
                <div className="btn btn-outline-success w-25">AbrirCompra</div>
            </div>
        </div>
        );
}

export default AbrirCompra;