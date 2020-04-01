import React from 'react';

import { withRouter } from 'react-router-dom';

import MenuNavegacion from './Navegador/MenuNavegacion';
import IndicadorNavegacion from './Navegador/IndicadorNavegacion';



class Navegador extends React.Component {

    constructor(props) {
        super(props);

        //estado 
        this.state = {
            titulo: "",
            menuCategoriaAbierto: false,
            menuBuscarAbierto: false,
        }

        this.handleBuscarMenu = this.handleBuscarMenu.bind(this);
        this.handleCategoriasMenu = this.handleCategoriasMenu.bind(this);

    }

    componentDidMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            const tipo = location.pathname.split("/")[3];
            const query = location.pathname.split("/")[4];
            switch (location.pathname) {
                case "/producto":
                    this.setState({
                        titulo: "Menu"
                    });
                    break;
                case "/producto/agregar":
                    this.setState({
                        titulo: "Agregar Productos"
                    });
                    break;
                case "/producto/buscar/" + tipo + "/" + query:
                    this.setState({
                        titulo: "Resultados para:" + query
                    });
                    break;
                case ("/producto/ver/" + tipo):
                    this.setState({
                        titulo: "Lista de " + tipo
                    });
                    break;

                default:
                    break;
            }
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    handleCategoriasMenu(e) {
        e.preventDefault();
        this.setState({
            menuCategoriaAbierto: !this.state.menuCategoriaAbierto,
            menuBuscarAbierto: false
        });
    }

    handleBuscarMenu(e) {
        e.preventDefault();
        this.setState({
            menuBuscarAbierto: !this.state.menuBuscarAbierto,
            menuCategoriaAbierto: false,
        });
    }


    render() {
        return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <IndicadorNavegacion
                            titulo={this.state.titulo}
                            handleCategoriasMenu={this.handleCategoriasMenu}
                            handleBuscarMenu={this.handleBuscarMenu}
                            >

                            </IndicadorNavegacion>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <MenuNavegacion
                                categorias={this.props.categorias}
                                menuCategoriaAbierto={this.state.menuCategoriaAbierto}
                                menuBuscarAbierto={this.state.menuBuscarAbierto}
                            >

                            </MenuNavegacion>
                        </div>
                    </div>

                </div>

        );
    }
}

export default withRouter(Navegador);