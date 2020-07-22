import React from 'react';

import { withRouter } from 'react-router-dom';

class AbrirCompra extends React.Component {

    constructor(props) {
        super(props);
        this.handlerAbrirCompra = this.handlerAbrirCompra.bind(this);
    }

    handlerAbrirCompra(e) {
        this.props.history.push("/compra/ver/" + e.target.value);

    }

    render() {
        return (
            <div className="input-group input-group-lg  w-75 border border-success rounded rounded-lg mx-auto shadow shadow-lg  rounded rounded-lg " >
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-lg">Codigo</span>
                </div>
                <input type="text" autoFocus onChange={this.handlerAbrirCompra}
                    className="form-control" aria-label="" aria-describedby="inputGroup-sizing-lg" />
            </div>
        );
    }
}

export default withRouter(AbrirCompra);