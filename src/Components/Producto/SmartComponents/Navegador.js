import React from 'react';
import NavegadorVista from './../Components/NavegadorVista';
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
         this.HandleBuscarCodigo = this.HandleBuscarCodigo.bind(this);
        this.HandleBuscarNombre = this.HandleBuscarNombre.bind(this);
        this.cambiarTitulo = this.cambiarTitulo.bind(this);
    }

    componentDidMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            const categoria = location.pathname.split("/")[3];

            switch (location.pathname) {
                case "/producto/ver/menu":
                    this.setState({
                        titulo: "Menu"
                    });
                    break;
                case "/producto/buscar/" + location.pathname.split("/")[3] + "/" + location.pathname.split("/")[4]:
                    this.setState({
                        titulo: "Busqueda:" + location.pathname.split("/")[4]
                    });
                    break;
                case ("/producto/ver/" + categoria):
                    this.setState({
                        titulo: "Lista de: " + categoria
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
                            {this.state.menuBuscarAbierto &&
                                <div className="">
                                    <div className="row border border-dark">
                                        <div className=""></div>
                                        <div className="col-md-4 input-group input-group-lg" >
                                            <h2 className="mx-auto">Busqueda</h2>
                                        </div>

                                        <div className="col-md-4 p-1 input-group input-group-lg" >
                                            <div className="input-group-prepend mx-auto">
                                                <span className="input-group-text" id="inputGroup-sizing-lg">Por Nombre</span>
                                            </div>
                                            <input type="text" ref="busquedaNombre"
                                                className="form-control" aria-label="" name="nombre" aria-describedby="inputGroup-sizing-lg" />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-success agregar" onClick={this.HandleBuscarNombre} id="button-addon2"
                                                    type="button">✓</button>
                                            </div>
                                        </div>
                                        <div className="col-md-4 p-1 input-group input-group-lg  " >

                                            <div className="input-group-prepend mx-auto">
                                                <span className="input-group-text" name="codigo" id="inputGroup-sizing-lg">Por Codigo</span>
                                            </div>
                                            <input type="text" ref="busquedaCodigo"
                                                className="form-control" aria-label="" onChange={this.HandleBuscarCodigo} aria-describedby="inputGroup-sizing-lg" />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-success agregar" id="button-addon2"
                                                    onClick={this.HandleBuscarCodigo} type="button">✓</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        {this.state.menuCategoriaAbierto &&

                            <NavegadorVista
                                categorias={[
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