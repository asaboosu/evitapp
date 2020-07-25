import React, { Component } from 'react';

import TablaTab from "./TablaTab";
import { withRouter } from 'react-router';
import { ProductoController } from '../../Controller/ProductoController';

class Categoria extends Component {
    constructor ( props ) {
        super( props );

        this.state = {
            data: [],
            categorias: [],
            seleccionAnterior: {
                codigo: "",
                nombre: "",
                tipo: "",
                precio: "",
                categoria: "",
                existencias: ""
            },
            seleccion: {
                codigo: "",
                nombre: "",
                tipo: "",
                precio: "",
                categoria: "",
                existencias: ""
            },


        };



    }

    getProductos ( categoria ) {
        let data = ProductoController.ver( categoria );
        this.setState( {
            data
        } );
    }

    seleccionarHandler ( producto ) {
        const productoCache = { ...producto };

        this.setState( {
            seleccion: productoCache
        } );
    }

    handleChangueProducto ( e ) {
        e.preventDefault();
        const key = e.target.getAttribute( 'name' );
        const value = e.target.value;

        const seleccion = { ...this.state.seleccion };


        seleccion[ key ] = value;


        this.setState( {
            seleccion
        } );

    }

    limpiarHandler () {
        this.setState( {
            seleccion: {
                codigo: "",
                nombre: "",
                tipo: "",
                precio: "",
                categoria: "",
                existencias: ""
            }
        } );
    }


    render () {
        return (
            <TablaTab
                titulo={ "Categoria: " + this.props.match.params.categoria }
                data={ this.state.data }
                seleccion={ this.state.seleccion }
                categorias={ this.state.categorias }
                agregarHandler={ this.agregarHandler }
                seleccionarHandler={ this.seleccionarHandler }
                limpiarHandler={ this.limpiarHandler }
                eliminarHandler={ this.eliminarHandler }
                handleChangue={ this.handleChangueProducto }
            ></TablaTab>

        );
    }
}

export default withRouter( Categoria );