import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Compra from './containers/Compra.js';
import Factura from './containers/Factura';
import Producto from './containers/Producto';
import Oferta from './containers/Oferta';
import NavigationBar from './containers/NavigationBar';
import NoMatch from './containers/NoMatch';

class App extends Component {


    const state = {
        logeado: false,

    }

    render() {
        return (
            <React.Fragment>
                <NavigationBar logeado={this.state.logeado}></NavigationBar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Inicio" component={Home} />
                        <Route path="/Compra" component={Compra} />
                        <Route path="/Factura" logeado={this.state.logeado} component={Factura} />
                        <Route exact path="/Producto/:id" logeado={this.state.logeado} component={Oferta} />
                        <Route path="/Producto" logeado={this.state.logeado} component={Producto} />
                        <Route path="/" component={NoMatch} />
                    </Switch>
                </Router>
            </React.Fragment>

        );
    }
}

export default App;