import React from 'react';

import TablaTab from "./TablaTab";

import Panel from './TablaFacturaTab/Panel';

import swal from '@sweetalert/with-react';


class TablaFacturaTab extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            titulo: this.props.año + "/" + this.props.mes,
            columns: [
                {
                    Header: 'Codigo',
                    accessor: 'codigo',
                },
                {
                    Header: 'Total',
                    accessor: 'total',
                },
                {
                    Header: 'Hora',
                    accessor: 'hora',
                },
                { Header: "", accessor: "detalles" }

            ],


        }

        this.seleccionarHandler = this.seleccionarHandler.bind(this);


    }

    seleccionarHandler(factura) {
        //actualizar data detalle
        swal(
            <Panel
                detalles={[]}
            ></Panel>
        );

    }


    render() {
        return (
            <TablaTab
                columns={this.state.columns}
                data={this.props.data}
                seleccion={this.props.seleccion.codigo}
                seleccionarHandler={this.seleccionarHandler}
            ></TablaTab>

        );
    }
}

export default TablaFacturaTab;

