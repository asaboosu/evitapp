import React from 'react';

import PanelVista from './../Components/PanelVista';



class Panel extends React.Component {

    
    render() {
        return (
            <PanelVista
             esInicio={this.props.esInicio} 
             existeAtras={this.props.existeAtras} 
             estaLogeado={this.props.estaLogeado} 
             handleVolverAtras={this.props.handleVolverAtras}/>
        );
    }
}


export default Panel;