import React from 'react';

import TitutloVista from './../Components/TituloVista';


class Titulo extends React.Component {

    render() {
        return (
            <TitutloVista
                principal={this.props.tituloPrincipal}
                secundario={this.props.tituloSecundario}
            />
        );
    }
}

export default Titulo;