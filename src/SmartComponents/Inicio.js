import React from 'react';
import {withRouter} from 'react-router-dom';
import InicioVista from './../Components/Inicio/InicioVista';


class Inicio extends React.Component {

    constructor(props){

    }
    
    handleChangeCompra(e){
        e.preventDefault();
        //Code
        let id = null;
        (id) => {this.props.history.push('/compra/ver/' + id);}
    }

    render(){
        return(
            <InicioVista
                handleChangeCompra={this.handleChangeCompra}
            />
        );
    }
}

export default withRouter(Inicio);