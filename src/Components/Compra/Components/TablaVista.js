import React from 'react';

const TablaVista = (props) => {
    return (
        <table id={props.idTabla} className="table table-striped table-bordered mx-auto table-responsive-sm"
            cellSpacing="0" width="95%">
            <thead className="bg-danger border border-dark">
                <tr>
                    {
                        props.columnas.map((value, index) => {
                            return <th key={index + props.idTabla} className="th-sm">{value}} ⇅</th>;
                        })
                    }
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    );
}

export default TablaVista;