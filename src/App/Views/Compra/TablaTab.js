import React, { Component } from 'react';

import Tabla from "./TablaTab/Tabla";



export default class TablaTab extends Component {



    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="bg bg-danger rounded-sm border border-dark col-md-4 col-sm-12">
                        <h1 className="text-center">{this.props.titulo}</h1>
                        <h2 className="text-center">{this.props.subTitulo}</h2>
                        {this.props.panel !== undefined &&
                            this.props.panel()
                        }
                    </div>
                    <div className="col-md-8 col-sm-12 p-1">
                        <div className="">
                            <Tabla
                                columns={this.props.columns}
                                data={this.props.data}
                                seleccionarHandler={this.props.seleccionarHandler}
                                selectedCodigo={this.props.seleccion.codigo}
                            ></Tabla>

                        </div>
                    </div>

                </div>
            </div >
        )
    }
}

