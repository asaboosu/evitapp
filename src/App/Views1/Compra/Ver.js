import React from 'react';
import { withRouter } from 'react-router-dom';
import TablaTab from "./TablaTab";
import Panel from "./Nueva/Panel"

class Nueva extends React.Component {


    //todo pasar logica al controlador
    constructor(props) {
        super(props);

        this.state = {

            idCompra: this.props.match.params.id,

            dataBusqueda: [],

            total: 0,

            hora: 0,

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
                    Header: 'cantidad',
                    accessor: 'cantidad',
                },
                {
                    Header: '$ Total',
                    accessor: 'total',
                }
            ],

            data: [],

            seleccion: {
                codigo: "",
                nombre: "",
                tipo: "",
                cantidad: "",
                total: "",
            },

        }


    }

    ticket() {

    }

    async completar() {

    }

    async guardar() {

    }

    /**
    *
    * @param {object} params
    * @param {string[codigo||nombre||categoria]} params
    * @param {string} params
    *
    */
    async getProductos({ tipo, query }) {}

    async sincronizarCompra() { }


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

        this.sincronizarCompra();
    }

    limpiarHandler() {
        this.setState({
            seleccion: {
                codigo: "",
                nombre: "",
                tipo: "",
                cantidad: "",
                total: "",
            },
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
            this.sincronizarCompra();
            this.limpiarHandler();
        }
    }

    render() {
        return (

            <TablaTab
                columns={this.state.columns}
                data={this.state.data}
                titulo={"ID: " + this.props.match.params.id}
                panel={() => <Panel></Panel>}
                seleccion={this.state.seleccion}
                agregarHandler={this.agregarHandler}
                seleccionarHandler={this.seleccionarHandler}
                completarHandler={this.completar}
                limpiarHandler={this.limpiarHandler}
                eliminarHandler={this.eliminarHandler}
                handleChangue={this.handleChangueProducto}
            ></TablaTab>




        );
    }
}

export default withRouter(Nueva);
