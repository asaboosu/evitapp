import React, { Component } from 'react';

import Tabla from "./Tabla/Tabla";
import Panel from "./Tabla/Panel";


export default class TablaTab extends Component {



    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    Header: 'Codigo',
                    accessor: 'codigo',
                },
                {
                    Header: 'Nombre',
                    accessor: 'nombre',
                },
                {
                    Header: 'Tipo',
                    accessor: 'tipo',
                },
                {
                    Header: 'Precio',
                    accessor: 'precio',
                },
                {
                    Header: 'Categoria',
                    accessor: 'categoria',
                },
                {
                    Header: 'Existencias',
                    accessor: 'existencias',
                },
            ],

        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <Panel
                            titulo={this.props.titulo}
                            categorias={this.props.categorias}
                            seleccion={this.props.seleccion}
                            agregarHandler={this.props.agregarHandler}
                            eliminarHandler={this.props.eliminarHandler}
                            limpiarHandler={this.props.limpiarHandler}
                            handleChangue={this.props.handleChangue}
                        ></Panel>
                    </div>
                    <div className="col-md-8 col-sm-12 p-1">
                        <div className="">
                            <Tabla
                                columns={this.state.columns}
                                data={this.props.data}
                                seleccionarHandler={this.props.seleccionarHandler}
                                selectedCodigo={this.props.seleccion.codigo}
                            ></Tabla>


                        </div>

                        {this.props.completarHandler &&
                            <button className="btn btn-primary btn-block m-3 mx-auto align-bottom" onClick={this.props.completarHandler}>Completar</button>
                        }
                    </div>

                </div>
            </div >
        )
    }
}

