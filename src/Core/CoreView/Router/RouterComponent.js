import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Navegador />
                <Switch>
                    {props.componentForRoutes.map( component => {
                        return <Route ></Route>
                    })}
                </Switch>
            </BrowserRouter>
        </div>
    )
}
