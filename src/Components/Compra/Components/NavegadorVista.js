import React from 'react';
import {NavLink} from 'react-router-dom';

const NavegadorVista = (props) => {
    return (
           
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item border border-dark rounded ">
                        <NavLink to="/compra/proceso" onclick={props.handleClick} className="nav-link btn-danger btn" id="proceso-tab">No pagadas</NavLink>
                    </li>
                    <li className="nav-item border border-dark rounded">
                        <NavLink to="/compra/pagada" onclick={props.handleClick} className="nav-link btn-danger btn" id="pagada-tab">Pagadas</NavLink>
                    </li>
                </ul>
    );
}

export default NavegadorVista;
