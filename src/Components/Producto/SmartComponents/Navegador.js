import React from 'react';
import NavegadorVista from './../Components/NavegadorVista';
import BuscarProductoVista from './../Components/BuscarProductoVista';
import IndicadorNavegacionVista from './../Components/IndicadorNavegacionVista';

import { withRouter } from 'react-router-dom';


class Navegador extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: "Menu",
            menuCategoriaAbierto: false,
            menuBuscarAbierto: false,
        }
        this.handleAbrirMenu = this.handleAbrirMenu.bind(this);
        this.handleBuscarMenu = this.handleBuscarMenu.bind(this);
        this.cambiarTitulo = this.cambiarTitulo.bind(this);
    }

    componentDidMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            const tituto = "";
            const categoria = location.pathname.split("/")[3];

            switch (location.pathname) {
                case "/producto/ver/menu7":
                    this.setState({
                        titulo: "Menu"
                    });
                    break;
                case "/producto/buscar":
                    this.setState({
                        titulo: "Busqueda:"
                    });
                    break;
                case ("/producto/ver/" + categoria):
                    this.setState({
                        titulo: "Lista de: "+ categoria
                    });
                    break;

                default:
                    break;
            }

            this.setState({
                menuBuscarAbierto: false,
                menuCategoriaAbierto: false,
            });
        });
    }

    cambiarTitulo(titulo) {
        this.setState(
            { titulo: titulo }
        );
    }



    componentWillUnmount() {
        this.unlisten();
    }



    handleAbrirMenu(e) {
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
            <React.Fragment>

                <IndicadorNavegacionVista
                    handleAbrirMenu={this.handleAbrirMenu}
                    handleBuscarMenu={this.handleBuscarMenu}
                    titulo={this.state.titulo}
                />


                <React.Fragment >
                    <div className="row">
                        <div className="col-12">
                            {this.state.menuBuscarAbierto &&

                                <BuscarProductoVista
                                    handleBuscarClick={this.props.handleBuscarClick}>
                                </BuscarProductoVista>
                            }
                        </div>
                        {this.state.menuCategoriaAbierto &&

                            <NavegadorVista
                                categorias={[
                                    "Menu",
                                    "Aguas",
                                    "Cervezas",
                                    "Vinos",
                                    "Destilados",
                                    "Licores",
                                    "Snacks",
                                    "Varios",
                                    "Embutidos",
                                    "Lacteos",
                                    "Helados",
                                    "Bebidas",
                                    "Cigarros",
                                ]}
                                handleClick={this.props.handleClick} />
                        }
                    </div>
                </React.Fragment>



            </React.Fragment>

        );
    }
}

export default withRouter(Navegador);