import React from 'react';
import {withRouter} from 'react-router-dom';
import InicioVista from './../Components/Inicio/Menu';


class Inicio extends React.Component {


    
    handleChangeCompra(e){
        e.preventDefault();
        
    }

    render(){
        return(
            <InicioVista
                handleChangeCompra={this.handleChangeCompra}
            ></InicioVista>
        );
    }
}

export default withRouter(Inicio);