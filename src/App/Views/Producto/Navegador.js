import React from 'react';

import { withRouter } from 'react-router-dom';

import MenuNavegacion from './Navegador/MenuNavegacion';
import IndicadorNavegacion from './Navegador/IndicadorNavegacion';



class Navegador extends React.Component {

    constructor ( props ) {
        super( props );

        //estado 
        this.state = {
            titulo: "",
            menuCategoriaAbierto: false,
            menuBuscarAbierto: false,
        };

        this.handleBuscarMenu = this.handleBuscarMenu.bind( this );
        this.handleCategoriasMenu = this.handleCategoriasMenu.bind( this );
        this.handleEvent = this.handleEvent.bind( this );

    }



    handleEvent () {
        this.setState( {
            menuBuscarAbierto: false,
            menuCategoriaAbierto: false,
        } );
    }

    handleCategoriasMenu ( e ) {
        e.preventDefault();
        this.setState( {
            menuCategoriaAbierto: !this.state.menuCategoriaAbierto,
            menuBuscarAbierto: false
        } );
    }

    handleBuscarMenu ( e ) {
        e.preventDefault();
        this.setState( {
            menuBuscarAbierto: !this.state.menuBuscarAbierto,
            menuCategoriaAbierto: false,
        } );
    }


    render () {
        return (
            <div className="">
                <div className="row">
                    <div className="col-12">
                        <IndicadorNavegacion
                            titulo={ this.state.titulo }
                            handleCategoriasMenu={ this.handleCategoriasMenu }
                            handleBuscarMenu={ this.handleBuscarMenu }
                            handleEvent={ this.handleEvent }
                        >

                        </IndicadorNavegacion>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <MenuNavegacion
                            categorias={ this.props.categorias }
                            menuCategoriaAbierto={ this.state.menuCategoriaAbierto }
                            menuBuscarAbierto={ this.state.menuBuscarAbierto }
                            handleEvent={ this.handleEvent }
                        >
                        </MenuNavegacion>
                    </div>
                </div>

            </div>

        );
    }
}

export default withRouter( Navegador );