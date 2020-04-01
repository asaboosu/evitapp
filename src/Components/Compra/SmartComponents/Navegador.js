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
            case "/compra/proceso":
                this.state.titulo = "Compras en Proceso";
                break;
            case "/compra/pagada":
                this.state.titulo = "Compras ya pagadas";
                break;
            case "/compra/nueva":
                this.state.titulo = "Nueva Compra";
                break;
            default:
                break;
        }

    }

    componentDidMount() {

        this.unlisten = this.props.history.listen((location, action) => {
            switch (location.pathname) {
                case "/compra/proceso":
                    this.setState({
                        titulo: "Compras en Proceso"
                    });
                    break;
                case "/compra/pagada":
                    this.setState({
                        titulo: "Compras ya pagadas"
                    });
                    break;
                case "/compra/nueva":
                    this.setState({
                        titulo: "Nueva Compra"
                    });

                    break;

                default:
                    console.log('default');
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