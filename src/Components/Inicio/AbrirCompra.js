import React from 'react';

const AbrirCompra = (props) =>  {
        return (
        <div className="input-group input-group-lg w-75 border border-success rounded rounded-lg mx-auto " >
            <div className="input-group-prepend" style={{
            height: "150%"
        }}>
                <span  style={{
            height: "150%"
        }} className="input-group-text" id="inputGroup-sizing-lg">Codigo</span>
            </div>
            <input type="text" onChange={props.handleChangeCompra} style={{
            height: "150%"
        }} className="form-control" aria-label="" aria-describedby="inputGroup-sizing-lg" />
        </div>
        );
}

export default AbrirCompra;