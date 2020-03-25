import React from 'react';
import TablaVista from '../Components/TablaVista';

class TablaCompra extends React.Component {

    render() {
        return (
            <TablaVista idTabla="compra" columnas={["hola3","hola4"]}></TablaVista>
        );
    }
}

export default TablaCompra;