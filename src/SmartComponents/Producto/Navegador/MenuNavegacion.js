import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class MenuNavegacion extends React.Component {

    HandleBuscarCodigo(e) {
        const codigo = this.refs.busquedaCodigo.value;
        this.props.history.push("/producto/buscar/codigo/" + codigo);

    }

    HandleBuscarNombre(e) {
        const nombre = this.refs.busquedaNombre.value;
        this.props.history.push("/producto/buscar/nombre/" + nombre);

    }

    render() {
        return (
            <div className="container-fluid">

                {this.props.menuBuscarAbierto &&
                    <div className="row border border-dark">
                        <div className=""></div>
                        <div className="col-md-4 input-group input-group-lg" >
                            <h2 className="mx-auto">Busqueda</h2>
                        </div>

                        <div className="col-md-4 p-1 input-group input-group-lg" >
                            <div className="input-group-prepend mx-auto">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Nombre</span>
                            </div>
                            <input type="text" ref="busquedaNombre"
                                className="form-control" aria-label="" name="nombre" aria-describedby="inputGroup-sizing-lg" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-success agregar" onClick={this.HandleBuscarNombre} id="button-addon2"
                                    type="button">✓</button>
                            </div>
                        </div>
                        <div className="col-md-4 p-1 input-group input-group-lg  " >

                            <div className="input-group-prepend mx-auto">
                                <span className="input-group-text" name="codigo" id="inputGroup-sizing-lg">Codigo</span>
                            </div>
                            <input type="text" ref="busquedaCodigo"
                                className="form-control" aria-label="" onChange={this.HandleBuscarCodigo} aria-describedby="inputGroup-sizing-lg" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-success agregar" id="button-addon2"
                                    onClick={this.HandleBuscarCodigo} type="button">✓</button>
                            </div>
                        </div>
                    </div>
                }

                {this.props.menuCategoriaAbierto &&

                    <div className="row border border-dark">

                        {this.props.categorias.map(categoria =>
                            <div key={categoria} className="col-md-2 m-2 mx-auto rounded border text-center bg bg-danger border-dark ">
                                <Link to={"/producto/ver/" + categoria}><h5 className=""> <strong>{categoria}</strong></h5></Link>
                            </div>)
                        }

                    </div >
                }
            </div>
            );

    }
}

export default withRouter(MenuNavegacion);