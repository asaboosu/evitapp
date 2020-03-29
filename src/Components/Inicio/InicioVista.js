import React from 'react';
import { Link } from 'react-router-dom';

import AbrirCompra from './SmartComponents/AbrirCompra';
import MenuCard from './SmartComponents/MenuCard';

import Carrito from './../../images/carrito.svg';
import Factura from './../../images/libreta.svg';
import Producto from './../../images/productos.svg';
import Oferta from './../../images/oferta.svg';


const InicioVista = (props) => {
    return (
        <div className="container-fluid">
            <div className="row mx-auto">
                <div className="mx-auto col-sm-5 w-50 col-md-3">

                    <MenuCard imagen={Carrito} titulo="Ventas" to="/compra" />

                </div>
                <div className="mx-auto col-sm-5 w-50 col-md-3">

                    <MenuCard imagen={Factura} titulo="Facturas" to="/factura" />

                </div>
                <div className="mx-auto col-sm-5 w-50 col-md-3">
                    <MenuCard imagen={Producto} titulo="Productos" to="/producto" />

                </div>
                <div className="mx-auto col-sm-5 w-50 col-md-3">

                    <MenuCard imagen={Oferta} titulo="Ofertas" to="/oferta" />

                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-6 col-md-6 mx-auto text-center ">
                    <Link to="/compra/nueva"><button className="btn-success h-75 btn-sm p-2 mx-auto "><h2>Nueva Compra</h2></button></Link>
                </div>
                <div className="col-md-6 col-sm-6 mx-auto text-center">
                    <div>
                        <AbrirCompra
                            handleChangeCompra={props.handleChangeCompra}
                        />

                    </div>
                </div>
            </div>
        </div>

    );
}

export default InicioVista;