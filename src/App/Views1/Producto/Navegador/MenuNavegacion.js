import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ProductoController } from '../../../Controllers/ProductoController';


class MenuNavegacion extends React.Component {

    constructor ( props ) {
        super( props );
        this.state = {
            categorias: [],
            nombre: "",
            codigo: ""
        };


    }

    handleChangeInputNombre = ( e ) => {
        let nombre = e.target.value;
        this.setState( { nombre } );
    };

    HandleBuscarCodigo = ( e ) => {
        const codigo = e.target.value;
        this.props.handleEvent();
        this.props.history.push( "/producto/buscar/codigo/" + codigo );

    };

    HandleBuscarNombre = ( e ) => {
        const nombre = this.state.nombre;
        this.props.handleEvent();
        this.props.history.push( "/producto/buscar/nombre/" + nombre );

    };

    render () {
        return (
            <div className="">

                { this.props.menuBuscarAbierto &&
                    <div className="row border border-dark">
                        <div className=""></div>
                        <div className="col-md-4 input-group input-group-lg" >
                            <h2 className="mx-auto">Busqueda</h2>
                        </div>

                        <div className="col-md-4 p-1 input-group input-group-lg" >
                            <div className="input-group-prepend mx-auto">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Nombre</span>
                            </div>
                            <input type="text" onChange={ this.handleChangeInputNombre }
                                className="form-control" aria-label="" name="nombre" aria-describedby="inputGroup-sizing-lg" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-success agregar" onClick={ this.HandleBuscarNombre } id="button-addon2"
                                    type="button">✓</button>
                            </div>
                        </div>
                        <div className="col-md-4 p-1 input-group input-group-lg  " >

                            <div className="input-group-prepend mx-auto">
                                <span className="input-group-text" name="codigo" id="inputGroup-sizing-lg">Codigo</span>
                            </div>
                            <input type="text"
                                className="form-control" aria-label="" onChange={ this.HandleBuscarCodigo } aria-describedby="inputGroup-sizing-lg" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-success agregar" id="button-addon2"
                                    type="button">✓</button>
                            </div>
                        </div>
                    </div>
                }

                { this.props.menuCategoriaAbierto &&

                    <div className="row border border-dark">

                        { this.props.categorias.map( categoria =>
                            <div key={ categoria } className="col-md-3 mx-auto border text-center bg bg-danger border-dark ">
                                <Link to={ "/producto/ver/" + categoria } onClick={ this.props.handleEvent }><h5 className=""> <strong>{ categoria }</strong></h5></Link>
                            </div> )
                        }

                    </div >
                }
            </div>
        );

    }
}

export default withRouter( MenuNavegacion );