import React from 'react';
import NavegadorVista from './../Components/NavegadorVista';
import IndicadorNavegacionVista from './../Components/IndicadorNavegacionVista';

import { withRouter } from 'react-router-dom';


class Navegador extends React.Component {

    constructor(props) {
        super(props);

        //estado 
        this.state = {
            titulo: "",
            menuCategoriaAbierto: false,
            menuBuscarAbierto: false,
        }

        //titulo del navegador
        const locacion = this.props.history.location.pathname;
        const tipo = locacion.split("/")[3];
        const query = locacion.split("/")[4];
        switch (locacion) {
            case "/producto":
                this.state.titulo = "Menu";
                break;
            case "/producto/agregar":
                this.state.titulo = "Agregar Productos";
                break;
            case "/producto/ver/" + tipo:
                this.state.titulo = "Lista de " + tipo;
                break;
            case "/producto/buscar/" + tipo + "/" + query:
                this.state.titulo = "Resultados para: " + query;
                break;
            default:
                break;
        }

        //handlers
        this.handleAbrirMenu = this.handleAbrirMenu.bind(this);
        this.handleBuscarMenu = this.handleBuscarMenu.bind(this);
        this.HandleBuscarCodigo = this.HandleBuscarCodigo.bind(this);
        this.HandleBuscarNombre = this.HandleBuscarNombre.bind(this);
        this.cambiarTitulo = this.cambiarTitulo.bind(this);
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

            this.setState({
                menuBuscarAbierto: false,
                menuCategoriaAbierto: false,
            });
        });
    }

    HandleBuscarCodigo(e) {
        console.log("codigo");
        const codigo = this.refs.busquedaCodigo.value;
        this.props.history.push("/producto/buscar/codigo/" + codigo);

    }

    HandleBuscarNombre(e) {
        console.log("nombre");
        const nombre = this.refs.busquedaNombre.value;
        this.props.history.push("/producto/buscar/nombre/" + nombre);

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
                            
                        </div>
                        
                    </div>
                </React.Fragment>



            </React.Fragment>

        );
    }
}

export default withRouter(Navegador);