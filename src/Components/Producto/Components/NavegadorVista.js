import React from 'react';
import { NavLink } from 'react-router-dom';

const NavegadorVista = (props) => {
    return (
        <div className="container-fluid bg-danger">
            <div className="row">
                {props.categorias.map(categoria =>
                    <div key={categoria} className="col-md-2 m-2 mx-auto rounded border text-center bg bg-danger border-dark ">
                        <NavLink to={"/producto/ver/" + categoria.toLowerCase()} onClick={props.handleClick}><h5 className=""> <strong>{categoria}</strong></h5></NavLink>
                    </div>)
                }

            </div >
        </div>
    );
}
export default NavegadorVista;
