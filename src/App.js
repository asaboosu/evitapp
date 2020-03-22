import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Inicio from './SmartComponents/Inicio';
import Compra from './SmartComponents/Compra';
import Factura from './SmartComponents/Factura';
import Producto from './SmartComponents/Producto';
import Oferta from './SmartComponents/Oferta';
import Navegador from './SmartComponents/Navegador';
import NoMatch from './SmartComponents/NoMatch';

class App extends Component {


    state = {
        logeado: false,

    }

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Navegador logeado={this.state.logeado}></Navegador>

                    <Switch>
                        <Route exact path="/" component={Inicio} />
                        <Route exact path="/inicio" component={Inicio} />
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