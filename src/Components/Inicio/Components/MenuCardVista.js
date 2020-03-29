import React from 'react';

import {Link} from 'react-router-dom';

const MenuCardVista = (props) => {
    return (
        <div className="card mx-auto mt-2 p-2 text-center border border-dark shadow shadow-lg  rounded rounded-lg">
            
    <Link to={props.to}><button onClick={() =>  {}} className="btn btn-primary w-75"><h3><img src={props.imagen} className="w-50 card-img-top mx-auto  " alt="..." /></h3></button></Link>
        <h2>{props.titulo}</h2>
        </div>
    );
}

export default MenuCardVista;