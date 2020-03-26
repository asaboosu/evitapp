import React from 'react';
import { Link } from 'react-router-dom';

const TituloVista = (props) => {
    return (

        <React.Fragment>
            <span>
                <h1 className="font-weight-bolder" >{props.titulo}</h1>
                <div className="align-middle"><h2 className="font-weight-bolder ">{props.subTitulo}</h2></div>
            </span>
        </React.Fragment>
    );

}

export default TituloVista;