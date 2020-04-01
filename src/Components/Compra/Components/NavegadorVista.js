import React from 'react';
import { Link } from 'react-router-dom';

const NavegadorVista = (props) => {
    return (
        <div className="row border border-dark">
            <div className="col-md-12 text-center col-sm-12">
                <h1>{props.titulo}</h1>
            </div>
            <div className="col-md-6 col-sm-6 mx-auto p-1">
                <Link to="/compra/proceso">

                    <button className="btn btn-block btn-info border-dark border align "><h4>Compras en Proceso</h4></button>
                </Link>

            </div>
            <div className="col-md-6 col-sm-6  mx-auto p-1">
                <Link to="/compra/pagada">
                    <button  className="btn btn-block btn-info border-dark border align "><h4>Compras ya Pagadas</h4></button>
                </Link>
            </div>
        </div>
    );
}

export default NavegadorVista;
