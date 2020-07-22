import React from 'react';
import { Link } from 'react-router-dom';

import AbrirCompra from './Inicio/AbrirCompra';
import MenuCard from './Inicio/MenuCard';
import Carrito from './images/carrito.svg';
import Factura from './images/libreta.svg';
import Producto from './images/productos.svg';
import Oferta from './images/oferta.svg';

export default class InicioView extends React.Component {

    
    render () {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row mx-auto">
                        <div className="mx-auto col-sm-5 w-50 col-md-3">
                            <div><MenuCard imagen={ Carrito } titulo="Ventas" to="/compra" /></div>
                        </div>
                        <div className="mx-auto col-sm-5 w-50 col-md-3">

                            <div><MenuCard imagen={ Factura } titulo="Facturas" to="/factura" /></div>

                        </div>
                        <div className="mx-auto col-sm-5 w-50 col-md-3">
                            <div><MenuCard imagen={ Producto } titulo="Productos" to="/producto" /></div>

                        </div>
                        <div className="mx-auto col-sm-5 w-50 col-md-3">

                            <div><MenuCard imagen={ Oferta } titulo="Ofertas" to="/oferta" /></div>

                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-6 col-md-6 mx-auto text-center p-2">
                            <Link to="/compra/nueva"><button className="btn-success btn-sm mx-auto "><h2>Nueva Compra</h2></button></Link>
                        </div>
                        <div className="col-md-6 col-sm-6 mx-auto text-center p-2">
                            <div>
                                <AbrirCompra onClick={this.abrirCompra}></AbrirCompra>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
