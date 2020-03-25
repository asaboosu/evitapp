import React from 'react';

import {Link} from 'react-router-dom';

const MenuCardVista = (props) => {
    return (
        <div className="card mx-auto p-2  mt-5 text-center border border-dark shadow shadow-lg  rounded rounded-lg" style={{ width: "14 rem", height: "90%" }}>
            <img src={props.imagen} className="w-50 card-img-top mx-auto  " alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
            </div>
            <Link to={props.to}><button onClick={() =>  {}} className="btn btn-primary w-75"><h3>Abrir</h3></button></Link>
        </div>
    );
}

export default MenuCardVista;