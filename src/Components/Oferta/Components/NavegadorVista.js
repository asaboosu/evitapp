import React from 'react';
import { Link } from 'react-router-dom';

const NavegadorVista = (props) => {
    return (
        <div className="row border border-dark">
            <div className="col-md-12 text-center col-sm-12">
                <h1>{props.titulo}</h1>
            </div>
            <div className="col-md-6 col-sm-6 mx-auto p-1">
                <Link to="/oferta/">
                    <button className="btn btn-block btn-info border-dark border align "><h4>Menu</h4></button>
                </Link>

            </div>
            <div className="col-md-6 col-sm-6 mx-auto p-1">
                <Link to="/oferta/agregar">
                    <button className="btn btn-block btn-info border-dark border align "><h4>Agregar</h4></button>
                </Link>
            </div>
            <div className="col-md-6 col-sm-6 mx-auto p-1">
                <Link to="/oferta/combo">
                    <button className="btn btn-block btn-info border-dark border align "><h4>Combo</h4></button>
                </Link>
            </div>
            <div className="col-md-6 col-sm-6  mx-auto p-1">
                <Link to="/oferta/cantidad">
                    <button  className="btn btn-block btn-info border-dark border align "><h4>Cantidad</h4></button>
                </Link>
            </div>
        </div>
    );
}

export default NavegadorVista;
