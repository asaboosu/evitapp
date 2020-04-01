import React from 'react';

const PanelTabla = (props) => {
    return (
        <React.Fragment>
                <div className="text-center">
                    <h1>Modificar Producto</h1>
                    <div className="input-group m-2 input-group-lg m-2 border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Codigo</span>
                        </div>
                        <input ref="codigo" type="text" autoFocus
                            className="form-control" value={props.itemSeleccionado.codigo} onChange={props.handlerCambioProducto} aria-label="" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                    <div className="input-group input-group-lg m-2  border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Nombre</span>
                        </div>
                        <input ref="nombre" type="text" autoFocus
                            className="form-control" value={props.itemSeleccionado.nombre} onChange={props.handlerCambioProducto} aria-label="" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                    <div className="input-group input-group-lg m-2  border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Tipo</span>
                        </div>
                        <input ref="tipo" type="text" autoFocus
                            className="form-control" value={props.itemSeleccionado.tipo} onChange={props.handlerCambioProducto} aria-label="" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                    <div className="input-group input-group-lg m-2  border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Precio</span>
                        </div>
                        <input ref="precio" type="number" autoFocus
                            className="form-control" value={props.itemSeleccionado.precio} onChange={props.handlerCambioProducto} aria-label="" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                    <div className="input-group input-group-lg m-2  border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Categoria</span>
                        </div>
                        <input ref="categoria" type="text" autoFocus
                            className="form-control" value={props.itemSeleccionado.categoria} onChange={props.handlerCambioProducto} aria-label="" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                    <div className="input-group input-group-lg m-2  border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Existencias</span>
                        </div>
                        <input ref="existencias" type="number" autoFocus
                            className="form-control" onChange={props.handlerCambioProducto} aria-label="" value={props.itemSeleccionado.existencias} aria-describedby="inputGroup-sizing-lg" />
                    </div>
                </div>
                <button className="btn btn-success btn-block">Guardar</button>
                <button className="btn btn-warning btn-block" onClick={props.handlerLimpiarProducto}>Limpiar</button>
                <button className="btn btn-danger btn-block" onClick={props.handlerLimpiarProducto}>Eliminar Producto</button>
        </React.Fragment>
    );
}
export default PanelTabla;