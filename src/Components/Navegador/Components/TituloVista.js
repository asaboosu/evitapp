import React from 'react';
import { Link } from 'react-router-dom';

const TituloVista = (props) => {
    return (

        <React.Fragment>
            <span>
                <h1 className="font-weight-bolder" >{props.titulo}</h1>
            </span>
        </React.Fragment>
    );

}

export default TituloVista;