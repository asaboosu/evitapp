import React from 'react';

class Panel extends React.Component {


    render () {
        return (
            <React.Fragment>

                <div className="text-center">
                    <h1>{ this.props.titulo }</h1>
                    <div className="input-group m-2 input-group-lg m-2 border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Codigo</span>
                        </div>
                        <input name="codigo" onChange={ this.props.handleChangue } value={ this.props.seleccion.codigo } type="text"
                            className="form-control" aria-label="" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                    <div className="input-group input-group-lg m-2  border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Nombre</span>
                        </div>
                        <input name="nombre" onChange={ this.props.handleChangue } value={ this.props.seleccion.nombre } type="text"
                            className="form-control" aria-label="" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                    <div className="input-group input-group-lg m-2  border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Tipo</span>
                        </div>
                        <input name="tipo" onChange={ this.props.handleChangue } value={ this.props.seleccion.tipo } type="text"
                            className="form-control" aria-label="" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                    <div className="input-group input-group-lg m-2  border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Precio</span>
                        </div>
                        <input name="precio" onChange={ this.props.handleChangue } value={ this.props.seleccion.precio } type="number"
                            className="form-control" aria-label="" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                    <div className="input-group input-group-lg m-2  border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Categoria</span>
                        </div>
                        <select name="categoria" onChange={ this.props.handleChangue } value={ this.props.seleccion.categoria } className="form-control">
                            <option value="">Seleccionar</option>
                            { this.props.categorias.map( categoria => <option key={ categoria } value={ categoria }>{ categoria }</option> ) }
                        </select>
                    </div>
                    <div className="input-group input-group-lg m-2  border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Existencias</span>
                        </div>
                        <input name="existencias" onChange={ this.props.handleChangue } value={ this.props.seleccion.existencias } type="number"
                            className="form-control" aria-label="" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                    <div className="container-fluid ">
                        <div className="row ">
                            <div className="col-lg-4 col-md-12  p-1 mx-auto">
                                <button className="btn btn-block  btn-success  " onClick={ this.props.agregarHandler }>Guardar</button>

                            </div>
                            <div className="col-lg-4 col-md-12  p-1 mx-auto">
                                <button className="btn btn-block  btn-warning " onClick={ this.props.limpiarHandler }>Limpiar</button>

                            </div>
                            <div className="col-lg-4 col-md-12  p-1 mx-auto">
                                <button className="btn btn-block  btn-danger" onClick={ this.props.eliminarHandler }>Eliminar</button>

                            </div>
                        </div>

                    </div>
                </div>




            </React.Fragment>
        );
    }
}

export default Panel;