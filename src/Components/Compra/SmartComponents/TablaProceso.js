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


class TablaProceso extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{ codigo: 1, total: 'Example', hora: "11:22" },], //modificar por ajax
            columns: [
                { data: 'codigo', title: "Codigo" },
                { data: 'total', title: "Total" },
                { data: 'hora', title: "Hora" },
                { data: 'detalles', title: "Detalles" },
                { data: 'eliminar', title: "Eliminar" },
            ],
        }



    }

    componentDidMount() {
        console.log(this.el);
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
                            <th className="th-sm">Total</th>
                            <th className="th-sm">Hora</th>
                            <th className="th-sm">Detalles</th>
                            <th className="th-sm">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(compra => (
                                <tr key={compra.codigo + "row "} onClick={(e) => this.seleccionarElemento(e,compra)}>
                                    <td >{compra.codigo}</td>
                                    <td>{compra.total}</td>
                                    <td>{compra.hora}</td>
                                    <td>{compra.detalles}</td>
                                    <td>{compra.eliminar}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TablaProceso;