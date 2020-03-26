import React from 'react';
import NavegadorVista from './../Components/NavegadorVista';

class Navegador extends React.Component {
    render() {
        return (
            <NavegadorVista
                categorias={[
                    "Menu",
                    "Aguas",
                    "Cervezas",
                    "Vinos",
                    "Destilados",
                    "Licores",
                    "Snacks",
                    "Varios",
                    "Embutidos",
                    "Lacteos",
                    "Helados",
                    "Bebidas",
                    "Cigarros",
                ]}>
            </NavegadorVista>
        );
    }
}

export default Navegador;