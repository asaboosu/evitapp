import React, { Component } from 'react';

import TablaTab from './../TablaTab';

export default class Panel extends Component {

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
                    Header: 'Precio',
                    accessor: 'precio',
                },
                {
                    Header: 'Cantidad',
                    accessor: 'cantidad',
                },

            ],
        }
    }

    total() {
        let total = 0;
        this.props.detalles.map((producto) =>
            total += (producto.precio * producto.cantidad)
        );
        return total;

    }



    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Compra : {this.state.codigoFactura}</h2>
                        <h2>Total : {this.total()}</h2>
                    </div>
                    <div className="col-12">
                        <TablaTab
                            columns={this.state.columns}
                            data={this.props.detalles}
                            mostrarSelect={false}
                        ></TablaTab>
                    </div>


                </div>
            </div>
        )
    }
}
