import React from 'react';

const AbrirCompra = (props) =>  {
        return (
        <div className="input-group input-group-lg  border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
            <div className="input-group-prepend">
                <span  className="input-group-text" id="inputGroup-sizing-lg">Codigo</span>
            </div>
            <input type="text" autoFocus onChange={props.handleChangeCompra}
         className="form-control" aria-label="" aria-describedby="inputGroup-sizing-lg" />
        </div>
        );
}

export default AbrirCompra;