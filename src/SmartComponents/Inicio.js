import React from 'react';
import {withRouter} from 'react-router-dom';
import Menu from './Inicio/Menu'

class Inicio extends React.Component {

    render(){
        return(
            <Menu></Menu>
        );
    }
}

export default withRouter(Inicio);