import React from 'react';
import NavegadorVista from './../Components/NavegadorVista';
import { withRouter } from 'react-router-dom';

class Navegador extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: ""
        }
        switch (this.props.history.location.pathname) {
            case "/oferta/combo":
                this.state.titulo = "Ofertas por Combo";
                break;
            case "/oferta/cantidad":
                this.state.titulo = "Ofertas por Cantidad";
                break;
            case "/oferta/ver/" + this.props.history.location.pathname.split("/")[3]:
                this.state.titulo = "Ver:" + this.props.history.location.pathname.split("/")[3];
                break;
            case "/oferta/":
                this.state.titulo = "Menu";
                break;
            default:
                break;
        }

    }

    componentDidMount() {

        this.unlisten = this.props.history.listen((location, action) => {
            switch (location.pathname) {
                case "/oferta/combo":
                    this.setState({
                        titulo: "Ofertas por Combo"
                    }); 
                    break;
                case "/oferta/cantidad":
                    this.setState({
                        titulo: "Ofertas por Cantidad"
                    }); break;
                case "/oferta/ver/" + location.pathname.split("/")[3]:
                    this.setState({
                        titulo: "Ver:" + this.props.history.location.pathname.split("/")[3]
                    }); break;
                case "/oferta/":
                    this.setState({
                        titulo: "Menu"
                    }); break;
                default:
                    break;
            }
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        return (
            <NavegadorVista titulo={this.state.titulo} ></NavegadorVista>
        );
    }
}

export default withRouter(Navegador);