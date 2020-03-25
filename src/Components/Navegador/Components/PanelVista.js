import React from 'react';

import { Link } from 'react-router-dom';


const PanelVista = (props) => {
    return (
        <div>
            {props.esInicio &&
                <Link to="/" className="btn btn-dark m-1"><h4>Volver Inicio <span role="img" aria-labelledby="caca">🏠</span> </h4></Link>
            }
            {props.existeAtras &&
                <Link to={'/' + props.atras} onClick={props.handleVolverAtras} className="btn btn-dark m-1"><h4>Volver Atras ⤺</h4></Link>
            }

            {props.estaLogeado &&
                <Link to={'/deslogear'} className="btn btn-dark m-1"><h4>Deslogearse</h4></Link>
            }
        </div>
    );
}

export default PanelVista;