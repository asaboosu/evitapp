import React from 'react';

import { withRouter, Redirect} from 'react-router-dom';

import NavegadorVista from './../Components/Navegador/NavegadorVista';

class Navegador extends React.Component {

    state = {
        titulo: "Botilleria Evita",
        subTitulo: "Inicio",
        esInicio: true,
        existeAtras: false,
    }

    componentDidMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            const esInicio = (location.pathname === "/") ? true : false;
            const existeAtras = true;

            this.setState({
                esInicio: esInicio,
                existeAtras: existeAtras
            });
        });
    }



    componentWillUnmount() {
        this.unlisten();
    }





    render() {
        return (
            <React.Fragment>
                {this.props.redireccionar && 
                    <Redirect to="/"></Redirect>
                }
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