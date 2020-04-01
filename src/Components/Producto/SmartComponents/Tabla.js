import React, { Component } from 'react'
import 'datatables.net';
import 'datatables.net-bs4';
import 'datatables.net-responsive-bs4';
import 'jszip';
import 'pdfmake';
import 'datatables.net-autofill-bs4';
import 'datatables.net-buttons-bs4';
import 'datatables.net-colreorder-bs4';
import 'datatables.net-fixedcolumns-bs4';
import 'datatables.net-fixedheader-bs4';
import 'datatables.net-keytable-bs4';
import 'datatables.net-rowgroup-bs4';
import 'datatables.net-rowreorder-bs4';
import 'datatables.net-scroller-bs4';
import 'datatables.net-select-bs4';
//import App from "./App";
const $ = require('jquery')
$.DataTable = require('datatables.net')


class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{ codigo: 1, nombre: 'Example', tipo: "tipo", precio: "1", existencias: "1" },{ codigo: 2, nombre: 'Example2', tipo: "tipo2", precio: "12", existencias: "12" }], //modificar por ajax
            columns: [
                { data: 'codigo', title: "Codigo" },
                { data: 'nombre', title: "Nombre" },
                { data: 'tipo', title: "Tipo" },
                { data: 'precio', title: "Precio" },
                { data: 'existencias', title: "Existencias" },
            ],
        }



    }

    componentDidMount() {
        this.$el = $(this.el)
        this.$el.DataTable({
            columns: this.state.columns,
        })

    }


    componentWillUnmount() {
    }

    render() {
        return (
            <div className="table-responsive-md">
                <table id={this.props.categoria + "-table"} className="display table table-dark table-sm table-bordered table-striped" ref={el => this.el = el} width="100%" >
                    <thead>
                        <tr>
                            <th className="th-sm">Codigo</th>
                            <th className="th-sm">Nombre</th>
                            <th className="th-sm">Tipo</th>
                            <th className="th-sm">Precio</th>
                            <th className="th-sm">Existencias</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(producto => (
                                <tr key={producto.codigo + "row "} onClick={(e) => this.props.seleccionarElemento(e,producto)}>
                                    <td >{producto.codigo}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.tipo}</td>
                                    <td>{producto.precio}</td>
                                    <td>{producto.existencias}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;