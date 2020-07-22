import React from 'react';

import TablaTab from "./TablaTab";

import swal from 'sweetalert';
import Panel from './Pagar/Panel';


class Pagar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            columns: [
                {
                    Header: 'Codigo',
                    accessor: 'codigo',
                },
                {
                    Header: 'Hora',
                    accessor: 'hora',
                },
                {
                    Header: 'Total',
                    accessor: 'total',
                }
            ],
            data: this.props.data === undefined ? [] : this.props.data,
            seleccion: {
                codigo: "",
                hora: "",
                total: "",

            },
        }



    }

    completarHandler() {


    }

    seleccionarHandler(producto) {
        const productoCache = { ...producto };

        this.setState({
            seleccion: productoCache
        });
    }

    handleChangueProducto(e) {
        e.preventDefault();
        const key = e.target.getAttribute('name');
        const value = e.target.value;

        const seleccion = { ...this.state.seleccion };

        seleccion[key] = value;

        this.setState({
            seleccion
        });

    }

    limpiarHandler() {
        this.setState({
            seleccion: {
                codigo: "",
                hora: "",
                total: "",
            }
        });
    }

    eliminarHandler() {
        const data = [...this.state.data];
        var indexEliminar = null;
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if (element.codigo === this.state.seleccion.codigo && this.state.seleccion.codigo != null) {
                indexEliminar = index;
                break;
            }

        }
        if (indexEliminar !== null) {

            data.splice(indexEliminar, 1);
            this.setState({
                data
            });
            this.limpiarHandler();
        } else {
            swal("Error", "No se ha seleccionado un producto", "error");
        }

    }

    render() {
        return (
            <TablaTab
                columns={this.state.columns}
                data={this.state.data}
                panel={() =>
                    <Panel
                        abrirhandler={this.abrirhandler}
                        completarHandler={this.completarHandler}
                        eliminarHandler={this.eliminarHandler}

                    >

                    </Panel>}
                seleccion={this.state.seleccion}
                agregarHandler={this.agregarHandler}
                seleccionarHandler={this.seleccionarHandler}
                limpiarHandler={this.limpiarHandler}
                eliminarHandler={this.eliminarHandler}
                handleChangue={this.handleChangueProducto}
            ></TablaTab>

        );
    }
}

export default Pagar;

