import React from 'react';
import TablaVista from '../Components/TablaVista';

class TablaProceso extends React.Component {
    
    render() {
        return (
            <TablaVista idTabla="proceso" columnas={["hola","hola2"]}></TablaVista>
        );
    }
}

export default TablaProceso;