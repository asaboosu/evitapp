import React from 'react';

import TablaTab from "./TablaTab";

import Panel from "./Nueva/Panel"



class Nueva extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            idCompra: 0,

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

    componentDidMount() { }


    async completar() {

    }

    async guardar() {

    }
    /**
     * 
     * @param {object} detalle

     */


    /**
       *
       * @param {object} params
       * @param {string[codigo||nombre||categoria]} params.tipo
       * @param {string} params.query
       *
       */
    async getProductos(params) {
     
    }

    agregarHandler(detalle) {



    }



    ticket() {

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
        }

    }

    render() {
        return (

            <TablaTab
                columns={this.state.columns}
                data={this.state.data}
                titulo="Nueva Compra"
                panel={() =>
                    <Panel
                        guardar={this.guardar}
                        completar={this.completar}
                        ticket={this.ticket}
                    >
                    </Panel>
                }
                seleccion={this.state.seleccion}
                agregarHandler={this.agregarHandler}
                seleccionarHandler={this.seleccionarHandler}
                completarHandler={this.completarHandler}
                limpiarHandler={this.limpiarHandler}
                eliminarHandler={this.eliminarHandler}
                handleChangue={this.handleChangueProducto}
            ></TablaTab>




        );
    }
}

export default Nueva;
