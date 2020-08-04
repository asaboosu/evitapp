import React from 'react';

import Navegador from './Factura/Navegador';

import { withRouter, BrowserRouter, Route, Switch } from 'react-router-dom';



import TablaFacturaTab from './Factura/TablaFacturaTab';

class Factura extends React.Component {

    constructor ( props ) {
        super( props );
        this.state = {
            data: [],
            seleccion: {
                codigo: 0,
                total: 0,
                hora: 0,
                detalles: [

                ]

            }
        };
        this.handleChangeMes = this.handleChangeMes.bind( this );
        this.handleChangeAño = this.handleChangeAño.bind( this );
        this.handleChangeSeleccion = this.handleChangeSeleccion.bind( this );
        this.handleBuscar = this.handleBuscar.bind( this );


    }

    componentDidMount () {
    }

    handleBuscar ( params ) {
        alert( params );
    }

    handleChangeSeleccion ( seleccion ) {
        this.setState( {
            seleccion
        } );
    }

    handleChangeMes ( e ) {

        this.setState( {
            mes: e
        } );
    }


    handleChangeAño ( e ) {
        this.setState( {
            año: e
        } );
    }

    render () {
        return (
            <BrowserRouter >

                <Navegador>
                </Navegador>

                <Switch>
                    <Route path="/factura/" >
                        <TablaFacturaTab
                            seleccion={ this.state.seleccion }
                            data={ this.state.data }
                            handleChangeSeleccion={ this.handleChangeSeleccion }
                            handleChangeMes={ this.handleChangeMes }
                            handleChangeAño={ this.handleChangeAño }
                            handleBuscar={ this.handleBuscar }
                        ></TablaFacturaTab>
                    </Route>


                </Switch>

            </BrowserRouter>


        );
    }
}

export default withRouter( Factura );