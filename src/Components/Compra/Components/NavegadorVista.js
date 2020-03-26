import React from 'react';
import { NavLink } from 'react-router-dom';

const NavegadorVista = (props) => {
    return (
        <div className="row">
            <div className="col-md-4 border bg bg-danger border-dark ">
                <h5 className=""> <NavLink to="/compra/" onClick={props.handleClick} >Pagadas</NavLink></h5>
            </div>
            <div className="col-md-4 border bg bg-danger border-dark ">
                <h5 className=""> <NavLink to="/compra/pagada" onClick={props.handleClick} >Pagadas</NavLink></h5>
            </div>
        </div >
    );
}

export default NavegadorVista;
