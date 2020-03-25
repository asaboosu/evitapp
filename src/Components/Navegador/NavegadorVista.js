
import React from 'react';

import Titulo from './SmartComponents/Titulo';
import Panel from './SmartComponents/Panel';

const NavegadorVista = (props) => {

    return (
        <div className="row bg-danger shadow-lg">
            <div className=" col-md-5 col-sm-12 text-center ">
            
                <Titulo
                    titulo={props.titulo}
                    subTitulo={props.subTitulo}
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