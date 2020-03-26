import React from 'react';

import { Link, useHistory } from 'react-router-dom';



const PanelVista = (props) => {
    let history = useHistory();
    return (
        <div>
            {!props.esInicio &&
                <Link to="/" ><button onClick={() => {}} className="btn btn-dark m-1"><h4>Inicio <span role="img" aria-labelledby="caca">🏠</span> </h4></button></Link>
            }
            {props.existeAtras &&
                <button onClick={ () => {history.goBack()}} className="btn btn-dark m-1"><h4>Atras ⤺</h4></button>
            }
            {props.estaLogeado &&
                <Link to="/" onClick={props.handleDeslogear}><button  onClick={() => (1)} className="btn btn-dark m-1"><h4>Deslogear</h4></button></Link>
            }
        </div>
    );
}

export default PanelVista;