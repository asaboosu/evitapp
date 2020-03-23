import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import AbrirCompra from './AbrirCompra';

import Carrito from './../../images/carrito.svg';
import Factura from './../../images/libreta.svg';
import Producto from './../../images/productos.svg';
import Oferta from './../../images/oferta.svg';


const InicioVista = (props) => {
    return (
        <div className="container-fluid">
            <div className="row mx-auto">
                <div className="mx-auto col-sm-12 col-md-3">
                    <div className="card mx-auto p-2  mt-5 text-center border border-dark" style={{width: "14 rem" , height : "200 px"}}>
                        <img src={Carrito} className="w-50 card-img-top mx-auto  " alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Ventas</h5>
                        </div>
                        <Link to="/carrito"><button className="btn btn-primary w-75"><h3>Abrir</h3></button></Link>
                    </div>
                </div>
                <div className="mx-auto col-sm-12 col-md-3">
                    <div className="card mx-auto  mt-5 p-2 text-center border border-dark" style={{width: "14 rem" , height : "200 px"}}>
                        <img src={Factura} className="w-50 card-img-top mx-auto w-25" alt="..." />

                        <div className="card-body">
                            <h5 className="card-title">Facturas</h5>

                        </div>
                        <Link to="/factura"><button className="btn btn-primary w-75"><h3>Abrir</h3></button></Link>


                    </div>
                </div>
                <div className="mx-auto col-sm-12 col-md-3">
                    <div className="card mx-auto p-2  mt-5 text-center border border-dark" style={{width: "14 rem" , height : "200 px"}}>
                        <img src={Producto} className="w-50 card-img-top mx-auto w-25" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Productos</h5>

                        </div>
                        <Link to="/producto"><button className="btn btn-primary w-75"><h3>Abrir</h3></button></Link>

                    </div>
                </div>
                <div className="mx-auto col-sm-12 col-md-3">
                    <div className="card mx-auto p-2  mt-5 text-center border border-dark" style={{width: "14 rem" , height : "200 px"}}>
                        <img src={Oferta} className="w-50 card-img-top mx-auto w-25" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Ofertas</h5>
                        </div>
                        <Link to="/oferta"><button className="btn btn-primary w-75"><h3>Abrir</h3></button></Link>

                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-6 mx-auto text-center">
                    <Link to="/compra/nueva"><button className="btn-success btn-sm w-75 h-100 mx-auto"><h2>Nueva Compra</h2></button></Link>
                </div>
                <div className="col-md-6 col-sm-12 mx-auto text-center">
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

export default withRouter(InicioVista);