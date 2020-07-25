import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';

import { UserController } from './../Controllers/UserController';

import Login from './Navegador/Login';

import swal from '@sweetalert/with-react';

class NavegadorView extends Component {

    //se define el estado default
    state = {
        login: false
    };

    /**
     * se trae el estado del login desde el controlador
     */
    componentDidMount () {
        this.getLogin();
    }

    getLogin = () => {
        let login = UserController.getLogin();
        this.setState( {
            login
        } );
    };

    login = () => {
        swal(
            {
                content:
                    <Login
                        eventLogin={ this.eventLogin }
                    ></Login>, button: false
            } );

    };

    Deslogin = () => {
        UserController.deslogear();
        window.location.pathname = "/";
    };

    render () {
        return (
            <div className="container-fluid">
                <div className="row bg-danger shadow-lg border border-dark">
                    <div className=" col-md-5 col-sm-12 text-center ">
                        <span>
                            <h1 className="font-weight-bolder" >Botilleria Evita</h1>
                        </span>
                    </div>
                    <div className="text-center col-md-7 col-sm-12 col-xs-12 my-auto">
                        <div>
                            { ( this.props.location.pathname !== "/" ) &&
                                <Link to="/" ><span className="btn btn-dark m-1"><h4>Inicio <span role="img" aria-labelledby="">🏠</span> </h4></span></Link>
                            }
                            { !this.state.login &&
                                <button className="btn btn-dark" onClick={ this.Login }><span ><h4>Logear</h4></span></button>
                            }
                            { this.state.login &&
                                <button className="btn btn-dark" onClick={ this.Deslogin }><span ><h4>Deslogear</h4></span></button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter( NavegadorView );