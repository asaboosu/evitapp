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
            const tituto ="";
            switch (location.pathname) {
                case "/producto/":
                        this.setState({
                            titulo:"Menu"
                        });
                    break;
                case "/producto/ver/":
                    this.setState({
                        titulo:"Busqueda:"
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
            menuCategoriaAbierto: !this.state.menuCategoriaAbierto
        });
    }
    handleBuscarMenu(e) {
        e.preventDefault();
        this.setState({
            menuBuscarAbierto: !this.state.menuBuscarAbierto
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


                <React.Fragment>

                    {this.state.menuBuscarAbierto &&

                        <BuscarProductoVista
                            handleBuscarClick={this.props.handleBuscarClick}>
                        </BuscarProductoVista>
                    }

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

                </React.Fragment>



            </React.Fragment>

        );
    }
}

export default withRouter(Navegador);