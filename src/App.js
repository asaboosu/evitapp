import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom';


import Inicio from './SmartComponents/Inicio';
import Compra from './SmartComponents/Compra';
import Factura from './SmartComponents/Factura';
import Producto from './SmartComponents/Producto';
import Oferta from './SmartComponents/Oferta';
import Navegador from './SmartComponents/Navegador';
import NoMatch from './SmartComponents/NoMatch';


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
            <React.Fragment>
                <Router>
                    <Navegador logeado={this.state.logeado} handleDeslogear={this.handleDeslogear}></Navegador>
                    <Switch>
                        <Route exact path="/" component={Inicio} />
                        <Route exact path="/inicio" component={Inicio} />
                        <Route exact path="/compra" component={Compra} />
                        <Route exact path="/compra/:tipoCompra" component={Compra} />
                    </Switch>
                </Router>
            </React.Fragment>

        );
    }
}

export default App;