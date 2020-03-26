import React from 'react';

import { Link, useHistory } from 'react-router-dom';



const PanelVista = (props) => {
    let history = useHistory();
    return (
        <div>
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