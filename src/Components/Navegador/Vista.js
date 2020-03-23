import React from 'react';

import { NavLink } from 'react-router-dom';

import Gato from './../../images/gato.png';
const NavegadorVista = (props) => {

    return (
        <div className="row bg-danger shadow-lg p-1 mb-4">
            <div className="col-md-2 col-sm-2 text-center" style={{
                paddingTop: "1%"
            }}>
                <img src={Gato} class="text-center py-auto" style={{
                        height: "80%", width: "70%"
                    }} alt="..." />


            </div>
            <div className="col-md-8 col-sm-8 text-center align-center">
                <h1 className="font-italic text-wrap">Botilleria Evita</h1><br />
                <h2 id="seccion" className="font-weight-bolder">

                </h2>
                <NavLink to="" className="btn btn-dark m-1">Volver Inicio <span role="img" aria-labelledby="caca">🏠</span> </NavLink>

                <NavLink to="" className="btn btn-dark m-1">Volver Atras ⤺</NavLink>

                <NavLink to="" className="btn btn-dark m-1">Deslogearse</NavLink>
            </div>
            <div id="" className="text-center col-md-2 col-sm-2 my-auto">

            </div>
        </div>

    );

}

export default NavegadorVista;