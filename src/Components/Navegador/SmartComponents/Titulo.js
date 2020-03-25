import React from 'react';

import TitutloVista from './../Components/TituloVista';


class Titulo extends React.Component {


    render() {
        return (
            <TitutloVista
                titulo={this.props.titulo}
                subTitulo={this.props.subTitulo}
            />
        );
    }
}

export default Titulo;