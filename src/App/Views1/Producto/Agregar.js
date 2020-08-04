import React from 'react';

import TablaTab from "./TablaTab";

import swal from 'sweetalert';

import { ProductoController } from './../../Controllers/ProductoController';


class Agregar extends React.Component {

    constructor ( props ) {
        super( props );

        this.state = {
            data: [],
            seleccion: {
                codigo: "",
                nombre: "",
                tipo: "",
                precio: "",
                categoria: "",
                existencias: ""
            },
            titulo: "Agregar"
        };

        this.completarHandler = this.completarHandler.bind( this );
        this.agregarHandler = this.agregarHandler.bind( this );
        this.seleccionarHandler = this.seleccionarHandler.bind( this );
        this.eliminarHandler = this.eliminarHandler.bind( this );
        this.limpiarHandler = this.limpiarHandler.bind( this );
        this.handleChangueProducto = this.handleChangueProducto.bind( this );


    }

    completarHandler () {
        /**
         * {
         *  @param {boolean} result
         *  @param {string} text
         * } 
         */

        let resp = ProductoController.agregar( this.state.data );
        try
        {
            resp.then( ( resp ) => {

                swal( { icon: ( resp.resultado ) ? "success" : "error", text: resp.texto, button: false } );
                setTimeout( () => {
                    window.location.pathname = "/";
                }, 900 );
            }

            );
        } catch ( error )
        {
            swal( { text: resp.texto, icon: ( resp.resultado ) ? "success" : "error", button: false } ).then(

                setTimeout( () => {
                    swal.close();

                }, 900 )
            );

        }

    }
    agregarHandler ( e ) {


        if ( this.filtrarSeleccion() )
        {
            const dataCache = [ ...this.state.data ];
            var producto = null;
            var indexProducto = null;
            for ( let index = 0; index < dataCache.length; index++ )
            {
                const element = dataCache[ index ];
                if ( element.codigo === this.state.seleccion.codigo )
                {
                    producto = element;
                    indexProducto = index;
                    break;
                }
            }
            if ( producto === null )
            {
                dataCache.push( this.state.seleccion );
                this.setState( {
                    data: dataCache
                } );
            } else
            {
                dataCache[ indexProducto ] = this.state.seleccion;
                this.setState( {
                    data: dataCache
                } );


            }
        } else
        {
            swal( "Error", "No se han completados todos los campos", "error" );

        }



    }


    filtrarSeleccion () {
        let resp = true;
        for ( const key in this.state.seleccion )
        {
            if ( this.state.seleccion.hasOwnProperty( key ) )
            {
                const element = this.state.seleccion[ key ];
                if ( element.trim() === "" )
                {
                    resp = false;
                }
            }
        }
        return resp;
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

    eliminarHandler () {
        const data = [ ...this.state.data ];
        var indexEliminar = null;
        for ( let index = 0; index < data.length; index++ )
        {
            const element = data[ index ];
            if ( element.codigo === this.state.seleccion.codigo && this.state.seleccion.codigo != null )
            {
                indexEliminar = index;
                break;
            }

        }
        if ( indexEliminar !== null )
        {

            data.splice( indexEliminar, 1 );
            this.setState( {
                data
            } );
            this.limpiarHandler();
        } else
        {
            swal( "Error", "No se ha seleccionado un producto", "error" );
        }

    }

    render () {
        return (
            <TablaTab
                data={ this.state.data }
                titulo={ this.state.titulo }
                seleccion={ this.state.seleccion }
                categorias={ this.props.categorias }
                agregarHandler={ this.agregarHandler }
                completarHandler={ this.completarHandler }
                seleccionarHandler={ this.seleccionarHandler }
                limpiarHandler={ this.limpiarHandler }
                eliminarHandler={ this.eliminarHandler }
                handleChangue={ this.handleChangueProducto }
            ></TablaTab>

        );
    }
}

export default Agregar;

