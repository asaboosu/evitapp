import React from 'react';
import {NavLink} from 'react-router-dom';

const NavegadorVista = (props) => {
    return (
                <ul className="row">
                    <div className=" col-md-1 border border-dark ">
                        <NavLink to="/compra/proceso" onClick={props.handleClick} className="bg-danger" id="proceso-tab">No pagadas</NavLink>
                    </div>
                    <div className=" border border-dark">
                        <NavLink to="/compra/pagada" onClick={props.handleClick} className="block bg-danger" id="pagada-tab">Pagadas</NavLink>
                    </div>
                </ul>
    );
}

export default NavegadorVista;
