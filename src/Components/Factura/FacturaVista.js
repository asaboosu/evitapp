import React from 'react';
import { Switch, Route, BrowserRouter, withRouter } from 'react-router-dom';



const FacturaVista = (props) => {
    return (
        <BrowserRouter>

            <Switch>
                <Route exact path="/oferta/" ></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default withRouter(FacturaVista);

