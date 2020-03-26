
import React from 'react';

import Titulo from './SmartComponents/Titulo';
import Panel from './SmartComponents/Panel';
import {Link} from 'react-router-dom';

const NavegadorVista = (props) => {

    return (
        <div className="row bg-danger shadow-lg border border-dark">
            <div className=" col-md-5 col-sm-12 text-center ">
            <Link to="/" ><button onClick={() => { }} className="btn btn-dark m-1"><h4>Inicio <span role="img" aria-labelledby="caca">🏠</span> </h4></button></Link>
                <Titulo

                />
            </div>
            <div className="text-center col-md-7 col-sm-12 col-xs-12 my-auto">
                <Panel
                    esInicio={props.esInicio}
                    existeAtras={props.existeAtras}
                    estaLogeado={props.estaLogeado}
                    handleDeslogear={props.handleDeslogear}
                    
                />
            </div>
        </div>
    );

}

export default NavegadorVista;