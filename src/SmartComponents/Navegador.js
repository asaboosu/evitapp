import React from 'react';
import { withRouter } from 'react-router-dom';

import NavegadorVista from './../Components/Navegador/NavegadorVista';

class Navegador extends React.Component {

    constructor(props) {
        super(props);
        const esInicio = (this.props.history.location.pathname === "/") ? true : false;
        this.state = {
            titulo: "Botilleria Evita",
            subTitulo: "Inicio",
            esInicio: esInicio,
            existeAtras: false,
        }
    }


    componentDidMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            const esInicio = (location.pathname === "/") ? true : false;
            const categoria = location.pathname.split("/")[3];
            const existeAtras = true;
            this.setState({
                esInicio: esInicio,
                existeAtras: existeAtras,
                subTitulo: categoria
            });
        })
    }




    componentWillUnmount() {
        this.unlisten();
    }





    render() {
        return (
            <React.Fragment>
                <NavegadorVista
                    titulo={this.state.titulo}
                    subTitulo={this.state.subTitulo}
                    esInicio={this.state.esInicio}
                    existeAtras={this.state.existeAtras}
                    estaLogeado={this.props.logeado}
                    handleDeslogear={this.props.handleDeslogear}
                />
            </React.Fragment>
        );
    }


}

export default withRouter(Navegador);