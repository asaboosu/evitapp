import React from 'react';
import { NavLink } from 'react-router-dom';

const NavegadorVista = (props) => {
    return (

        <div className="row">
            {props.categorias.map(categoria =>
                <div className="col-md-12 border bg bg-danger border-dark ">
                    <h5 className=""> <NavLink to={"/producto/ver/" + categoria.toLowerCase()} onClick={props.handleClick}><strong>{categoria}</strong></NavLink></h5>
                </div>)
            }

        </div >
    );
}

export default NavegadorVista;
