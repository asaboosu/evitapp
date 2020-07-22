import React from 'react';

import { withRouter } from 'react-router-dom';

import swal from 'sweetalert';

import TablaTab from "./TablaTab";
import { ProductoController } from '../../Controllers/ProductoController';


class Buscar extends React.Component {
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
            query: this.props.match.params.query,
            tipoQuery: this.props.match.params.tipo,
            titulo: "Busqueda: " + this.props.match.params.query,
        };


        this.agregarHandler = this.agregarHandler.bind( this );
        this.seleccionarHandler = this.seleccionarHandler.bind( this );
        this.eliminarHandler = this.eliminarHandler.bind( this );
        this.limpiarHandler = this.limpiarHandler.bind( this );
        this.handleChangueProducto = this.handleChangueProducto.bind( this );


    }


    componentDidMount () {

        let busqueda = ProductoController.buscar( this.props.match.params.query, this.props.match.params.tipoQuery );
        console.log( busqueda );
        this.setState( {
            query: this.props.match.params.query,
            tipoQuery: this.props.match.params.tipo,
            titulo: "Busqueda: " + this.props.match.params.query,
        } );
    }

    componentDidUpdate ( prevProps, prevState ) {
        if ( prevProps.match.params.query !== this.props.match.params.query &&
            prevProps.match.params.tipoQuery !== this.props.match.params.tipoQuery
        )
        {
            alert( "cambio" );
        }
    }


    filtrarSeleccion () {
        var values = Object.values( this.state.seleccion );
        var resultado = true;
        values.forEach( element => {
            if ( element === "" )
            {
                resultado = false;
            }
        } );
        return resultado;
    }

    agregarHandler ( e ) {
        e.preventDefault();


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


            } else
            {
                dataCache[ indexProducto ] = this.state.seleccion;
                this.setState( {
                    data: dataCache
                } );


            }
        } else
        {
            swal( "Error", "Faltan campos por completar", "error" );
        }



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
                titulo={ this.state.titulo }
                data={ this.state.data }
                seleccion={ this.state.seleccion }
                categorias={ this.props.categorias }
                agregarHandler={ this.agregarHandler }
                seleccionarHandler={ this.seleccionarHandler }
                limpiarHandler={ this.limpiarHandler }
                eliminarHandler={ this.eliminarHandler }
                handleChangue={ this.handleChangueProducto }
            ></TablaTab>

        );
    }
}


export default withRouter( Buscar );

