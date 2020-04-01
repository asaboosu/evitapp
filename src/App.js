import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import Inicio from './SmartComponents/Inicio';
import Compra from './SmartComponents/Compra';
import Factura from './SmartComponents/Factura';
import Producto from './SmartComponents/Producto';
import Oferta from './SmartComponents/Oferta';
import Navegador from './SmartComponents/Navegador';


class App extends Component {

    constructor(props) {
        super(props);
        this.handleDeslogear = this.handleDeslogear.bind(this);
    }

    state = {
        logeado: true,
    }

    handleDeslogear(e) {

        this.setState(state => ({
            logeado: false

        }));
        return <Redirect to="/"></Redirect>;
    }

    render() {
        return (
            <div className="container-fluid">
                <React.Fragment>
                    <Router>
                        <Navegador logeado={this.state.logeado} handleDeslogear={this.handleDeslogear}></Navegador>
                        <Switch>
                            <Route exact path="/" component={Inicio} />
                            <Route path="/compra" component={Compra} />
                            <Route path="/producto" component={Producto} />
                            <Route path="/oferta" component={Oferta} />
                            <Route path="/factura" component={Factura} />
                        </Switch>
                    </Router>
                </React.Fragment>
            </div>


        );
    }
}

export default App;