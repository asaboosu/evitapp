import React from 'react';
import { NavLink } from 'react-router-dom';

const NavegadorVista = (props) => {
    return (

        <div className="row">
            {props.categorias.map(categoria =>
                <div className="col-md-2 border border-dark ">
                    <NavLink to={"/producto/ver/" + categoria.toLowerCase()} onClick={props.handleClick} className="p-0" ><h5 className="bg m-0 bg-danger">{categoria}</h5></NavLink>
                </div>)

            }
        </div>
    );
}

export default NavegadorVista;
