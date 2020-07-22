import React, { Component } from 'react';

import Tabla from "./TablaTab/Tabla";



export default class TablaTab extends Component {



    render() {
        return (
            <div className="container-fluid">
                <div className="row">

                    <div className={"col-sm-12 p-1 mx-auto"}>
                        <div className="">
                            <Tabla
                                columns={this.props.columns}
                                data={this.props.data}
                                mostrarSelect={this.props.mostrarSelect}
                                selectedCodigo={this.props.seleccion}
                                seleccionarHandler={this.props.seleccionarHandler}
                            ></Tabla>

                        </div>
                    </div>

                </div>
            </div >
        )
    }
}

