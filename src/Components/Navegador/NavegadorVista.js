
import React from 'react';

import TituloVista from './Components/TituloVista';
import PanelVista from './Components/PanelVista';

const NavegadorVista = (props) => {

    return (
        <div className="row bg-danger shadow-lg">
            <div className=" col-md-1 col-sm-12 text-center ">
                <TituloVista/>
            </div>
            <div id="" className="col text-center col-md-9 col-sm-12 col-xs-12 my-auto">
                <PanelVista></PanelVista>
            </div>
        </div>
    );

}

export default NavegadorVista;